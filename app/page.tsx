"use client";

import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";

const projects = [
  {
    number: "01",
    title: "Orchestrator Studio",
    label: "MULTI-AGENT DEV TOOL",
    description:
      "A visual workspace for composing, launching, and understanding multi-agent coding workflows.",
    tech: ["React", "Agents", "Firebase"],
    href: "https://forge-landing-51871.web.app/",
    visual: "orchestrator",
  },
  {
    number: "02",
    title: "CollabGuard",
    label: "AI MODERATION SYSTEM",
    description:
      "An AI-assisted Reddit moderation workspace that turns noisy community signals into clear actions.",
    tech: ["Python", "NLP", "Reddit API"],
    href: "https://github.com/Nausmind/reddit-hackathon",
    visual: "guard",
  },
  {
    number: "03",
    title: "AI-Hire-AI",
    label: "AGENT EXPERIMENT",
    description:
      "A playful recruiting simulation where one AI interviews another—because agents need jobs too.",
    tech: ["Next.js", "LLMs", "TypeScript"],
    href: "https://ai-hire-ai.vercel.app",
    visual: "hire",
  },
];

const experiences = [
  {
    company: "Deep24",
    badge: "YC W24",
    role: "Founder Fellow",
    date: "JUN 2026 — NOW",
    href: "https://deep24.com/",
    description:
      "Building an AI startup inside a YC-backed founder fellowship—moving from raw idea to tested product with an AI coach and founder feedback loops.",
    signal: "ZERO → ONE",
  },
  {
    company: "Hemut",
    badge: "YC X25",
    role: "AI Automation Engineer",
    date: "MAR 2026 — NOW",
    href: "https://www.hemut.com/",
    description:
      "Designed 5+ agent-based systems, API integrations, and data-enrichment pipelines for a logistics startup—automating internal work and supporting GTM operations.",
    signal: "5+ AGENT SYSTEMS",
  },
  {
    company: "Ellucian",
    badge: "AI PLATFORM",
    role: "Software Engineering Intern",
    date: "MAY 2026 — NOW",
    href: "https://www.ellucian.com/",
    description:
      "Contributing to internal AI platform initiatives across token usage, systems architecture, and AWS deployment—with a focus on reliable production engineering.",
    signal: "AI × CLOUD",
  },
];

const toolRows = [
  ["PYTHON", "JAVA", "TYPESCRIPT", "SQL", "BASH", "PYTHON", "JAVA", "TYPESCRIPT"],
  ["REACT", "NEXT.JS", "FASTAPI", "NODE.JS", "TAILWIND", "REACT", "NEXT.JS"],
  ["AWS", "DOCKER", "POSTGRESQL", "FIREBASE", "GIT", "AWS", "DOCKER"],
  ["LLMs", "AGENTS", "RAG", "AUTOMATION", "EVALUATION", "LLMs", "AGENTS"],
];

function ProjectVisual({ type }: { type: string }) {
  if (type === "orchestrator") {
    return (
      <div className="project-visual orchestrator-visual" aria-hidden="true">
        <div className="agent-node agent-node-main">YOU</div>
        <div className="agent-node agent-node-a">01</div>
        <div className="agent-node agent-node-b">02</div>
        <div className="agent-node agent-node-c">03</div>
        <span className="node-line line-a" />
        <span className="node-line line-b" />
        <span className="node-line line-c" />
        <div className="agent-status"><i /> 3 agents working</div>
      </div>
    );
  }

  if (type === "guard") {
    return (
      <div className="project-visual guard-visual" aria-hidden="true">
        <div className="scan-line" />
        <div className="guard-row"><span>r/developers</span><b>SAFE</b></div>
        <div className="guard-row"><span>spam_probability</span><strong>0.04</strong></div>
        <div className="guard-copy">“Context reviewed. Conversation protected.”</div>
        <div className="guard-meter"><span /></div>
      </div>
    );
  }

  return (
    <div className="project-visual hire-visual" aria-hidden="true">
      <div className="hire-face hire-face-one"><span>AI</span><i>HIRING</i></div>
      <div className="hire-chat">Why should an agent hire you?</div>
      <div className="hire-face hire-face-two"><span>AI</span><i>CANDIDATE</i></div>
      <div className="hire-score">MATCH <b>94%</b></div>
    </div>
  );
}

