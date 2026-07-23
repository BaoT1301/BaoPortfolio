"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const resumeUrl = "https://drive.google.com/file/d/1lxAJD1Zw0EKxDiHWaAneEMxKSwPZEYo8/view?usp=sharing";
const emailUrl = "mailto:baotran.swe@gmail.com";
const githubUrl = "https://github.com/BaoT1301";
const linkedinUrl = "https://www.linkedin.com/in/baot1301/";

const projects = [
  {
    number: "01",
    title: "Orchestrator Studio",
    label: "Multi agent developer tool",
    question: "Can one developer direct a small team of agents without losing the thread?",
    description: "Describe a feature once, fan it into parallel coding worktrees, and merge working commits back in dependency order.",
    result: "One brief becomes parallel workstreams, then returns as ordered commits on a shared branch.",
    tech: ["Gemini", "Git Worktrees", "MongoDB"],
    href: "https://forge-landing-51871.web.app/",
    status: "Waitlist",
    visual: "orchestrator",
  },
  {
    number: "02",
    title: "AI Hire AI",
    label: "Agent experiment",
    question: "What changes when both sides of hiring have an agent?",
    description: "Dual sided agent workflows batch applications for candidates and create ATS ready evidence packets for recruiters.",
    result: "Candidate application batches and recruiter evidence packets now move through one connected workflow.",
    tech: ["Amazon Nova", "Bedrock", "Agents"],
    href: "https://ai-hire-ai.vercel.app",
    status: "Live",
    visual: "hire",
  },
  {
    number: "03",
    title: "CollabGuard",
    label: "AI moderation system",
    question: "Can moderation move faster without removing human judgment?",
    description: "A human controlled Reddit moderation workspace for shared queues, evidence backed semantic review, voting, and audit trails.",
    result: "Semantic review and audit history support moderators while the final decision stays human.",
    tech: ["TypeScript", "Devvit", "Supabase"],
    href: "https://github.com/Nausmind/reddit-hackathon",
    status: "Playtest",
    visual: "guard",
  },
  {
    number: "04",
    title: "Crypto Pilot",
    label: "Real time trading",
    question: "How do you make a fast market feel understandable?",
    description: "A cryptocurrency trading platform with live prices, market and limit orders, portfolio tooling, and AI powered support.",
    result: "Live prices, order types, portfolio tracking, and AI support live inside one coherent trading flow.",
    tech: ["WebSockets", "Trading Engine", "AI Assistant"],
    href: "https://pocommunity.com/crypto-pilot/",
    status: "Live",
    visual: "market",
  },
  {
    number: "05",
    title: "Crushie",
    label: "Gamified learning",
    question: "Can social confidence be practiced like any other skill?",
    description: "An AI dating academy with vibe profiles, vision powered coaching, and gamified missions that build social intelligence.",
    result: "Vision coaching became a repeatable practice loop through profiles, feedback, missions, and progression.",
    tech: ["Gemini Vision", "pgvector", "Next.js 16"],
    href: "https://crushie.vercel.app",
    status: "Live",
    visual: "social",
  },
  {
    number: "06",
    title: "PathAI",
    label: "AI job search",
    question: "What if a job search understood direction, not just keywords?",
    description: "An AI career engine that reads a resume as a trajectory, then ranks roles by skills, context, and long term fit.",
    result: "Opportunities are ranked by trajectory, skills, and context instead of keyword overlap alone.",
    tech: ["LLMs", "Career Matching", "Resume AI"],
    href: "https://path-ai-xi.vercel.app/",
    status: "Live",
    visual: "path",
  },
  {
    number: "07",
    title: "FusionAI",
    label: "Research assistant",
    question: "Can research synthesis stay fast without hiding its sources?",
    description: "A research assistant that searches Wikipedia, the open web, and GPT in parallel before returning one sourced answer.",
    result: "Three research paths converge into one explanation while the supporting sources stay visible.",
    tech: ["FastAPI", "LangChain", "GPT 4o mini"],
    href: "https://www.fusionai.studio",
    status: "Live",
    visual: "research",
  },
];

