"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const resumeUrl = "https://drive.google.com/file/d/1lxAJD1Zw0EKxDiHWaAneEMxKSwPZEYo8/view?usp=sharing";
const emailUrl = "mailto:baotran.swe@gmail.com";
const githubUrl = "https://github.com/BaoT1301";
const linkedinUrl = "https://www.linkedin.com/in/baot1301/";

const projects = [
  {
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

const buildSteps = ["notice", "ask", "sketch", "build", "break", "listen", "rebuild", "ship"];

function ProjectArtwork({ type }: { type: string }) {
  if (type === "orchestrator") {
    return (
      <div className="project-artwork orchestrator-product-preview" aria-hidden="true">
        <div className="orchestrator-window">
          <div className="orchestrator-chrome">
            <span className="window-dots"><i /><i /><i /></span>
            <strong>forge / add-auth-login</strong>
            <b>●</b>
          </div>
          <div className="orchestrator-tabs">
            <span className="active">Plan</span><span>Run</span><span>Merge</span>
            <small>3 tracks · 1 dependency</small>
            <b>Run plan ↗</b>
          </div>
          <div className="orchestrator-flow">
            <div className="workflow-links">
              <i className="link-prompt" /><i className="link-branch" /><i className="link-merge" />
              <span className="signal-one" /><span className="signal-two" />
            </div>
            <div className="workflow-node prompt-node"><small>Prompt</small><strong>Add OAuth login and session refresh</strong></div>
            <div className="workflow-node architect-node"><small>Gemini</small><strong>Architect</strong><span>Planned 3 tracks</span></div>
            <div className="track-stack">
              <div><span>frontend</span><b>running</b><i /></div>
              <div><span>backend</span><b>running</b><i /></div>
              <div><span>tests</span><b>queued</b><i /></div>
            </div>
            <div className="workflow-node merge-node"><small>main</small><strong>Auto merge</strong><span>in dependency order</span></div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "hire") {
    return (
      <div className="project-artwork product-ui-preview ui-hire" aria-hidden="true">
        <div className="product-ui-window">
          <div className="product-ui-header"><span className="window-dots"><i /><i /><i /></span><strong>AI Hire AI / candidate 028</strong><b>Interview</b></div>
          <div className="product-ui-body hire-workspace">
            <div className="hire-pipeline"><span>Applied</span><span>Phone screen</span><span className="active">Interview</span><span>Offer</span></div>
            <div className="hire-actions"><b>Start live interview</b><span>Add note</span><span>Move stage</span></div>
            <div className="candidate-dossier"><small>Candidate evidence</small><strong>Bao Tran</strong><p>Systems engineer with verified product experience.</p><div><span>TypeScript</span><span>Agents</span><span>AWS</span></div></div>
            <div className="risk-review"><small>Risk flags</small><strong>Traditional ML depth</strong><p>Follow up in the next interview round.</p><i /></div>
            <div className="hire-summary"><span>Evidence packet</span><b>Ready for review</b><em>92% fit</em></div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "guard") {
    return (
      <div className="project-artwork product-ui-preview ui-guard" aria-hidden="true">
        <div className="product-ui-window">
          <div className="product-ui-header"><span className="window-dots"><i /><i /><i /></span><strong>CollabGuard / shared queue</strong><b>3 open</b></div>
          <div className="product-ui-body guard-workspace">
            <div className="moderation-queue"><small>Queue</small><div className="active"><strong>r/developers</strong><span>semantic review</span><b>high</b></div><div><strong>r/startups</strong><span>possible spam</span><b>med</b></div><div><strong>r/programming</strong><span>context check</span><b>low</b></div></div>
            <div className="moderation-case"><small>Case 06 024</small><strong>“You keep posting this link in every thread.”</strong><div className="risk-meter"><span>Semantic risk</span><b>0.84</b><i /></div><div className="evidence-tags"><span>repeated link</span><span>hostile tone</span><span>3 reports</span></div></div>
            <div className="moderation-actions"><span>Gentle nudge</span><span>Start vote</span><b>Human review</b></div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "market") {
    return (
      <div className="project-artwork product-ui-preview ui-market" aria-hidden="true">
        <div className="product-ui-window">
          <div className="product-ui-header"><span className="window-dots"><i /><i /><i /></span><strong>Crypto Pilot / BTC USD</strong><b>Live</b></div>
          <div className="product-ui-body market-workspace">
            <div className="market-watch"><small>Market</small><div className="active"><b>BTC</b><span>$67,842</span><em>+2.8%</em></div><div><b>ETH</b><span>$3,842</span><em>+1.4%</em></div><div><b>SOL</b><span>$174.20</span><em>+3.1%</em></div></div>
            <div className="market-chart"><div><small>Bitcoin</small><strong>$67,842.18</strong><span>1D</span></div><section>{[34, 46, 39, 58, 53, 70, 66, 82, 75, 91, 86, 96].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</section><footer><span>09:00</span><span>12:00</span><span>15:00</span></footer></div>
            <div className="order-ticket"><small>Market order</small><label><span>Amount</span><b>0.014 BTC</b></label><label><span>Est. total</span><b>$949.79</b></label><strong>Review order</strong></div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "social") {
    return (
      <div className="project-artwork product-ui-preview ui-social" aria-hidden="true">
        <div className="product-ui-window">
          <div className="product-ui-header"><span className="window-dots"><i /><i /><i /></span><strong>Crushie / vibe profile</strong><b>Level 04</b></div>
          <div className="product-ui-body social-workspace">
            <div className="vibe-profile"><small>Personality DNA</small><div className="vibe-avatar">C</div><strong>Creative romantic</strong><span>1536 dimensions analyzed</span><div><i>Romantic</i><i>Curious</i><i>Warm</i></div></div>
            <div className="siq-score"><b>78</b><span>SIQ</span><i /></div>
            <div className="coach-panel"><small>AI coach</small><strong>Start with one curious question.</strong><span>Tone: warm and direct</span><div><b>Listen</b><b>Notice</b><b>Respond</b></div></div>
            <div className="mission-progress"><span>Today’s mission</span><strong>Start the conversation</strong><i /></div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "path") {
    return (
      <div className="project-artwork product-ui-preview ui-path" aria-hidden="true">
        <div className="product-ui-window">
          <div className="product-ui-header"><span className="window-dots"><i /><i /><i /></span><strong>PathAI / trajectory scan</strong><b>50,247 roles</b></div>
          <div className="product-ui-body path-workspace">
            <div className="career-profile"><small>Extracted signals</small><strong>Backend to AI systems</strong><span>7 signals found</span><div><b>Python</b><b>Agents</b><b>Leadership</b><b>System design</b></div></div>
            <div className="match-list"><small>Selected matches</small><div className="top"><b>98%</b><span><strong>Principal Engineer</strong><em>Stripe · Top pick</em></span></div><div><b>94%</b><span><strong>AI Research Lead</strong><em>OpenAI · Strong fit</em></span></div><div><b>91%</b><span><strong>ML Architect</strong><em>Anthropic · High match</em></span></div></div>
            <div className="path-status"><span>Profile verified</span><i /><span>Match ranked</span><i /><b>Fast track ready</b></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="project-artwork product-ui-preview ui-research" aria-hidden="true">
      <div className="product-ui-window">
        <div className="product-ui-header"><span className="window-dots"><i /><i /><i /></span><strong>FusionAI / research 031</strong><b>Sourced</b></div>
        <div className="product-ui-body research-workspace">
          <div className="research-query"><span>How do agent systems coordinate work?</span><b>Search ↗</b></div>
          <div className="research-sources"><small>Searching in parallel</small><div><i />Wikipedia <b>ready</b></div><div><i />Open web <b>ready</b></div><div><i />GPT 4o mini <b>ready</b></div></div>
          <div className="research-answer"><small>Synthesized answer</small><strong>Coordination needs shared state, clear ownership, and ordered handoffs.</strong><p>FusionAI combines three research paths into one explanation while keeping every supporting source visible.</p><div><span>[1]</span><span>[2]</span><span>[3]</span></div></div>
        </div>
      </div>
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

  useEffect(() => {
    const root = siteRef.current;
    const supportsPointerMotion = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!root || !supportsPointerMotion.matches) return;

    const surfaces = Array.from(root.querySelectorAll<HTMLElement>("[data-pointer-surface]"));
    const cleanups = surfaces.map((surface) => {
      const handlePointerMove = (event: PointerEvent) => {
        const bounds = surface.getBoundingClientRect();
        const x = Math.min(1, Math.max(0, (event.clientX - bounds.left) / bounds.width));
        const y = Math.min(1, Math.max(0, (event.clientY - bounds.top) / bounds.height));
        surface.style.setProperty("--pointer-x", `${x * 100}%`);
        surface.style.setProperty("--pointer-y", `${y * 100}%`);
        surface.style.setProperty("--tilt-x", `${(x - 0.5) * 1.6}deg`);
        surface.style.setProperty("--tilt-y", `${(0.5 - y) * 1.2}deg`);
        surface.style.setProperty("--photo-x", `${(x - 0.5) * 5}px`);
        surface.style.setProperty("--photo-y", `${(y - 0.5) * 5}px`);
      };
      const handlePointerLeave = () => {
        surface.style.setProperty("--pointer-x", "50%");
        surface.style.setProperty("--pointer-y", "50%");
        surface.style.setProperty("--tilt-x", "0deg");
        surface.style.setProperty("--tilt-y", "0deg");
        surface.style.setProperty("--photo-x", "0px");
        surface.style.setProperty("--photo-y", "0px");
      };

      surface.addEventListener("pointermove", handlePointerMove);
      surface.addEventListener("pointerleave", handlePointerLeave);
      return () => {
        surface.removeEventListener("pointermove", handlePointerMove);
        surface.removeEventListener("pointerleave", handlePointerLeave);
      };
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [activeProject]);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("baotran.swe@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="portfolio-site" ref={siteRef}>
      <header className="site-topbar">
        <a className="wordmark" href="#top"><i className="brand-signal" aria-hidden="true" /><span>Bao Tran</span><small>Software engineer</small></a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#story">Story</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-resume" href={resumeUrl} target="_blank" rel="noreferrer">Résumé ↗</a>
      </header>

      <div className="portfolio-grid">
        <aside className="identity-column" aria-label="About Bao Tran">
          <div className="identity-card" data-pointer-surface="profile">
            <div className="card-meta"><span>PROFILE / BAO TRAN</span><span>WASHINGTON DC</span></div>
            <div className="portrait-window">
              <Image src="/bao-tran-photo-original.png" alt="Portrait of Bao Tran" fill sizes="(max-width: 820px) 88vw, 31vw" priority unoptimized />
            </div>
            <div className="identity-title"><h2>Bao Tran</h2><span>Software Engineer<br />AI Builder</span></div>
            <div className="identity-route" aria-hidden="true"><i /><em className="route-progress" /><b className="route-marker">→</b></div>
            <p className="identity-bio">A CS student at George Mason University building production APIs, AI systems, and full stack products.</p>
            <p className="identity-note">Right now I am exploring agent tooling, developer infrastructure, and AI products built for real users.</p>
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
            <div className="chapter-heading"><span>NOTICE</span><p>Where every project starts</p></div>
            <div className="chapter-body">
              <h2>Most of my projects begin with something I cannot stop <em className="accent-orange">noticing.</em></h2>
              <p>A workflow that wastes time. A decision with missing context. A useful idea trapped behind a bad interface. Curiosity gets me started, but usefulness decides what survives.</p>
            </div>
            <div className="process-note" aria-label="Bao's build process">
              <span>HOW I WORK</span>
              <p className="process-steps">
                {buildSteps.map((step, index) => (
                  <span key={step}><b>{step}</b>{index < buildSteps.length - 1 && <i>/</i>}</span>
                ))}
              </p>
            </div>
          </section>

          <section className="story-section work-section" id="work" data-chapter="Build an answer">
            <div className="chapter-heading"><span>BUILD</span><p>Seven questions, seven working answers</p></div>
            <div className="chapter-body">
              <h2>I learn faster when the idea has to become <em className="accent-violet">real.</em></h2>
              <p>Choose a question. Each project is the system I built to answer it.</p>
            </div>
            <div className="project-workbench">
              <article className={`project-stage project-stage-${project.visual}`} id="project-panel" role="tabpanel" key={project.title}>
                <div className="project-visual" data-pointer-surface="project"><ProjectArtwork type={project.visual} /></div>
                <div className="project-story">
                  <div className="panel-meta"><span>{project.label}</span><b>{project.status}</b></div>
                  <p className="project-number">SELECTED PROJECT</p>
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
                    <strong>{item.title}</strong>
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="story-section experience-section" id="experience" data-chapter="Meet real constraints">
            <div className="chapter-heading"><span>SHIP</span><p>Where the work met reality</p></div>
            <div className="chapter-body">
              <h2>Then the work meets users, deadlines, and <em className="accent-green">production.</em></h2>
              <p>These are the places that taught me how an idea changes when other people depend on it.</p>
            </div>
            <div className="experience-list">
              {experiences.map((item) => (
                <a className="experience-row" href={item.href} target="_blank" rel="noreferrer" key={item.company}>
                  <div className="experience-company"><small>{item.context}</small><h3>{item.company}</h3></div>
                  <div className="experience-role"><strong>{item.role}</strong><span>{item.date}</span></div>
                  <p>{item.description}</p>
                  <span className="experience-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </section>

          <section className="story-section toolkit-section" id="toolkit" data-chapter="Choose the right tool">
            <div className="chapter-heading"><span>TOOLKIT</span><p>Tools are choices, not identity</p></div>
            <div className="chapter-body">
              <h2>The stack changes. The habit of choosing deliberately <em className="accent-yellow">does not.</em></h2>
              <p className="toolkit-note">I reach for <strong>Python</strong> when the system needs depth, <strong>TypeScript</strong> when people need to touch it, and <strong>infrastructure</strong> when the prototype has to become dependable.</p>
            </div>
            <div className="tool-rack">
              {toolGroups.map((group, index) => (
                <article key={group.name}>
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
            <div className="chapter-heading"><span>NEXT</span><p>The story is still being written</p></div>
            <div className="chapter-body">
              <h2>What should agents do after <em className="accent-pink">“hello world”?</em></h2>
              <p>I am exploring agent observability, human judgment in automated workflows, developer tools, and AI native interfaces.</p>
            </div>
            <div className="contact-panel">
              <p>Have a hard problem?</p>
              <a className="contact-email" href={emailUrl}>baotran.swe@gmail.com</a>
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
