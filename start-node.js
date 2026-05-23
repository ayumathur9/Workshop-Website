import { createServer } from 'node:http';
import { promises as fs } from 'node:fs';
import { join, extname } from 'node:path';
import serverHandler from './dist/server/server.js';

const PORT = process.env.PORT || 8080;
const CLIENT_DIR = join(process.cwd(), 'dist', 'client');

// Simple content-type mapping
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
};

createServer(async (req, res) => {
  try {
    // 1. Construct target path in dist/client
    const urlPath = decodeURIComponent(req.url.split('?')[0]);
    // Prevent directory traversal
    const safePath = urlPath.replace(/^(\.\.[\/\\])+/, '');
    const filePath = join(CLIENT_DIR, safePath);

    // 2. Check if file exists and is not a directory
    try {
      const stats = await fs.stat(filePath);
      if (stats.isFile()) {
        const ext = extname(filePath).toLowerCase();
        res.statusCode = 200;
        res.setHeader('Content-Type', MIME_TYPES[ext] || 'application/octet-stream');
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        
        const content = await fs.readFile(filePath);
        res.end(content);
        return;
      }
    } catch {
      // File does not exist, fall through to SSR handler
    }

    // 3. Fallback: Construct the absolute URL for SSR
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers.host || `localhost:${PORT}`;
    const url = new URL(req.url, `${protocol}://${host}`);

    // 4. Read request body if present
    let body = null;
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      const chunks = [];
      for await (const chunk of req) {
        chunks.push(chunk);
      }
      body = Buffer.concat(chunks);
    }

    // 5. Construct headers
    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) {
      if (value) {
        if (Array.isArray(value)) {
          value.forEach(v => headers.append(key, v));
        } else {
          headers.set(key, value);
        }
      }
    }

    // 6. Create Web Fetch Request
    const webReq = new Request(url.toString(), {
      method: req.method,
      headers,
      body,
      duplex: body ? 'half' : undefined,
    });

    // 7. Call our handler
    const webRes = await serverHandler.fetch(webReq);

    // 8. Send headers back
    res.statusCode = webRes.status;
    res.statusMessage = webRes.statusText;
    webRes.headers.forEach((val, key) => {
      res.setHeader(key, val);
    });

    // 9. Stream response body back
    if (webRes.body) {
      const reader = webRes.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(value);
      }
    }
    res.end();
  } catch (err) {
    console.error('Error handling request:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}).listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on http://0.0.0.0:${PORT}`);
});
