import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Calendar, Clock, MapPin, Sparkles, BookOpen, Lightbulb,
  Globe2, Compass, Target, Quote, Check, ArrowRight, Star,
  Award, Users, GraduationCap, Instagram, Linkedin, Mail,
  Shield, CheckCircle, Trophy, Sparkle, ChevronDown, ChevronUp
} from "lucide-react";
import mentorshipIllustration from "../assets/mentorship_illustration.png";
import logoUrl from "../assets/logo.png";
import sgPhoto from "../assets/SG Photo.jpeg";
import proofImage from "../assets/proof.png";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "Intelligent Education — Exclusive Study Abroad Strategy Workshop  | New Delhi" },
      {
        name: "description",
        content:
          "A limited in-person strategy session for students & parents planning 2027/2028 Undergraduate & Master's intakes. Limited to 15 seats at Kunzum Books, GK II, New Delhi.",
      },
      { property: "og:title", content: "Your Study Abroad Journey Starts Before Applications" },
      { property: "og:description", content: "Exclusive in-person strategy session by Dr. Shivangi Goyal — only 15 seats." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "https://events.intelligenteducation.org/og-image.png" },
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
      <Founder />
      <Company />
      <Learn />
      <Pricing />
      <WhyAttend />
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
          <a href="#founder" className="hover:text-gold transition-colors">Founder</a>
          <a href="#learn" className="hover:text-gold transition-colors">Takeaways </a>
          <a href="#company" className="hover:text-gold transition-colors">About Us</a>
          <a href="#pricing" className="hover:text-gold transition-colors">Pricing</a>
          <a href="#why-attend" className="hover:text-gold transition-colors">Why Attend</a>
        </nav>
        <a
          href="https://rzp.io/rzp/W2qzhuzt"
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
              <span>20 June 2026 · 5:15 PM - 6:30 PM · Kunzum Books, GK II</span><span>•</span>
              <span>Limited seating</span><span>•</span>
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
    <>
      <section
        id="top"
        className="relative bg-hero grain pt-44 pb-28 md:pt-52 md:pb-36 overflow-hidden"
      >
        <div
          className="glow-orb animate-float-slow"
          style={{
            width: 520,
            height: 520,
            top: -120,
            left: -120,
            background: "oklch(0.82 0.13 85 / 18%)",
          }}
        />
        <div
          className="glow-orb animate-float-slow"
          style={{
            width: 600,
            height: 600,
            bottom: -200,
            right: -150,
            background: "oklch(0.35 0.10 280 / 25%)",
            animationDelay: "3s",
          }}
        />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="flex justify-center mb-8 reveal">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-[11px] tracking-[0.25em] uppercase text-gold">
              <Sparkles className="w-3.5 h-3.5" />
              Elite Global University Strategy Session
            </span>
          </div>
          <h1 className="reveal text-center font-serif text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight">
            Your Study Abroad Journey
            <br />
            <span className="italic text-gradient-gold">
              Starts Before
            </span>{" "}
            Applications.
          </h1>
          <p className="reveal mt-8 max-w-2xl mx-auto text-center text-lg md:text-xl text-muted-foreground leading-relaxed">
            An exclusive in-person strategy session with{" "}
            <em className="text-gradient-gold not-italic">
              Dr. Shivangi Goyal
            </em>{" "}
            for students & parents planning for
            <span className="text-ivory"> 2027 / 2028 </span>
            Undergraduate & Master's intakes.
          </p>
          <div className="reveal mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Calendar, label: "Date", value: "20 June 2026" },
              { icon: Clock, label: "Time", value: "5:15 PM - 6:30 PM" },
              { icon: MapPin, label: "Venue", value: "Kunzum Books, GK II" },
            ].map((d) => (
              <div
                key={d.label}
                className="glass rounded-2xl p-5 flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                  <d.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                    {d.label}
                  </div>
                  <div className="font-serif text-lg text-ivory">
                    {d.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="reveal mt-5 text-center text-sm text-muted-foreground">
            60, Block M, Greater Kailash II, New Delhi 110048
          </p>
          <div className="reveal mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://rzp.io/rzp/W2qzhuzt"
              className="btn-gold px-8 py-4 rounded-full font-medium inline-flex items-center gap-2"
            >
              Reserve Your Seat
              <ArrowRight className="w-4 h-4" />
            </a>
            <span className="btn-outline-gold px-6 py-3.5 rounded-full text-sm tracking-wide">
              Only 15 Seats Available
            </span>
          </div>
          <div className="reveal mt-16 gold-divider max-w-xl mx-auto" />
          <p className="reveal mt-6 text-center text-xs tracking-[0.4em] uppercase text-muted-foreground shimmer-text">
            Premium · Limited · Future-Ready Positioning
          </p>
        </div>
      </section>

      {/* ---------- HERO VIDEO ---------- */}
      <section className="relative px-6 -mt-10 md:-mt-16 z-20">
        <div className="max-w-5xl mx-auto overflow-hidden rounded-[2rem] border border-border shadow-2xl bg-black">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/QUq3tIQe3Sc?autoplay=1&mute=1&loop=1&playlist=QUq3tIQe3Sc&controls=1&showinfo=0&modestbranding=1&rel=0"
            title="Event Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  const cards = [
    {
      icon: GraduationCap,
      t: "Intellectual Identity & University Strategy Sessions",
      d: "Exclusive 1-on-1 mentorship with Dr. Shivangi Goyal focused on building your intellectual identity, strengthening your profile positioning, and crafting a tailored roadmap for top global university admissions.",
    },
    {
      icon: Users,
      t: "90-Day Elevator Pitch Framework",
      d: "Learn how to strategically craft and refine a compelling personal pitch over 90 Seconds to confidently present your story, achievements, and ambitions to top global universities.",
    },
    {
      icon: BookOpen,
      t: "Profile Building Beyond Resume Filling",
      d: "Learn how to strategically develop a high-impact profile through meaningful projects, leadership, research, and intellectual depth not just by adding random achievements to your resume.",
    },
    {
      icon: Target,
      t: "Research Paper Development & Publication",
      d: "Learn how to identify impactful research ideas, structure a strong paper, and navigate the process of writing, publishing, and presenting research effectively.",
    },
    {
      icon: Globe2,
      t: "Building a Real-World Capstone Project",
      d: "Learn how to conceptualize, develop, and present a functional capstone project that demonstrates innovation, problem-solving, and practical impact.",
    },
    {
      icon: Award,
      t: "Answering the Most Unanswered Questions",
      d: "Gain clarity on the hidden realities, common misconceptions, and strategic decisions that shape successful global university admissions.",
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
            <p>It is never to early to start.</p>
            <p>
              Top global universities today are not only looking for marks — they are looking for
              thinkers, creators, researchers, innovators, and students with a strong personal story.
            </p>
            <p className="text-ivory">
              This exclusive workshop helps students strategically build a world-class profile years before applications begin.
            </p>
            <p className="text-ivory">
              <span className="text-gold"> ONE PROMISE! THIS IS NOT A MARKETING WORKSHOP</span>
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

/* ---------- TIMELINE ---------- */
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
      title: "How to Build & Enhance Your Intellectual Identity",
      desc: "Learn how to strategically shape your academic profile, personal brand, and extracurricular narrative to stand out for top global university admissions.",
      icon: Globe2,
    },
    {
      time: "05:30 PM",
      title: "Elevator Pitch",
      desc: "Learn how to strategically craft and refine a compelling personal pitch over 90 days to confidently present your story, achievements and ambitions.",
      icon: GraduationCap,
    },
    {
      time: "05:45 PM",
      title: "Research paper and topic selection ",
      desc: "Framework to comeup with the exatch topics that resonate with your profile.",
      icon: Award,
    },
    {
      time: "06:00 PM",
      title: "Capstone project building ",
      desc: "Step-by-step process of constructing a project that resonates with your profile, goals and aspiration.",
      icon: Compass,
    },
    {
      time: "06:15 PM",
      title: "Connecting your research and capstone project ",
      desc: "How to connect each and every aspect of your profile to build a strong direct narative.",
      icon: Target,
    },
    {
      time: "06:25 PM",
      title: "F & Q Session",
      desc: "Answering the most unanswered questions about profile building and study abroad.",
      icon: Quote,
    },
    {
      time: "06:30 PM - 07:00 PM",
      title: "Networking & Mentorship",
      desc: "Concluding 1-on-1 networking, direct metorship with our head mentors and counselor. You can get a chance for complimentary follow-up mentorship sessions with chief mentors.",
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
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-gold/10 via-gold/50 to-gold/10 -translate-x-1/2" />
          <div className="space-y-12">
            {timelineItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className={`reveal relative flex flex-col md:flex-row items-start ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
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
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-4 md:top-8 z-10 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-background border border-gold/40 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:border-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-500">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                  </div>
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="reveal mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="https://rzp.io/rzp/W2qzhuzt"
          className="btn-gold px-8 py-4 rounded-full font-medium inline-flex items-center gap-2"
        >
          Reserve Your Seat
          <ArrowRight className="w-4 h-4" />
        </a>
        <span className="btn-outline-gold px-6 py-3.5 rounded-full text-sm tracking-wide">
          Only 15 Seats Available
        </span>
      </div>
    </section>
  );
}

/* ---------- FOUNDER ---------- */
function Founder() {
  const stats = [
    { value: "10+", label: "Years Mentoring" },
    { value: "10000+", label: "Students Placed" },
    { value: "30+", label: "Ivy & Elite Univs" },
    { value: "98%", label: "Success Rate" },
  ];

  return (
    <section
      id="founder"
      className="relative overflow-hidden border-t border-border bg-background py-24 md:py-32"
    >
      <div
        className="glow-orb animate-float-slow pointer-events-none"
        style={{
          width: 500,
          height: 500,
          top: "20%",
          left: "-120px",
          background: "oklch(0.82 0.13 85 / 10%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-20 lg:grid-cols-12">
          <div className="reveal lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[420px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/20 to-transparent blur-3xl" />
              <div className="absolute inset-0 hidden rounded-full border border-gold/10 md:block" />
              <div className="relative mx-auto h-[320px] w-[320px] rounded-full p-[3px] bg-gradient-to-br from-gold via-gold-soft to-transparent shadow-[0_0_50px_rgba(212,175,55,0.15)] md:h-[380px] md:w-[380px]">
                <div className="group relative h-full w-full overflow-hidden rounded-full border border-border bg-ink">
                  <img
                    src={sgPhoto}
                    alt="Dr. Shivangi Goyal"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
                  <div className="absolute left-0 right-0 top-1/2 h-px bg-gold/10" />
                  <div className="absolute bottom-0 top-0 left-1/2 w-px bg-gold/10" />
                </div>
              </div>
              <div className="relative z-10 mx-auto -mt-16 w-full max-w-[95%]">
                <div className="glass-strong rounded-3xl border border-gold/20 px-6 py-7 shadow-2xl backdrop-blur-xl md:px-8">
                  <div className="flex justify-center">
                    <span className="inline-flex rounded-full border border-gold/30 bg-gold/10 px-5 py-2 text-[10px] uppercase tracking-[0.28em] text-gold">
                      Founder & Chief Mentor
                    </span>
                  </div>
                  <div className="mt-6 space-y-5 text-center">
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gold">Quantum Global Campus</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">Doctor of Philosophy (PhD)</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gold">Harvard Business School</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">Executive Education</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gold">Imperial Business School</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">MSc in Economics and strategy for Business</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gold">Shri Ram College of Commerce (SRCC)</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">Bachelor of Commerce</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="reveal lg:col-span-7 lg:pt-8">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold">ABOUT THE FOUNDER</span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-ivory md:text-6xl">
              Dr. Shivangi Goyal
            </h2>
            <p className="mt-3 text-xs font-mono uppercase tracking-[0.35em] text-gold">
              Chief Mentor · Intelligent Education
            </p>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Dr. Shivangi Goyal is an internationally acclaimed academic mentor and admissions strategist known for helping students prepare for Ivy League and top global university admissions through early, intentional profile building.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Under her guidance, students go beyond grades and test scores to build research portfolios, lead innovation projects, publish impactful work, and develop a strong academic identity that stands out to admissions committees.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass rounded-2xl border border-border/60 p-5 text-center transition-all duration-300 hover:border-gold/30 hover:-translate-y-1"
                >
                  <div className="font-serif text-3xl font-semibold text-gradient-gold md:text-4xl">{s.value}</div>
                  <div className="mt-3 text-[10px] font-mono uppercase tracking-[0.18em] leading-relaxed text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="relative mt-12 border-l-2 border-gold pl-8">
              <Quote className="absolute -left-[14px] top-0 h-7 w-7 bg-background text-gold" />
              <p className="max-w-3xl font-serif text-2xl italic leading-relaxed text-ivory md:text-3xl">
                "The students who build competitive global profiles are those who discover their unique intellectual identity years before hitting 'Submit'."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- COMPANY ---------- */
function Company() {
  return (
    <section id="company" className="relative py-28 md:py-36 bg-ink/10 overflow-hidden border-t border-border">
      <div className="glow-orb animate-float-slow" style={{ width: 600, height: 600, top: "-10%", right: "-10%", background: "oklch(0.82 0.13 85 / 8%)" }} />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
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
          <div className="lg:col-span-5 reveal relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-gold/20 to-transparent blur-2xl -z-10" />
            <div className="relative rounded-3xl p-1 bg-gradient-to-br from-border via-gold/30 to-border">
              <div className="rounded-[22px] bg-card overflow-hidden aspect-[4/5] flex items-center justify-center relative group">
                <img
                  src={proofImage}
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

/* ---------- LEARN ---------- */
function Learn() {
  const items = [
    { heading: "Student Spike Workbook", content: "Booklet with curiosity exercises." },
    { heading: "Profile Building Framework", content: "Project brainstorming methodology and roadmap creation." },
    { heading: "30 Days Passion Project Challenge", content: "Comes with challenge sheets, execution prompts, and a detailed execution timeline." },
    { heading: "Curiosity Map", content: "A self-guided self-discovery framework to identify your intellectual interests." },
    { heading: "The Anti-Resume", content: "A trademarked framework by Intelligent Education to showcase depth beyond achievements." },
    { heading: "5 Hour Weekly Growth System", content: "Learn how to use your weekly time intentionally for long-term growth." },
  ];

  return (
    <section id="learn" className="relative py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center reveal">
          <span className="text-[11px] tracking-[0.3em] uppercase text-gold">Takeaways</span>
          <h2 className="mt-5 font-serif text-4xl md:text-6xl text-ivory">What You'll Walk Away With</h2>
          <p className="mt-5 max-w-2xl mx-auto text-muted-foreground">
            Practical frameworks, guided exercises, and systems designed to help students build exceptional intellectual profiles.
          </p>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <div
              key={item.heading}
              className="reveal glass rounded-2xl p-6 border border-white/10 hover:border-gold/40 transition-all duration-500 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0 w-8 h-8 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center">
                  <Check className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ivory leading-snug">{item.heading}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PRICING ---------- */
function Pricing() {
  const [timeLeft, setTimeLeft] = useState({ days: 1, hours: 5, minutes: 24, seconds: 43 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        clearInterval(timer);
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const tiers = [
    {
      title: "Single Student",
      price: 1299,
      earlyBird: 499,
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
      earlyBird: 699,
      badge: "Recommended Combo",
      urgency: "Only 3 Early Bird seats left!",
      popular: false,
      features: [
        "2 Seats (Student + 1 Parent / Guardian)",
        "Comprehensive Seminar Dossier",
        "Interactive Q&A Session Privileges",
        "Official Certificate of Attendance",
      ],
    },
    {
      title: "Student + 2 Parents",
      price: 1799,
      earlyBird: 799,
      urgency: "Only 2 seats left at this price!",
      popular: true,
      features: [
        "3 Seats (Student + Both Parents)",
        "Comprehensive Seminar Dossier",
        "Interactive Q&A Session Privileges",
        "Official Certificate of Attendance",
      ],
    },
  ];

  return (
    <section id="pricing" className="relative py-28 md:py-36 bg-ink/20 overflow-hidden border-t border-border">
      <div className="glow-orb animate-float-slow" style={{ width: 500, height: 500, bottom: "-100px", right: "-100px", background: "oklch(0.82 0.13 85 / 8%)" }} />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto reveal">
          <span className="text-[11px] tracking-[0.3em] uppercase text-gold">PRICING OPTIONS</span>
          <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05]">
            Secure Your <em className="text-gradient-gold not-italic">Strategic Access.</em>
          </h2>
          <p className="mt-5 text-muted-foreground text-base md:text-lg">
            Invest in premium mentorship designed to redirect your academic path toward global top-tier institutions.
          </p>
          <div className="mt-10 inline-flex flex-col sm:flex-row items-center gap-4 px-6 py-3 rounded-2xl glass border border-gold/30">
            <span className="flex items-center gap-2 text-xs text-gold uppercase tracking-[0.2em] font-mono leading-none">
              <Clock className="w-4 h-4 animate-pulse" /> Early Bird Pricing Expires In:
            </span>
            <div className="flex gap-3 text-ivory font-mono text-sm leading-none font-bold">
              <span>{String(timeLeft.days).padStart(2, "0")}d</span>
              <span className="text-gold/60">:</span>
              <span>{String(timeLeft.hours).padStart(2, "0")}h</span>
              <span className="text-gold/60">:</span>
              <span>{String(timeLeft.minutes).padStart(2, "0")}m</span>
              <span className="text-gold/60">:</span>
              <span className="text-gold">{String(timeLeft.seconds).padStart(2, "0")}s</span>
            </div>
          </div>
        </div>
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
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className={`text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full ${t.popular ? "bg-gold/20 text-gold" : "bg-muted/10 text-muted-foreground"}`}>
                    {t.badge}
                  </span>
                  <span className="text-[10px] tracking-wider font-mono text-gold leading-none animate-pulse">{t.urgency}</span>
                </div>
                <h3 className="font-serif text-2xl text-ivory mt-6">{t.title}</h3>
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="text-4xl md:text-5xl font-serif text-gradient-gold font-semibold">₹{t.earlyBird}</span>
                  <span className="text-sm text-muted-foreground line-through">₹{t.price}</span>
                  <span className="text-[9px] tracking-wider uppercase text-gold font-mono border border-gold/30 px-2 py-0.5 rounded ml-1 bg-gold/5">Early Bird Rate</span>
                </div>
                <div className="mt-4 h-1.5 w-full bg-border/20 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full bg-gradient-to-r from-gold to-gold-soft ${t.popular ? "w-[40%]" : i === 1 ? "w-[50%]" : "w-[30%]"}`} />
                </div>
                <div className="mt-2 flex justify-between text-[9px] text-muted-foreground font-mono">
                  <span>Capacity Filled</span>
                  <span className="text-gold font-bold">{t.popular ? "6/15 Seats" : i === 1 ? "7/15 Seats" : "5/15 Seats"}</span>
                </div>
                <ul className="mt-8 space-y-4 border-t border-border/40 pt-6">
                  {t.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-4">
                <a
                  href="https://rzp.io/rzp/W2qzhuzt"
                  className={`w-full py-3.5 rounded-full text-center font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 ${t.popular ? "btn-gold shadow-lg" : "btn-outline-gold hover:bg-gold/10"}`}
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

/* ---------- WHY ATTEND ---------- */
function WhyAttend() {
  const points = [
    {
      title: "Building Your Intellectual Identity",
      desc: "Understand your profile, identify your strengths and interests, craft a compelling elevator pitch, and develop a unique personal brand that clearly communicates what makes you different and impactful.",
      icon: Shield,
    },
    {
      title: "Two Powerful Levers for Profile Building",
      desc: "Master the exact framework for writing high-impact research papers and building real-world working projects that demonstrate innovation, problem-solving, and intellectual depth.",
      icon: Lightbulb,
    },
    {
      title: "FAQs Answered by Experts",
      desc: "With 8+ years of experience, we address the most important and commonly unanswered questions about profile building, research, projects, and global university admissions.",
      icon: Trophy,
    },
    {
      title: "Personalized Guidance & Founder Access",
      desc: "Receive personalized mentorship tailored to your goals, with the opportunity to directly interact with the founder for strategic guidance and expert insights.",
      icon: Award,
    },
  ];

  return (
    <section id="why-attend" className="relative py-28 md:py-36 bg-ink overflow-hidden border-t border-border">
      <div className="glow-orb animate-float-slow" style={{ width: 600, height: 600, top: "20%", left: "-200px", background: "oklch(0.82 0.13 85 / 8%)" }} />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto reveal mb-20">
          <span className="text-[11px] tracking-[0.3em] uppercase text-gold">WHY ATTEND</span>
          <h2 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.05]">
            Why You Cannot Afford <br />
            <em className="text-gradient-gold not-italic">To Miss This.</em>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            This workshop isn't just an informational seminar, it is a structural intervention to optimize your development trajectory.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {points.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.title}
                className={`reveal glass rounded-2xl p-7 flex flex-col justify-between hover:border-gold/30 hover:-translate-y-1 transition-all duration-500 group ${i === 5 ? "sm:col-span-2 lg:col-span-3 flex flex-col md:flex-row md:items-center md:gap-8" : ""}`}
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
        style={{ width: 600, height: 600, top: "-20%", left: "20%", background: "oklch(0.82 0.13 85 / 15%)" }}
      />
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <span className="reveal text-[11px] tracking-[0.3em] uppercase text-gold">Limited Invitation</span>
        <h2 className="reveal mt-6 font-serif text-5xl md:text-7xl leading-[1.02]">
          Only <em className="text-gradient-gold not-italic">15 Participants</em>
        </h2>
        <p className="reveal mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
          An exclusive in-person seminar for ambitious students and parents preparing for the 2027/2028 global admissions cycle.
        </p>
        <div className="reveal mt-12">
          <a
            href="https://rzp.io/rzp/W2qzhuzt"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full font-medium text-base transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]"
          >
            Reserve My Seat
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
        <div className="reveal mt-12 flex flex-wrap items-center justify-center gap-3 text-[11px] tracking-[0.25em] uppercase">
          {["15 Seats Only", "In-Person Experience", "Applications Closing Soon"].map((t) => (
            <span key={t} className="glass px-4 py-2 rounded-full text-gold/90">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- EXPANDABLE LEGAL ACCORDION ---------- */
function LegalAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    {
      title: "Privacy Policy",
      content: (
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          <p>Intelligent Education respects your privacy and is committed to protecting your personal information.</p>
          <p>We may collect basic personal details such as name, email address, phone number, student and parent information, and event registration details. This information is used only for registration, communication, mentorship services, payment processing, and improving our offerings.</p>
          <p>We do not sell your personal data. Limited information may be shared with trusted service providers such as payment gateways or authorized operational partners strictly for completing transactions and delivering services.</p>
          <p>We implement reasonable security measures to protect your data, but no digital system can be guaranteed as completely secure.</p>
          <p>You have the right to request access, correction, or deletion of your personal data by contacting us at <a href="mailto:ho@intelligenteducation.org" className="text-gold hover:underline">ho@intelligenteducation.org</a>.</p>
          <p>We may update this policy from time to time, and continued use of our services indicates acceptance of any changes.</p>
        </div>
      ),
    },
    {
      title: "Terms & Conditions",
      content: (
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          <p>By registering for or attending any program, workshop, or event conducted by Intelligent Education, you agree to the following terms.</p>
          <p>All registrations are subject to seat availability and are confirmed only after successful payment. Seats are limited and allocated on a first-come, first-served basis.</p>
          <p>All payments made are generally non-refundable unless the event is cancelled by the organizers. If an event is rescheduled, your registration will be carried forward to the new date.</p>
          <p>We reserve the right to modify event details including timing, venue, structure, or speakers if required due to unforeseen circumstances. Participants will be informed whenever possible.</p>
          <p>Participants are expected to maintain respectful behavior during all sessions. Any disruption or misconduct may result in removal from the event without refund.</p>
          <p>All materials, frameworks, and content shared during the event are the intellectual property of Intelligent Education and cannot be copied, reproduced, or distributed without permission.</p>
          <p>The event may include photography or recording for documentation and promotional purposes. By attending, you consent to this unless you explicitly opt out in advance.</p>
          <p>The guidance provided during sessions is educational and advisory in nature. We do not guarantee admissions or outcomes in any institution.</p>
          <p>These terms are governed by the laws of India, and any disputes will fall under the jurisdiction of courts in New Delhi.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="mt-10 space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.title}
            className={`glass rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? "border-gold/30" : "border-border/40 hover:border-border/70"}`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-6 py-4 text-left group"
            >
              <span className={`text-sm font-medium tracking-wide transition-colors ${isOpen ? "text-gold" : "text-muted-foreground group-hover:text-ivory"}`}>
                {item.title}
              </span>
              <span className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-gold" : "text-muted-foreground"}`}>
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 border-t border-border/30 pt-4">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="relative border-t border-border bg-ink/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logoUrl} alt="Intelligent Education Logo" className="w-10 h-10 object-contain" />
              <div className="font-serif text-2xl text-ivory leading-none">
                Intelligent <span className="italic text-gold">Education</span>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
              A premium mentorship platform helping students build world-class academic and leadership profiles for elite global universities.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-border px-4 py-2 text-xs tracking-wide text-muted-foreground">Ivy League Mentorship</span>
              <span className="rounded-full border border-border px-4 py-2 text-xs tracking-wide text-muted-foreground">2027 / 2028 Intake</span>
              <span className="rounded-full border border-border px-4 py-2 text-xs tracking-wide text-muted-foreground">In-Person Seminar</span>
            </div>

            {/* Legal Accordions */}
            <LegalAccordion />
          </div>

          {/* Event Details */}
          <div>
            <div className="text-[11px] tracking-[0.3em] uppercase text-gold">Event Details</div>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li>
                <span className="block text-ivory font-medium">Date & Time</span>
                20 June 2026 · 5:15 PM – 6:30 PM
              </li>
              <li>
                <span className="block text-ivory font-medium">Venue</span>
                Kunzum Books, GK II
              </li>
              <li>
                <span className="block text-ivory font-medium">Address</span>
                Greater Kailash II, New Delhi 110048
              </li>
            </ul>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.2041891899266!2d77.244177!3d28.533581700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3f2d660c43f%3A0xfca7a8cba7d33a47!2sKunzum%20books!5e0!3m2!1sen!2sin!4v1779693692055!5m2!1sen!2sin"
                className="w-full h-[220px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[11px] tracking-[0.3em] uppercase text-gold">Connect</div>
            <div className="mt-5 space-y-5">
              <a
                href="mailto:ho@intelligenteducation.org"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-gold transition"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border">
                  <Mail className="w-4 h-4" />
                </div>
                <span>ho@intelligenteducation.org</span>
              </a>
              <div>
                <div className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">Socials</div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/intelligenteducation_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-gold hover:text-gold transition"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shivangiguptaent/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-gold hover:text-gold transition"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Intelligent Education. All rights reserved.</div>
          <div className="tracking-[0.25em] uppercase text-[10px] text-gold/80">Crafted For Future Global Leaders</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- MOBILE STICKY CTA ---------- */
function MobileSticky() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-50 md:hidden">
      <a
        href="https://rzp.io/rzp/W2qzhuzt"
        className="btn-gold flex w-full items-center justify-center gap-2 rounded-full py-4 text-sm font-medium shadow-[0_10px_40px_rgba(212,175,55,0.25)]"
      >
        Reserve Your Seat
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}