export default function Home() {
  const [activeExperience, setActiveExperience] = useState(0);
  const [copied, setCopied] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  const surfaceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const introTimer = window.setTimeout(() => setIntroDone(true), 700);
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => {
      window.clearTimeout(introTimer);
      observer.disconnect();
    };
  }, []);

  const moveSignal = (event: ReactMouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText("baotran.swe@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="site-shell" ref={surfaceRef} onMouseMove={moveSignal}>
      <div className={`boot-screen ${introDone ? "boot-screen--done" : ""}`} aria-hidden="true">
        <div className="boot-mark">BT<span>·</span>1301</div>
        <div className="boot-track"><i /></div>
        <div className="boot-copy">LOADING SYSTEMS / 2026</div>
      </div>

      <div className="signal-cursor" aria-hidden="true" />
      <nav className="top-nav" aria-label="Primary navigation">
        <a className="nav-logo" href="#top" aria-label="Bao Tran, back to top">
          <span>BT</span><small>PORTFOLIO 1301</small>
        </a>
        <div className="nav-links">
          <a href="#work">WORK</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#stack">STACK</a>
        </div>
        <a className="nav-cta" href="mailto:baotran.swe@gmail.com">
          LET&apos;S TALK <span>↗</span>
        </a>
      </nav>

      <main>
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-meta hero-meta-left">
            <span className="live-dot" /> AVAILABLE FOR FALL &apos;26
          </div>
          <div className="hero-meta hero-meta-right">FAIRFAX, VA / 38.8462° N</div>

          <div className="hero-copy">
            <p className="eyebrow">SOFTWARE ENGINEER · AI BUILDER · CS @ GMU</p>
            <h1>
              I build AI systems
              <span>that actually <em>ship.</em></span>
            </h1>
            <div className="hero-bottom-copy">
              <p>
                Turning ambitious ideas into production APIs, agent workflows,
                and full-stack products people can actually use.
              </p>
              <div className="hero-actions">
                <a className="button button-dark" href="#work">EXPLORE WORK <span>↓</span></a>
                <a className="text-link" href="https://github.com/BaoT1301" target="_blank" rel="noreferrer">GITHUB ↗</a>
              </div>
            </div>
          </div>

          <div className="hero-instrument" aria-label="A live diagram representing Bao's engineering process">
            <div className="instrument-head">
              <span>SYSTEM / 1301</span>
              <span className="instrument-live">● LIVE</span>
            </div>
            <div className="orbit-stage" aria-hidden="true">
              <div className="orbit orbit-one"><i /></div>
              <div className="orbit orbit-two"><i /></div>
              <div className="core-mark">BT</div>
              <span className="orbit-label orbit-label-a">IDEA</span>
              <span className="orbit-label orbit-label-b">BUILD</span>
              <span className="orbit-label orbit-label-c">SHIP</span>
            </div>
            <div className="instrument-log">
              <span><i>01</i> PROBLEM FOUND</span>
              <span><i>02</i> SYSTEM DESIGNED</span>
              <span><i>03</i> <b>PRODUCTION READY</b></span>
            </div>
          </div>

          <div className="hero-index" aria-hidden="true">1301</div>
        </section>

        <section className="statement-strip" aria-label="Portfolio summary">
          <div className="ticker-track">
            <span>AI SYSTEMS</span><i>✦</i><span>PRODUCTION APIs</span><i>✦</i><span>FULL-STACK PRODUCTS</span><i>✦</i>
            <span>AI SYSTEMS</span><i>✦</i><span>PRODUCTION APIs</span><i>✦</i><span>FULL-STACK PRODUCTS</span><i>✦</i>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-kicker" data-reveal>
            <span>SELECTED SYSTEMS</span><span>03 PROJECTS / 2025—26</span>
          </div>
          <div className="work-heading" data-reveal>
            <h2>Work with<br/><em>a pulse.</em></h2>
            <p>Projects that think, respond, and solve a real problem—not just rectangles in a browser.</p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <a
                className="project-card"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                key={project.title}
                data-reveal
                aria-label={`Open ${project.title}`}
              >
                <div className="project-card-head">
                  <span>{project.number}</span>
                  <span>{project.label}</span>
                  <span>↗</span>
                </div>
                <ProjectVisual type={project.visual} />
                <div className="project-card-copy">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="experience-aside" data-reveal>
            <div className="section-kicker section-kicker-light">
              <span>FIELD EXPERIENCE</span><span>03 ACTIVE SIGNALS</span>
            </div>
            <h2>Code in the<br/><em>real world.</em></h2>
            <p>Real teams, real constraints, real software still running after the demo ends.</p>
            <div className="experience-counts">
              <div><strong>5+</strong><span>INTERNSHIPS</span></div>
              <div><strong>5+</strong><span>AGENT SYSTEMS</span></div>
              <div><strong>10+</strong><span>CORE TOOLS</span></div>
            </div>
          </div>

          <div className="experience-console" data-reveal>
            <div className="console-top"><span>EXPERIENCE.LOG</span><span>CLICK TO INSPECT</span></div>
            <div className="experience-list" role="tablist" aria-label="Work experience">
              {experiences.map((item, index) => (
                <button
                  className={activeExperience === index ? "active" : ""}
                  key={item.company}
                  onClick={() => setActiveExperience(index)}
                  role="tab"
                  aria-selected={activeExperience === index}
                  aria-controls="experience-detail"
                >
                  <span className="experience-number">0{index + 1}</span>
                  <span className="experience-name"><b>{item.company}</b><small>{item.badge}</small></span>
                  <span className="experience-role">{item.role}</span>
                  <span className="experience-date">{item.date}</span>
                  <span className="experience-arrow">{activeExperience === index ? "●" : "+"}</span>
                </button>
              ))}
            </div>
            <div className="experience-detail" id="experience-detail" role="tabpanel">
              <div className="detail-signal"><i />{experiences[activeExperience].signal}</div>
              <p>{experiences[activeExperience].description}</p>
              <a href={experiences[activeExperience].href} target="_blank" rel="noreferrer">
                VISIT {experiences[activeExperience].company.toUpperCase()} ↗
              </a>
            </div>
          </div>
        </section>

        <section className="stack-section" id="stack">
          <div className="stack-title" data-reveal>
            <div className="section-kicker"><span>TOOLKIT / CAPABILITIES</span><span>CONTINUOUSLY UPDATING</span></div>
            <h2>My stack is a<br/><em>moving target.</em></h2>
          </div>
          <div className="marquee-stack" aria-label="Technology stack" data-reveal>
            {toolRows.map((row, rowIndex) => (
              <div className={`tool-row ${rowIndex % 2 ? "tool-row-reverse" : ""}`} key={rowIndex}>
                <div>
                  {row.map((tool, index) => <span key={`${tool}-${index}`}>{tool}<i>·</i></span>)}
                </div>
              </div>
            ))}
          </div>
          <div className="stack-notes" data-reveal>
            <article><span>01 / BACKEND</span><h3>Systems before syntax.</h3><p>APIs, data models, and services designed for reliability—not just the happy path.</p></article>
            <article><span>02 / INTELLIGENCE</span><h3>Agents with guardrails.</h3><p>AI pipelines that are observable, evaluable, and grounded in the job they need to do.</p></article>
            <article><span>03 / PRODUCT</span><h3>Interfaces with intent.</h3><p>Full-stack experiences where motion clarifies state and every detail earns its place.</p></article>
          </div>
        </section>

        <section className="currently-section">
          <div className="currently-card" data-reveal>
            <div className="currently-top"><span>NOW / NEXT</span><span className="live-label"><i /> OPEN</span></div>
            <h2>Currently exploring<br/>what agents do <em>after</em> “hello world.”</h2>
            <div className="interest-grid">
              <span>AGENT OBSERVABILITY</span><span>HUMAN-IN-THE-LOOP</span><span>DEV TOOLS</span><span>AI-NATIVE UX</span>
            </div>
            <p>Looking for Fall 2026 and Summer 2027 software engineering opportunities.</p>
            <a href="mailto:baotran.swe@gmail.com">START A CONVERSATION ↗</a>
          </div>
          <div className="currently-ascii" aria-hidden="true" data-reveal>
            <div className="ascii-head"><span>RUNNING: curiosity.exe</span><span>●</span></div>
            <pre>{`      ╭────────────╮
      │  QUESTION  │
      ╰─────┬──────╯
            │
     ╭──────▼──────╮
     │  PROTOTYPE  │◄────╮
     ╰──────┬──────╯     │
            │            │
     ╭──────▼──────╮     │
     │    LEARN    ├─────╯
     ╰──────┬──────╯
            │
         [ SHIP ]`}</pre>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-orbit" aria-hidden="true"><span>AVAILABLE · BUILDING · CURIOUS ·</span></div>
          <p className="eyebrow" data-reveal>ONE MORE GOOD IDEA?</p>
          <h2 data-reveal>Let&apos;s make it<br/><em>real.</em></h2>
          <div className="contact-actions" data-reveal>
            <a href="mailto:baotran.swe@gmail.com" className="contact-email">BAOTRAN.SWE@GMAIL.COM <span>↗</span></a>
            <button onClick={copyEmail} aria-live="polite">{copied ? "COPIED!" : "COPY EMAIL"}</button>
          </div>
        </section>
      </main>

      <footer>
        <div><strong>BAO TRAN</strong><span>SOFTWARE ENGINEER</span></div>
        <div className="footer-links">
          <a href="https://github.com/BaoT1301" target="_blank" rel="noreferrer">GITHUB ↗</a>
          <a href="https://www.linkedin.com/in/baot1301/" target="_blank" rel="noreferrer">LINKEDIN ↗</a>
          <a href="mailto:baotran.swe@gmail.com">EMAIL ↗</a>
        </div>
        <div className="footer-signoff">DESIGNED WITH INTENT / BUILT WITH CODE<br/>© 2026 BAO TRAN</div>
      </footer>
    </div>
  );
}
