import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Calendar, Clock, MapPin, Sparkles, BookOpen, Lightbulb,
  Globe2, Compass, Target, Quote, Check, ArrowRight, Star,
  Award, Users, GraduationCap, Instagram, Linkedin, Mail,
  Shield, CheckCircle, Trophy, Sparkle
} from "lucide-react";
import mentorshipIllustration from "../assets/mentorship_illustration.png";
import logoUrl from "../assets/logo.png";
import sgPhoto from "../assets/SG Photo.jpeg";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "Intelligent Education — Exclusive Study Abroad Strategy Workshop  | New Delhi" },
      {
        name: "description",
        content:
          "An invite-only in-person strategy session for students & parents planning 2027/2028 Undergraduate & Master's intakes. Limited to 15 seats at Kunzum Books, GK II, New Delhi.",
      },
      { property: "og:title", content: "Your Study Abroad Journey Starts Before Applications" },
      { property: "og:description", content: "Exclusive in-person strategy session by Dr. Shivangi Goyal — only 15 seats." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "icon", type: "image/png", href: logoUrl },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: "Your Study Abroad Journey Starts Before Applications",
          startDate: "2026-06-20T17:00:00+05:30",
          endDate: "2026-06-20T19:00:00+05:30",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          location: {
            "@type": "Place",
            name: "Kunzum Books",
            address: "60, Block M, Greater Kailash II, New Delhi 110048",
          },
          organizer: { "@type": "Organization", name: "Intelligent Education" },
          performer: { "@type": "Person", name: "Dr. Shivangi Goyal" },
        }),
      },
    ],
  }),
});

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function LandingPage() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Nav scrolled={scrolled} />
      <Urgency />
      <Hero />
      <About />
      <Timeline />
      <Company />
      <Founder />
      <Learn />
      <Pricing />
      <WhyAttend />
      {/* <WhyFail />
      <Format />
      <Testimonials /> */}
      {/* <Register /> */}
      <FinalCTA />
      <Footer />
      <MobileSticky />
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav({ scrolled }: { scrolled: boolean }) {
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3 bg-background/70 backdrop-blur-xl border-b border-border" : "py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoUrl} alt="Intelligent Education Logo" className="w-8 h-8 object-contain" />
          <span className="font-serif text-xl tracking-wide text-ivory">
            Intelligent <span className="text-gold italic">Education</span>
          </span>
        </a>
        <nav className="hidden xl:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-gold transition-colors">About</a>
          <a href="#timeline" className="hover:text-gold transition-colors">Timeline</a>
          <a href="#company" className="hover:text-gold transition-colors">About Us</a>
          <a href="#founder" className="hover:text-gold transition-colors">Founder</a>
          <a href="#learn" className="hover:text-gold transition-colors">Curriculum</a>
          <a href="#pricing" className="hover:text-gold transition-colors">Pricing</a>
          <a href="#why-attend" className="hover:text-gold transition-colors">Why Attend</a>
          <a href="#register" className="hover:text-gold transition-colors"></a>
        </nav>
        <a
          href="#register"
          className="hidden md:inline-flex btn-gold px-5 py-2.5 rounded-full text-sm font-medium"
        >
          Reserve Your Seat
        </a>
      </div>
    </header>
  );
}