const experiences = [
  {
    company: "Deep24",
    context: "YC W24",
    role: "Founder Fellow",
    date: "Jun 2026 to now",
    href: "https://deep24.com/",
    description: "Building an AI startup inside a YC backed founder fellowship. Moving from raw idea to tested product with an AI coach and founder feedback loops.",
  },
  {
    company: "Hemut",
    context: "YC X25",
    role: "Software Engineer Intern",
    date: "Mar 2026 to now",
    href: "https://www.hemut.com/",
    description: "Designed more than five agent systems, API integrations, and data enrichment pipelines for a logistics startup.",
  },
  {
    company: "Ellucian",
    context: "AI platform",
    role: "Software Engineer Intern",
    date: "May 2026 to now",
    href: "https://www.ellucian.com/",
    description: "Contributing to internal AI platform initiatives across token usage, systems architecture, and AWS deployment.",
  },
  {
    company: "Todd",
    context: "Agtech",
    role: "Software Engineer Extern",
    date: "Jun 2026 to now",
    href: "https://toddagriscience.com/en",
    description: "Building AI powered agtech software across product engineering, farm management workflows, and internal tools.",
  },
  {
    company: "Deepiri",
    context: "AI research",
    role: "Founding Engineer",
    date: "Feb 2026 to now",
    href: "https://deepiri.com",
    description: "Built AI features, ML pipelines, and RAG systems for more than 100 internal users in a research collective.",
  },
  {
    company: "Handshake",
    context: "LLM evals",
    role: "Software Engineer Fellow",
    date: "May to Jun 2026",
    href: "https://joinhandshake.com/ai/opportunities",
    description: "Developed golden solutions and adversarial test cases for benchmarking difficult AI coding tasks.",
  },
];

const toolGroups = [
  { name: "Languages", tools: ["Python", "Java", "TypeScript", "SQL", "Bash"] },
  { name: "Product", tools: ["React", "Next.js", "FastAPI", "Node.js", "Tailwind"] },
  { name: "Systems", tools: ["AWS", "Docker", "PostgreSQL", "Firebase", "Git"] },
  { name: "AI", tools: ["LLMs", "Agents", "RAG", "Automation", "Evaluation"] },
];

function ProjectArtwork({ type }: { type: string }) {
  if (type === "orchestrator") {
    return (
      <div className="project-artwork product-scene scene-orchestrator" aria-hidden="true">
        <div className="scene-bar"><span>ORCHESTRATOR / RUN 014</span><i>LIVE</i></div>
        <div className="brief-card"><small>ONE BRIEF</small><strong>Build the onboarding flow</strong><span>4 workstreams created</span></div>
        <div className="agent-board">
          {[["01", "PLAN"], ["02", "API"], ["03", "UI"], ["04", "TEST"]].map(([number, label]) => <div key={label}><i>{number}</i><strong>{label}</strong><small>ready</small></div>)}
        </div>
        <div className="merge-card"><span>4 branches</span><strong>MERGED TO MAIN ✓</strong></div>
      </div>
    );
  }
  if (type === "hire") {
    return (
      <div className="project-artwork product-scene scene-hire" aria-hidden="true">
        <div className="scene-bar"><span>AI HIRE AI / MATCH 006</span><i>92%</i></div>
        <div className="profile-card candidate-card"><small>CANDIDATE AGENT</small><b>BAO T.</b><span>18 roles prepared</span><i>skills verified</i></div>
        <div className="match-bridge"><span>evidence</span><b>↔</b><span>criteria</span></div>
        <div className="profile-card recruiter-card"><small>RECRUITER AGENT</small><b>PLATFORM TEAM</b><span>6 strong matches</span><i>packet ready</i></div>
      </div>
    );
  }
  if (type === "guard") {
    return (
      <div className="project-artwork product-scene scene-guard" aria-hidden="true">
        <div className="scene-bar"><span>COLLABGUARD / MOD QUEUE</span><i>03 OPEN</i></div>
        <div className="queue-card"><small>SHARED QUEUE</small><strong>r/developers</strong><span>semantic review</span><b>HIGH</b></div>
        <div className="case-card"><small>CASE / 06 024</small><strong>“You keep posting this link in every thread.”</strong><div><span>SEMANTIC RISK</span><b>0.84</b></div><i /></div>
        <div className="decision-card"><span>AI surfaces evidence</span><strong>HUMAN DECIDES</strong></div>
      </div>
    );
  }
  if (type === "market") {
    return (
      <div className="project-artwork product-scene scene-market" aria-hidden="true">
        <div className="scene-bar"><span>CRYPTO PILOT / BTC USD</span><i>LIVE</i></div>
        <div className="price-card"><small>BITCOIN</small><strong>$67,842</strong><span>+ 2.8% TODAY</span></div>
        <div className="chart-card"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
        <div className="order-card"><small>MARKET ORDER</small><strong>0.014 BTC</strong><span>READY TO REVIEW →</span></div>
      </div>
    );
  }
  if (type === "social") {
    return (
      <div className="project-artwork product-scene scene-social" aria-hidden="true">
        <div className="scene-bar"><span>CRUSHIE / MISSION 04</span><i>LEVEL UP</i></div>
        <div className="coach-card"><small>AI COACH</small><strong>Start with one curious question.</strong><span>tone: warm · direct</span></div>
        <div className="score-orbit"><b>78</b><span>confidence</span><i /></div>
        <div className="mission-panel"><small>TODAY</small><strong>Start the conversation</strong><span>listen → notice → respond</span></div>
      </div>
    );
  }
  if (type === "path") {
    return (
      <div className="project-artwork product-scene scene-path" aria-hidden="true">
        <div className="scene-bar"><span>PATHAI / ROLE MAP</span><i>28 FOUND</i></div>
        <div className="resume-card"><small>YOUR TRAJECTORY</small><strong>Backend → AI Systems</strong><span>7 signals extracted</span></div>
        <div className="path-line"><i /><i /><i /><b>→</b></div>
        <div className="matches-card"><small>BEST FIT</small><div><b>92%</b><span>AI Platform Engineer</span></div><div><b>88%</b><span>Backend Engineer</span></div><div><b>84%</b><span>Developer Tools</span></div></div>
      </div>
    );
  }
  return (
    <div className="project-artwork product-scene scene-research" aria-hidden="true">
      <div className="scene-bar"><span>FUSIONAI / RESEARCH 031</span><i>SOURCED</i></div>
      <div className="sources-card"><small>SEARCHING IN PARALLEL</small><span>WIKIPEDIA</span><span>OPEN WEB</span><span>GPT</span></div>
      <div className="source-connector"><i /><i /><i /></div>
      <div className="answer-card"><small>SYNTHESIZED ANSWER</small><strong>One useful explanation.</strong><p>Clear synthesis with every supporting source still visible.</p><span>[1] [2] [3]</span></div>
    </div>
  );
}

