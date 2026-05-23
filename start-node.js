import { createServer } from 'node:http';
import serverHandler from './dist/server/server.js';

const PORT = process.env.PORT || 8080;

createServer(async (req, res) => {
  try {
    // 1. Construct the absolute URL
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers.host || `localhost:${PORT}`;
    const url = new URL(req.url, `${protocol}://${host}`);

    // 2. Read request body if present
    let body = null;
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      const chunks = [];
      for await (const chunk of req) {
        chunks.push(chunk);
      }
      body = Buffer.concat(chunks);
    }

    // 3. Construct headers
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

    // 4. Create Web Fetch Request
    const webReq = new Request(url.toString(), {
      method: req.method,
      headers,
      body,
      duplex: body ? 'half' : undefined,
    });

    // 5. Call our handler
    const webRes = await serverHandler.fetch(webReq);

    // 6. Send headers back
    res.statusCode = webRes.status;
    res.statusMessage = webRes.statusText;
    webRes.headers.forEach((val, key) => {
      res.setHeader(key, val);
    });

    // 7. Stream response body back
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