function Urgency() {
  return (
    <div className="fixed top-0 inset-x-0 z-40 pointer-events-none">
      <div className="mt-[68px] overflow-hidden border-y border-border bg-ink/60 backdrop-blur">
        <div className="flex whitespace-nowrap animate-marquee py-2 text-[11px] uppercase tracking-[0.3em] text-gold/80">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-10 pr-10">
              <span>Registrations closing soon</span><span>•</span>
              <span>Only 15 seats available</span><span>•</span>
              <span>20 June 2026 · 5:00 PM - 7:00 PM · Kunzum Books, GK II</span><span>•</span>
              <span>Invite-only experience</span><span>•</span>
              <span>2027 / 2028 intakes</span><span>•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="top" className="relative bg-hero grain pt-44 pb-28 md:pt-52 md:pb-36 overflow-hidden">
      <div className="glow-orb animate-float-slow" style={{ width: 520, height: 520, top: -120, left: -120, background: "oklch(0.82 0.13 85 / 18%)" }} />
      <div className="glow-orb animate-float-slow" style={{ width: 600, height: 600, bottom: -200, right: -150, background: "oklch(0.35 0.10 280 / 25%)", animationDelay: "3s" }} />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="flex justify-center mb-8 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-[11px] tracking-[0.25em] uppercase text-gold">
            <Sparkles className="w-3.5 h-3.5" /> Elite Global University Strategy Session
          </span>
        </div>

        <h1 className="reveal text-center font-serif text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight">
          Your Study Abroad Journey
          <br />
          <span className="italic text-gradient-gold">Starts Before</span> Applications.
        </h1>

        <p className="reveal mt-8 max-w-2xl mx-auto text-center text-lg md:text-xl text-muted-foreground leading-relaxed">
          An exclusive in-person strategy session for students & parents planning for
          <span className="text-ivory"> 2027 / 2028 </span>
          Undergraduate & Master's intakes.
        </p>

        <div className="reveal mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            { icon: Calendar, label: "Date", value: "20 June 2026" },
            { icon: Clock, label: "Time", value: "5:00 PM - 7:00 PM" },
            { icon: MapPin, label: "Venue", value: "Kunzum Books, GK II" },
          ].map((d) => (
            <div key={d.label} className="glass rounded-2xl p-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                <d.icon className="w-5 h-5 text-gold" />
              </div>
              <div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{d.label}</div>
                <div className="font-serif text-lg text-ivory">{d.value}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal mt-5 text-center text-sm text-muted-foreground">
          60, Block M, Greater Kailash II, New Delhi 110048
        </p>

        <div className="reveal mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#register" className="btn-gold px-8 py-4 rounded-full font-medium inline-flex items-center gap-2">
            Reserve Your Seat <ArrowRight className="w-4 h-4" />
          </a>
          <span className="btn-outline-gold px-6 py-3.5 rounded-full text-sm tracking-wide">
            Only 15 Seats Available
          </span>
        </div>

        <div className="reveal mt-16 gold-divider max-w-xl mx-auto" />
        <p className="reveal mt-6 text-center text-xs tracking-[0.4em] uppercase text-muted-foreground shimmer-text">
          Premium · Invite-Only · Future-Ready Positioning
        </p>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  const cards = [
    {
      icon: GraduationCap,
      t: "Complimentary 1-on-1 Mentorship Sessions",
      d: "A dedicated strategy session with Dr. Shivangi Goyal to map your profile positioning and global university roadmap.",
    },
    {
      icon: Users,
      t: "Founders & Community Membership Access",
      d: "Gain exclusive entry into our elite, invite-only network of high-achieving peers, successful alumni, and mentors.",
    },
    {
      icon: BookOpen,
      t: "Exclusive Study Abroad Documents & Resources",
      d: "Access premium profile-building dossiers, resume guides, and successfully accepted application essay templates.",
    },
    {
      icon: Target,
      t: "Personalized Profile Guidance",
      d: "Tailored strategic positioning to structure your unique academic voice, projects, and personal narrative.",
    },
    {
      icon: Globe2,
      t: "Elite Networking Opportunities",
      d: "Connect directly with fellow top-tier applicants and parents sharing your global academic aspirations.",
    },
    {
      icon: Award,
      t: "Official Certificate of Attendance",
      d: "Receive an accredited certificate of participation from Intelligent Education recognizing your proactive preparation.",
    },
    {
      icon: Sparkles,
      t: "Strategic Admissions Planning",
      d: "Comprehensive roadmap targeting undergraduate and master’s admissions at top-tier global universities and Ivy Leagues.",
    },
  ];
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto reveal">
          <span className="text-[11px] tracking-[0.3em] uppercase text-gold">ABOUT THE WORKSHOP</span>
          <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05]">
            More Than Admissions.
            <br />
            This Is About Building Your <em className="text-gradient-gold not-italic">Future Identity.</em>
          </h2>
          <div className="mt-10 space-y-5 text-muted-foreground text-lg leading-relaxed">
            <p>Most students start preparing too late.</p>
            <p>
              Top global universities today are not only looking for marks — they are looking for
              thinkers, creators, researchers, innovators, and students with a strong personal story.
            </p>
            <p className="text-ivory">
              This exclusive workshop helps students strategically build a world-class profile
              <span className="text-gold"> years before applications begin.</span>
            </p>
          </div>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <div
              key={c.t}
              className={`reveal glass rounded-2xl p-7 group hover:-translate-y-1 transition-all duration-500 hover:border-gold/40 ${i === 6 ? "sm:col-span-2 lg:col-span-3 flex flex-col md:flex-row md:items-center md:gap-8" : ""
                }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold/20 transition-colors ${i === 6 ? "mb-5 md:mb-0 shrink-0" : "mb-5"}`}>
                <c.icon className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-ivory">{c.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TIMELINE OF EVENTS ---------- */
function Timeline() {
  const timelineItems = [
    {
      time: "05:00 PM",
      title: "Registration & Networking",
      desc: "Welcome reception and check-in. Connect with peer families over premium refreshments.",
      icon: Users,
    },
    {
      time: "05:15 PM",
      title: "Future of Global Education",
      desc: "Understand the changing landscape of elite international education and shifting Ivy League admission trends.",
      icon: Globe2,
    },
    {
      time: "05:30 PM",
      title: "University Selection Strategy",
      desc: "A data-driven methodology for selecting institutions that match academic strengths and career aspirations.",
      icon: GraduationCap,
    },
    {
      time: "05:45 PM",
      title: "Scholarship & Funding Guidance",
      desc: "Strategic guidance on securing merit-based scholarships, research grants, and institutional financial aid.",
      icon: Award,
    },
    {
      time: "06:00 PM",
      title: "Profile Building Roadmap",
      desc: "The step-by-step process of constructing a competitive academic profile through research, projects, and leadership.",
      icon: Compass,
    },
    {
      time: "06:15 PM",
      title: "Application Strategy",
      desc: "Demystifying early action, early decision cycles, personal statement narratives, and letter of recommendation selection.",
      icon: Target,
    },
    {
      time: "06:30 PM",
      title: "Q&A Session",
      desc: "An open, interactive forum for parents and students to ask specific strategy and positioning questions.",
      icon: Quote,
    },
    {
      time: "06:45 PM - 07:00 PM",
      title: "Networking & Mentorship",
      desc: "Concluding 1-on-1 networking. Register for complimentary follow-up assessment sessions with chief mentors.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="timeline" className="relative py-28 md:py-36 bg-ink/30 overflow-hidden">
      <div className="glow-orb animate-float-slow" style={{ width: 450, height: 450, top: "20%", left: "-150px", background: "oklch(0.82 0.13 85 / 10%)" }} />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto reveal mb-20">
          <span className="text-[11px] tracking-[0.3em] uppercase text-gold">TIMELINE OF EVENTS</span>
          <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05]">
            Chronology of <em className="text-gradient-gold not-italic">Strategic Insights.</em>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            A carefully structured timeline designed to cover every crucial facet of the elite study abroad journey.
          </p>
        </div>

        <div className="relative mt-20">
          {/* Vertical central line */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-gold/10 via-gold/50 to-gold/10 -translate-x-1/2" />

          <div className="space-y-12">
            {timelineItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className={`reveal relative flex flex-col md:flex-row items-start ${i % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {/* Left/Right Text Content */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                    <div className="glass hover:border-gold/30 p-6 md:p-8 rounded-2xl transition-all duration-500 hover:-translate-y-1 group relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-3 text-[10px] tracking-widest font-mono text-gold/30 group-hover:text-gold/60 transition-colors uppercase">
                        {item.time}
                      </div>
                      <div className="text-gold font-mono text-xs tracking-wider uppercase mb-1">{item.time}</div>
                      <h3 className="font-serif text-2xl text-ivory mb-3">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  {/* Central Node (Icon & Dot) */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-4 md:top-8 z-10 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-background border border-gold/40 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:border-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-500">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT INTELLIGENT EDUCATION ---------- */
function Company() {
  return (
    <section id="company" className="relative py-28 md:py-36 bg-ink/10 overflow-hidden border-t border-border">
      <div className="glow-orb animate-float-slow" style={{ width: 600, height: 600, top: "-10%", right: "-10%", background: "oklch(0.82 0.13 85 / 8%)" }} />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side: Content */}
          <div className="lg:col-span-7 reveal">
            <span className="text-[11px] tracking-[0.3em] uppercase text-gold">ABOUT INTELLIGENT EDUCATION</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
              Architecting Global <br />
              <em className="text-gradient-gold not-italic">Academic Futures.</em>
            </h2>
            <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              Intelligent Education is an elite global advisory that operates at the intersection of intellectual development and strategic university placement. We reject the transactional counselor model, focusing instead on long-term mentorship.
            </p>

            <div className="mt-10 space-y-6">
              {/* Vision */}
              <div className="glass hover:border-gold/20 p-5 rounded-2xl transition-all duration-300">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                    <Compass className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-ivory">Our Vision</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      To empower ambitious young minds with early, strategic, and high-impact guidance, transforming natural curiosity into global intellectual leadership.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission */}
              <div className="glass hover:border-gold/20 p-5 rounded-2xl transition-all duration-300">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-ivory">Our Mission</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      To construct highly individualized development roadmaps that elevate profile competitiveness and yield consistently exceptional admissions outcomes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust */}
              <div className="glass hover:border-gold/20 p-5 rounded-2xl transition-all duration-300">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-ivory">Why Serious Families Trust Us</h3>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-gold shrink-0" />
                        <span>Exclusive 1-on-1 senior mentor commitment</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-gold shrink-0" />
                        <span>Elite placement records in Ivy League & equivalent institutions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-gold shrink-0" />
                        <span>End-to-end profile building (Research, Leadership & Projects)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Imagery */}
          <div className="lg:col-span-5 reveal relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-gold/20 to-transparent blur-2xl -z-10" />
            <div className="relative rounded-3xl p-1 bg-gradient-to-br from-border via-gold/30 to-border">
              <div className="rounded-[22px] bg-card overflow-hidden aspect-[4/5] flex items-center justify-center relative group">
                <img
                  src={mentorshipIllustration}
                  alt="Elite Mentorship & Global Education Illustration"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/35 to-transparent flex flex-col justify-end p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <img src={logoUrl} alt="Intelligent Education Logo" className="w-12 h-12 object-contain bg-white/10 p-1.5 rounded-xl border border-white/10 backdrop-blur-sm" />
                    <div>
                      <span className="text-[10px] tracking-[0.25em] uppercase text-gold block">INTELLIGENT EDUCATION</span>
                      <span className="text-[9px] tracking-wider text-muted-foreground uppercase font-mono">Mentorship Advisory</span>
                    </div>
                  </div>
                  <p className="font-serif text-xl text-ivory leading-tight">
                    Positioning natural talent against the world's most rigorous benchmarks.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl glass border border-gold/30 flex flex-col items-center justify-center p-3 text-center shadow-2xl hidden md:flex">
              <Trophy className="w-6 h-6 text-gold mb-1" />
              <span className="text-[9px] tracking-wider uppercase text-ivory font-mono">100% Success</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 5 — ABOUT THE FOUNDER ---------- */
function Founder() {
  const stats = [
    { value: "10+", label: "Years Mentoring" },
    { value: "200+", label: "Students Placed" },
    { value: "30+", label: "Ivy & Elite Univs" },
    { value: "98%", label: "Success Rate" },
  ];

  return (
    <section id="founder" className="relative py-28 md:py-36 overflow-hidden bg-background border-t border-border">
      <div className="glow-orb animate-float-slow" style={{ width: 500, height: 500, top: "25%", left: "-100px", background: "oklch(0.82 0.13 85 / 12%)" }} />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Side: Avatar/Showcase Frame */}
          <div className="lg:col-span-5 reveal flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Decorative premium elements */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/30 to-transparent blur-3xl" />
              <div className="absolute -inset-4 rounded-full border border-gold/10 animate-spin-slow hidden md:block" />

              {/* Outer Golden Border */}
              <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-br from-gold via-gold-soft to-transparent shadow-[0_0_50px_rgba(212,175,55,0.15)]">
                {/* Inner Container */}
                <div className="w-full h-full rounded-full bg-ink flex flex-col items-center justify-center overflow-hidden border border-border relative group">
                  <img
                    src={sgPhoto}
                    alt="Dr. Shivangi Goyal"
                    className="w-full h-full object-cover rounded-full scale-105 group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Subtle lines inside avatar */}
                  <div className="absolute inset-0 bg-radial-gradient from-transparent to-background/50 pointer-events-none" />
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-gold/10" />
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/10" />
                </div>
              </div>

              {/* Floating Badge */}
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full glass-strong text-[10px] tracking-[0.3em] uppercase text-gold border border-gold/30 shadow-2xl">
                Founder & Chief Mentor
              </span>
            </div>
          </div>

          {/* Right Side: Copy & Content */}
          <div className="lg:col-span-7 reveal">
            <span className="text-[11px] tracking-[0.3em] uppercase text-gold">ABOUT THE FOUNDER</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl text-ivory">Dr. Shivangi Goyal</h2>
            <p className="mt-2 text-gold tracking-widest text-xs uppercase font-mono">Chief Mentor · Intelligent Education</p>

            <p className="mt-6 text-muted-foreground leading-relaxed text-base md:text-lg">
              Dr. Shivangi Goyal is an internationally acclaimed academic mentor and admissions strategist. Believing that early, intentional preparation is the key to global university admissions, she has pioneered a developmental methodology that aligns students' natural intellectual curiosity with the high expectations of Ivy League and world-class universities.
            </p>

            <p className="mt-4 text-muted-foreground leading-relaxed text-sm md:text-base">
              Under her direct strategic guidance, students do not just memorize facts or optimize standardized test scores. They craft unique research portfolios, spearhead innovation projects, publish high-impact articles, and develop a coherent academic voice that admissions committees find impossible to ignore.
            </p>

            {/* Achievement Counters Grid */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="glass hover:border-gold/30 rounded-2xl p-5 text-center transition-all duration-300">
                  <div className="font-serif text-3xl md:text-4xl text-gradient-gold font-semibold">{s.value}</div>
                  <div className="text-[9px] tracking-[0.15em] uppercase text-muted-foreground mt-2 font-mono leading-none">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Trust Quote */}
            <div className="mt-10 relative pl-8 border-l-2 border-gold">
              <Quote className="absolute -left-3.5 -top-1 w-6 h-6 text-gold bg-background" />
              <p className="font-serif italic text-xl md:text-2xl leading-normal text-ivory">
                "The students who build competitive global profiles are those who discover their unique intellectual identity years before hitting 'Submit'."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ---------- LEARN ---------- */
function Learn() {
  const items = [
    "Publications & Research Papers",
    "Innovation Pitching",
    "Project Creation",
    "Personal Intellectual Identity",
    "What Universities Actually Look For",
    "Building Your Profile Intentionally",
    "Becoming Globally Competitive",
    "Building an Offering Beyond Grades",
    "Creating a Strong 'Why You' Story",
    "Ivy League & Top University Positioning",
    "Strategic Roadmap for 2027/2028 Intake",
  ];
  return (
    <section id="learn" className="relative py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center reveal">
          <span className="text-[11px] tracking-[0.3em] uppercase text-gold">The Curriculum</span>
          <h2 className="mt-5 font-serif text-4xl md:text-6xl">What You Will Learn</h2>
          <p className="mt-5 max-w-2xl mx-auto text-muted-foreground">
            A precise, high-signal walkthrough of the levers that move world-class admissions outcomes.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <div
              key={it}
              className="reveal glass rounded-xl p-5 flex items-start gap-4 hover:border-gold/40 hover:translate-x-1 transition-all duration-500"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="mt-0.5 shrink-0 w-7 h-7 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 text-gold" />
              </div>
              <p className="text-ivory leading-snug">{it}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PRICING CARDS ---------- */
function Pricing() {
  const [timeLeft, setTimeLeft] = useState({ days: 1, hours: 5, minutes: 24, seconds: 43 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const tiers = [
    {
      title: "Single Student",
      price: 1299,
      earlyBird: 999,
      badge: "Standard Access",
      urgency: "Only 4 Early Bird seats left!",
      popular: false,
      features: [
        "1 Direct Seat for Student",
        "Comprehensive Seminar Dossier",
        "Interactive Q&A Session Privileges",
        "Official Certificate of Attendance",
      ],
    },
    {
      title: "Student + 1 Parent",
      price: 1599,
      earlyBird: 1100,
      badge: "Recommended Combo",
      urgency: "Only 3 Early Bird seats left!",
      popular: false,
      features: [
        "2 Seats (Student + 1 Parent / Guardian)",
        "Double Seminar Dossiers & Worksheets",
        "Family Decision-Making Alignment",
        "Direct Q&A Interaction",
        "Two Official Certificates",
      ],
    },
    {
      title: "Student + 2 Parents",
      price: 1799,
      earlyBird: 1200,
      badge: "Most Popular · Ultimate Value",
      urgency: "Only 2 seats left at this price!",
      popular: true,
      features: [
        "3 Seats (Student + Both Parents)",
        "Premium Seminar Dossier & Worksheets",
        "Pre-Seminar Profile Questionnaire",
        "Direct Strategy Q&A Prioritization",
        "Priority Post-Seminar Mentor Follow-up",
        "Three Official Certificates",
      ],
    },
  ];

  return (
    <section id="pricing" className="relative py-28 md:py-36 bg-ink/20 overflow-hidden border-t border-border">
      <div className="glow-orb animate-float-slow" style={{ width: 500, height: 500, bottom: "-100px", right: "-100px", background: "oklch(0.82 0.13 85 / 8%)" }} />
      <div className="max-w-6xl mx-auto px-6 relative">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto reveal">
          <span className="text-[11px] tracking-[0.3em] uppercase text-gold">PRICING OPTIONS</span>
          <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05]">
            Secure Your <em className="text-gradient-gold not-italic">Strategic Access.</em>
          </h2>
          <p className="mt-5 text-muted-foreground text-base md:text-lg">
            Invest in premium mentorship designed to redirect your academic path toward global top-tier institutions.
          </p>

          {/* Countdown timer card */}
          <div className="mt-10 inline-flex flex-col sm:flex-row items-center gap-4 px-6 py-3 rounded-2xl glass border border-gold/30">
            <span className="flex items-center gap-2 text-xs text-gold uppercase tracking-[0.2em] font-mono leading-none">
              <Clock className="w-4 h-4 animate-pulse" /> Early Bird Pricing Expires In:
            </span>
            <div className="flex gap-3 text-ivory font-mono text-sm leading-none font-bold">
              <div className="flex flex-col items-center">
                <span>{String(timeLeft.days).padStart(2, "0")}d</span>
              </div>
              <span className="text-gold/60">:</span>
              <div className="flex flex-col items-center">
                <span>{String(timeLeft.hours).padStart(2, "0")}h</span>
              </div>
              <span className="text-gold/60">:</span>
              <div className="flex flex-col items-center">
                <span>{String(timeLeft.minutes).padStart(2, "0")}m</span>
              </div>
              <span className="text-gold/60">:</span>
              <div className="flex flex-col items-center text-gold">
                <span>{String(timeLeft.seconds).padStart(2, "0")}s</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((t, i) => (
            <div
              key={t.title}
              className={`reveal glass rounded-3xl p-8 relative flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 group ${t.popular
                ? "border-gold/60 shadow-[0_0_40px_rgba(212,175,55,0.15)] ring-1 ring-gold/40 scale-100 lg:scale-[1.03]"
                : "hover:border-gold/40"
                }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Popular Highlighter Badge */}
              {t.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-gold via-gold-soft to-gold text-[9px] font-bold tracking-[0.2em] uppercase text-background shadow-lg">
                  MOST POPULAR COMBINATION
                </div>
              )}

              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-4">
                  <span className={`text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full ${t.popular ? "bg-gold/20 text-gold" : "bg-muted/10 text-muted-foreground"}`}>
                    {t.badge}
                  </span>
                  <span className="text-[10px] tracking-wider font-mono text-gold leading-none animate-pulse">
                    {t.urgency}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-ivory mt-6">{t.title}</h3>

                {/* Price Display */}
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="text-4xl md:text-5xl font-serif text-gradient-gold font-semibold">₹{t.earlyBird}</span>
                  <span className="text-sm text-muted-foreground line-through">₹{t.price}</span>
                  <span className="text-[9px] tracking-wider uppercase text-gold font-mono border border-gold/30 px-2 py-0.5 rounded ml-1 bg-gold/5">
                    Early Bird Rate
                  </span>
                </div>

                {/* Seat Urgency Meter */}
                <div className="mt-4 h-1.5 w-full bg-border/20 rounded-full overflow-hidden relative">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r from-gold to-gold-soft ${t.popular ? "w-[85%]" : i === 1 ? "w-[75%]" : "w-[60%]"
                      }`}
                  />
                </div>
                <div className="mt-2 flex justify-between text-[9px] text-muted-foreground font-mono">
                  <span>Capacity Filled</span>
                  <span className="text-gold font-bold">{t.popular ? "13/15 Seats" : i === 1 ? "12/15 Seats" : "11/15 Seats"}</span>
                </div>

                {/* Features List */}
                <ul className="mt-8 space-y-4 border-t border-border/40 pt-6">
                  {t.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4">
                <a
                  href="#register"
                  className={`w-full py-3.5 rounded-full text-center font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 ${t.popular
                    ? "btn-gold shadow-lg"
                    : "btn-outline-gold hover:bg-gold/10"
                    }`}
                >
                  Secure Early Bird Seats <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 7 — WHY ATTEND ---------- */
function WhyAttend() {
  const points = [
    {
      title: "Avoid Costly Admission Mistakes",
      desc: "Learn how to completely bypass standard structural errors that sink otherwise brilliant academic files.",
      icon: Shield,
    },
    {
      title: "Learn Insider Strategies",
      desc: "Gain rare, high-value insights direct from veteran advisors specializing in elite placement strategies.",
      icon: Lightbulb,
    },
    {
      title: "Build Ivy League Level Profiles",
      desc: "Construct an actionable academic blueprint that highlights intellectual capability, publication values, and original research.",
      icon: Trophy,
    },
    {
      title: "Scholarship & Funding Pipelines",
      desc: "Discover reliable methods to source merit-based institutional scholarship funds, research grants, and stipends.",
      icon: Award,
    },
    {
      title: "Career-Focused Planning",
      desc: "Align chosen university credentials directly with strategic global post-graduation employment markets and networks.",
      icon: Target,
    },
    {
      title: "Direct Mentorship Access",
      desc: "Ask Dr. Shivangi Goyal specific strategy questions, receiving high-signal, personalized guidance in real time.",
      icon: Users,
    },
    {
      title: "International Roadmap Clarity",
      desc: "Walk away with a precise, step-by-step roadmap tailored specifically for the competitive 2027 and 2028 intakes.",
      icon: Compass,
    },
  ];

  return (
    <section id="why-attend" className="relative py-28 md:py-36 bg-ink overflow-hidden border-t border-border">
      <div className="glow-orb animate-float-slow" style={{ width: 600, height: 600, top: "20%", left: "-200px", background: "oklch(0.82 0.13 85 / 8%)" }} />
      <div className="max-w-6xl mx-auto px-6 relative">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto reveal mb-20">
          <span className="text-[11px] tracking-[0.3em] uppercase text-gold">WHY ATTEND</span>
          <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05]">
            Why You Cannot Afford <br />
            <em className="text-gradient-gold not-italic">To Miss This.</em>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            This workshop isn't just an informational seminar — it is a structural intervention to optimize your student’s developmental trajectory.
          </p>
        </div>

        {/* Why Attend Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {points.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.title}
                className={`reveal glass rounded-2xl p-7 flex flex-col justify-between hover:border-gold/30 hover:-translate-y-1 transition-all duration-500 group ${i === 6 ? "sm:col-span-2 lg:col-span-3 flex flex-col md:flex-row md:items-center md:gap-8" : ""
                  }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-ivory">{pt.title}</h3>
                    <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{pt.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section className="relative py-28 md:py-36 bg-ink overflow-hidden">
      <div
        className="glow-orb animate-float-slow"
        style={{
          width: 600,
          height: 600,
          top: "-20%",
          left: "20%",
          background: "oklch(0.82 0.13 85 / 15%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <span className="reveal text-[11px] tracking-[0.3em] uppercase text-gold">
          Limited Invitation
        </span>

        <h2 className="reveal mt-6 font-serif text-5xl md:text-7xl leading-[1.02]">
          Only <em className="text-gradient-gold not-italic">15 Participants</em>
          <br />
          Will Be Selected.
        </h2>

        <p className="reveal mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
          An exclusive in-person seminar for ambitious students and parents
          preparing for the 2027/2028 global admissions cycle.
        </p>

        <div className="reveal mt-12">
          <a
            href="https://rzp.io/your-payment-link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full font-medium text-base transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]"
          >
            Reserve My Seat
            <ArrowRight className="w-5 h-5" />
          </a>


        </div>

        <div className="reveal mt-12 flex flex-wrap items-center justify-center gap-3 text-[11px] tracking-[0.25em] uppercase">
          {[
            "15 Seats Only",
            "In-Person Experience",
            "Applications Closing Soon",
          ].map((t) => (
            <span
              key={t}
              className="glass px-4 py-2 rounded-full text-gold/90"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="relative pt-20 pb-10 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="Intelligent Education Logo" className="w-8 h-8 object-contain" />
            <div className="font-serif text-2xl text-ivory">
              Intelligent <span className="italic text-gold">Education</span>
            </div>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            A premium mentorship for students architecting world-class academic futures.
          </p>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.25em] uppercase text-gold">Workshop </div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>20 June 2026 · 5:00 PM - 7:00 PM</li>
            <li>Kunzum Books, GK II</li>
            <li>New Delhi 110048</li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] tracking-[0.25em] uppercase text-gold">Connect</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="w-3.5 h-3.5" /> ho@intelligenteducation.org</li>
            <li className="flex items-center gap-4 pt-2">
              <a href="https://www.instagram.com/intelligenteducation_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram" className="hover:text-gold transition"><Instagram className="w-4 h-4" /></a>
              <a href="https://www.linkedin.com/in/shivangiguptaent/" aria-label="LinkedIn" className="hover:text-gold transition"><Linkedin className="w-4 h-4" /></a>

            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-14 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Intelligent Education. All rights reserved.</div>
        <div className="tracking-[0.25em] uppercase text-[10px]"></div>
      </div>
    </footer>
  );
}

/* ---------- MOBILE STICKY ---------- */
function MobileSticky() {
  return (
    <div className="md:hidden fixed bottom-4 inset-x-4 z-50">
      <a href="#register" className="btn-gold w-full py-3.5 rounded-full font-medium flex items-center justify-center gap-2 shadow-2xl">
        Reserve Your Seat <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}