export default function Home() {
  const [activeProject, setActiveProject] = useState(0);
  const [activeChapter, setActiveChapter] = useState("Introduction");
  const [copied, setCopied] = useState(false);
  const siteRef = useRef<HTMLDivElement>(null);
  const project = projects[activeProject];

  useEffect(() => {
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const intro = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.05 });
        intro
          .from(".identity-card", { autoAlpha: 0, x: -35, duration: 0.55 })
          .from(".story-hero .eyebrow", { autoAlpha: 0, y: 10, duration: 0.3 }, "<0.08")
          .from(".story-hero h1", { autoAlpha: 0, y: 24, duration: 0.55 }, "<0.05")
          .from(".story-hero .hero-copy, .story-hero .hero-index", { autoAlpha: 0, y: 14, stagger: 0.07, duration: 0.4 }, "-=0.25");

        gsap.utils.toArray<HTMLElement>(".story-section").forEach((section) => {
          const chapter = section.dataset.chapter ?? "Working";
          ScrollTrigger.create({
            trigger: section,
            start: "top center",
            end: "bottom center",
            onEnter: () => setActiveChapter(chapter),
            onEnterBack: () => setActiveChapter(chapter),
          });
          gsap.from(section.querySelectorAll(":scope > .chapter-heading, :scope > .chapter-body, :scope > .process-note, :scope > .project-workbench, :scope > .experience-list, :scope > .tool-rack, :scope > .contact-panel, :scope > .site-footer"), {
            autoAlpha: 0,
            y: 36,
            stagger: 0.08,
            duration: 0.65,
            ease: "power3.out",
            scrollTrigger: { trigger: section, start: "top 84%", once: true },
          });
        });

        gsap.fromTo(".route-progress", { scaleX: 0 }, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { trigger: ".story-column", start: "top top", end: "bottom bottom", scrub: 0.45 },
        });
        gsap.to(".route-marker", {
          left: "calc(100% - 24px)",
          ease: "none",
          scrollTrigger: { trigger: ".story-column", start: "top top", end: "bottom bottom", scrub: 0.45 },
        });

      });
    }, siteRef);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("baotran.swe@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  const moveMotionField = (event: ReactPointerEvent<HTMLElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const field = event.currentTarget;
    const bounds = field.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    field.querySelectorAll<HTMLElement>(".motion-piece").forEach((piece, index) => {
      const depth = 3 + (index % 3) * 2;
      gsap.to(piece, { x: x * depth, y: y * depth, duration: 0.48, ease: "power3.out", overwrite: "auto" });
    });
  };

  const resetMotionField = (event: ReactPointerEvent<HTMLElement>) => {
    const field = event.currentTarget;
    gsap.to(field.querySelectorAll<HTMLElement>(".motion-piece"), { x: 0, y: 0, duration: 0.65, ease: "power3.out", overwrite: "auto" });
  };

  return (
    <div className="portfolio-site" ref={siteRef}>
      <header className="site-topbar">
        <a className="wordmark" href="#top"><i className="brand-signal" aria-hidden="true" /><span>Bao Tran</span><small>Software engineer</small></a>
        <nav aria-label="Primary navigation">
          <a href="#work"><span>01</span>Work</a>
          <a href="#story"><span>02</span>Story</a>
          <a href="#experience"><span>03</span>Experience</a>
          <a href="#contact"><span>04</span>Contact</a>
        </nav>
        <a className="header-resume" href={resumeUrl} target="_blank" rel="noreferrer"><span>05</span>Résumé ↗</a>
      </header>

      <div className="portfolio-grid">
        <aside className="identity-column" aria-label="About Bao Tran">
          <div className="identity-card">
            <div className="card-meta"><span>PROFILE / BT 01</span><span>WASHINGTON DC</span></div>
            <div className="portrait-window motion-field" onPointerMove={moveMotionField} onPointerLeave={resetMotionField}>
              <Image src="/bao-tran-photo-original.png" alt="Portrait of Bao Tran" fill sizes="(max-width: 820px) 88vw, 31vw" priority unoptimized />
              <div className="identity-art" aria-hidden="true"><i className="motion-piece" /><i className="motion-piece" /><i className="motion-piece" /><i className="motion-piece" /></div>
            </div>
            <div className="identity-title"><h2>Bao Tran</h2><span>Software Engineer<br />AI Builder</span></div>
            <div className="identity-route" aria-hidden="true"><i /><em className="route-progress" /><b className="route-marker">→</b></div>
            <p className="identity-bio">A CS student at George Mason University building production APIs, AI systems, and full stack products.</p>
            <div className="chapter-status"><span>Current chapter</span><strong>{activeChapter}</strong></div>
            <div className="identity-links">
              <a href={githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href={emailUrl}>Email ↗</a>
            </div>
          </div>
        </aside>

        <main className="story-column">
          <section className="story-hero" id="top" data-chapter="Introduction">
            <p className="eyebrow"><span>●</span> Available for Fall 2026 and Summer 2027</p>
            <h1><span>I build the thing.</span><span>Then I make it <em className="accent-green">worth using.</em></span></h1>
            <div className="hero-copy">
              <p>Software engineer building production APIs, agent workflows, and full stack products with a careful eye for how they feel.</p>
              <a href="#story">follow the story ↓</a>
            </div>
            <div className="hero-index" aria-label="Portfolio summary">
              <span>6 roles</span><i />
              <span>7 projects</span><i />
              <span>Production APIs</span><i />
              <span>AI systems</span>
            </div>
          </section>

          <section className="story-section notice-section" id="story" data-chapter="Notice the friction">
            <div className="chapter-heading"><span>01 / NOTICE</span><p>Where every project starts</p></div>
            <div className="chapter-body">
              <h2>Most of my projects begin with something I cannot stop <em className="accent-orange">noticing.</em></h2>
              <p>A workflow that wastes time. A decision with missing context. A useful idea trapped behind a bad interface. Curiosity gets me started, but usefulness decides what survives.</p>
            </div>
            <div className="process-note" aria-label="Bao's build process">
              <span>HOW I WORK</span>
              <p>notice / ask / sketch / build / break / listen / rebuild / ship</p>
            </div>
          </section>

          <section className="story-section work-section" id="work" data-chapter="Build an answer">
            <div className="chapter-heading"><span>02 / BUILD</span><p>Seven questions, seven working answers</p></div>
            <div className="chapter-body">
              <h2>I learn faster when the idea has to become <em className="accent-violet">real.</em></h2>
              <p>Choose a question. Each project is the system I built to answer it.</p>
            </div>
            <div className="project-workbench">
              <article className={`project-stage project-stage-${project.visual}`} id="project-panel" role="tabpanel" key={project.title}>
                <div className="project-visual"><ProjectArtwork type={project.visual} /></div>
                <div className="project-story">
                  <div className="panel-meta"><span>{project.label}</span><b>{project.status}</b></div>
                  <p className="project-number">PROJECT {project.number}</p>
                  <h3>{project.title}</h3>
                  <strong>{project.question}</strong>
                  <p>{project.description}</p>
                  <div className="project-proof"><span>What it proved</span><p>{project.result}</p></div>
                  <footer><span>{project.tech.join(" / ")}</span><a href={project.href} target="_blank" rel="noreferrer">open project ↗</a></footer>
                </div>
              </article>
              <div className="project-tabs" role="tablist" aria-label="Projects">
                {projects.map((item, index) => (
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeProject === index}
                    aria-controls="project-panel"
                    className={activeProject === index ? "active" : ""}
                    onClick={() => setActiveProject(index)}
                    key={item.title}
                  >
                    <span>{item.number}</span><strong>{item.title}</strong>
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="story-section experience-section" id="experience" data-chapter="Meet real constraints">
            <div className="chapter-heading"><span>03 / SHIP</span><p>Where the work met reality</p></div>
            <div className="chapter-body">
              <h2>Then the work meets users, deadlines, and <em className="accent-green">production.</em></h2>
              <p>These are the places that taught me how an idea changes when other people depend on it.</p>
            </div>
            <div className="experience-list">
              {experiences.map((item, index) => (
                <a className="experience-row" href={item.href} target="_blank" rel="noreferrer" key={item.company}>
                  <span className="experience-number">0{index + 1}</span>
                  <div className="experience-company"><small>{item.context}</small><h3>{item.company}</h3></div>
                  <div className="experience-role"><strong>{item.role}</strong><span>{item.date}</span></div>
                  <p>{item.description}</p>
                  <span className="experience-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </section>

          <section className="story-section toolkit-section" id="toolkit" data-chapter="Choose the right tool">
            <div className="chapter-heading"><span>04 / TOOLKIT</span><p>Tools are choices, not identity</p></div>
            <div className="chapter-body">
              <h2>The stack changes. The habit of choosing deliberately <em className="accent-yellow">does not.</em></h2>
              <p className="toolkit-note">I reach for <strong>Python</strong> when the system needs depth, <strong>TypeScript</strong> when people need to touch it, and <strong>infrastructure</strong> when the prototype has to become dependable.</p>
            </div>
            <div className="tool-rack">
              {toolGroups.map((group, index) => (
                <article key={group.name}>
                  <span className="tool-index">0{index + 1}</span>
                  <h3>{group.name}</h3>
                  <div className="stack-marquee" aria-label={`${group.name}: ${group.tools.join(", ")}`}>
                    <div className={`stack-track ${index % 2 === 0 ? "moves-left" : "moves-right"}`}>
                      {[0, 1, 2, 3].map((copy) => (
                        <div className="stack-segment" aria-hidden={copy > 0} key={copy}>
                          {group.tools.map((tool) => <span className="tool-name" key={`${copy}-${tool}`}>{tool}</span>)}
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="story-section next-section" id="contact" data-chapter="Ask the next question">
            <div className="chapter-heading"><span>05 / NEXT</span><p>The story is still being written</p></div>
            <div className="chapter-body">
              <h2>What should agents do after <em className="accent-pink">“hello world”?</em></h2>
              <p>I am exploring agent observability, human judgment in automated workflows, developer tools, and AI native interfaces.</p>
            </div>
            <div className="contact-panel">
              <p>Have a hard problem?</p>
              <a className="contact-email" href={emailUrl}>baotran.swe<br />@gmail.com</a>
              <div className="contact-actions"><a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a><button type="button" onClick={copyEmail}>{copied ? "email copied" : "copy email"}</button></div>
            </div>
            <footer className="site-footer">
              <div className="footer-statement"><span>LAST NOTE / 2026</span><strong>Make something useful.</strong></div>
              <div className="footer-note"><span>Software engineer</span><span>Washington DC</span><span>Available Fall 2026 and Summer 2027</span></div>
              <nav aria-label="Footer navigation"><a href="#work">Work</a><a href="#experience">Experience</a><a href="#toolkit">Toolkit</a><a href={resumeUrl} target="_blank" rel="noreferrer">Résumé ↗</a></nav>
              <div className="footer-bottom"><small>© 2026 Bao Tran. Built with curiosity and too many tabs.</small><a href="#top">Back to top ↑</a></div>
            </footer>
          </section>
        </main>
      </div>
    </div>
  );
}
