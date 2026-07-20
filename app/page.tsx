"use client";

import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SignalScene = dynamic(() => import("./SignalScene"), { ssr: false });
const resumeUrl = "https://drive.google.com/file/d/1lxAJD1Zw0EKxDiHWaAneEMxKSwPZEYo8/view?usp=sharing";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "Orchestrator Studio",
    label: "MULTI-AGENT DEV TOOL",
    description:
      "Describe a feature once, fan it into parallel coding worktrees, and merge working commits back in dependency order.",
    tech: ["Gemini", "Git Worktrees", "MongoDB"],
    href: "https://forge-landing-51871.web.app/",
    visual: "orchestrator",
  },
  {
    number: "02",
    title: "CollabGuard",
    label: "AI MODERATION SYSTEM",
    description:
      "A human-controlled Reddit moderation workspace for shared queues, evidence-backed semantic review, voting, and audit trails.",
    tech: ["TypeScript", "Devvit", "Supabase"],
    href: "https://github.com/Nausmind/reddit-hackathon",
    visual: "guard",
  },
  {
    number: "03",
    title: "AI-Hire-AI",
    label: "AGENT EXPERIMENT",
    description:
      "Dual-sided agent workflows that batch applications for candidates and create ATS-ready evidence packets for recruiters.",
    tech: ["Amazon Nova", "Bedrock", "Agents"],
    href: "https://ai-hire-ai.vercel.app",
    visual: "hire",
  },
  {
    number: "04",
    title: "Crypto Pilot",
    label: "REAL-TIME TRADING",
    description:
      "A cryptocurrency trading platform with live prices, market and limit orders, portfolio tooling, and AI-powered support.",
    tech: ["WebSockets", "Trading Engine", "AI Assistant"],
    href: "https://pocommunity.com/crypto-pilot/",
    visual: "market",
  },
  {
    number: "05",
    title: "Crushie",
    label: "GAMIFIED LEARNING",
    description:
      "An AI dating academy with vibe profiles, vision-powered coaching, and gamified missions that build social intelligence.",
    tech: ["Gemini Vision", "pgvector", "Next.js 16"],
    href: "https://crushie.vercel.app",
    visual: "social",
  },
  {
    number: "06",
    title: "PathAI",
    label: "AI JOB SEARCH",
    description:
      "An AI career engine that reads a resume as a trajectory, then ranks roles by skills, context, and long-term fit.",
    tech: ["LLMs", "Career Matching", "Resume AI"],
    href: "https://path-ai-xi.vercel.app/",
    visual: "path",
  },
  {
    number: "07",
    title: "FusionAI",
    label: "RESEARCH ASSISTANT",
    description:
      "A research assistant that searches Wikipedia, the open web, and GPT in parallel before returning one sourced answer.",
    tech: ["FastAPI", "LangChain", "GPT-4o mini"],
    href: "https://www.fusionai.studio",
    visual: "research",
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
    role: "Software Engineer Intern",
    date: "MAR 2026 — NOW",
    href: "https://www.hemut.com/",
    description:
      "Designed 5+ agent-based systems, API integrations, and data-enrichment pipelines for a logistics startup—automating internal work and supporting GTM operations.",
    signal: "5+ AGENT SYSTEMS",
  },
  {
    company: "Ellucian",
    badge: "AI PLATFORM",
    role: "Software Engineer Intern",
    date: "MAY 2026 — NOW",
    href: "https://www.ellucian.com/",
    description:
      "Contributing to internal AI platform initiatives across token usage, systems architecture, and AWS deployment—with a focus on reliable production engineering.",
    signal: "AI × CLOUD",
  },
  {
    company: "Todd",
    badge: "AGTECH",
    role: "Software Engineer Extern",
    date: "JUN 2026 — NOW",
    href: "https://toddagriscience.com/en",
    description:
      "Building AI-powered agtech software across product engineering, farm-management workflows, and internal tools using Next.js, TypeScript, Supabase, Drizzle, and PostgreSQL.",
    signal: "AI × AGRICULTURE",
  },
  {
    company: "Deepiri",
    badge: "AI RESEARCH",
    role: "Founding Engineer",
    date: "FEB 2026 — NOW",
    href: "https://deepiri.com",
    description:
      "Built AI features, ML pipelines, and RAG systems for a 35+ developer research collective—supporting 100+ internal users and improving research efficiency by 40%.",
    signal: "100+ USERS",
  },
  {
    company: "Handshake",
    badge: "LLM EVALS",
    role: "Software Engineer Fellow",
    date: "MAY — JUN 2026",
    href: "https://joinhandshake.com/ai/opportunities",
    description:
      "Developed golden solutions and adversarial test cases for difficult software-engineering tasks, with reliable judging criteria for benchmarking AI coding systems.",
    signal: "ADVERSARIAL EVALS",
  },
];

const toolRows = [
  ["PYTHON", "JAVA", "TYPESCRIPT", "SQL", "BASH"],
  ["REACT", "NEXT.JS", "FASTAPI", "NODE.JS", "TAILWIND"],
  ["AWS", "DOCKER", "POSTGRESQL", "FIREBASE", "GIT"],
  ["LLMs", "AGENTS", "RAG", "AUTOMATION", "EVALUATION"],
];

function ProjectVisual({ type }: { type: string }) {
  if (type === "orchestrator") {
    return (
      <div className="project-visual orchestrator-visual" aria-hidden="true">
        <div className="orchestrator-window">
          <div className="orchestrator-titlebar">
            <span className="window-dots"><i /><i /><i /></span>
            <span>ORCHESTRATOR / AUTH-FLOW</span>
            <span className="workflow-live"><i /> RUNNING</span>
          </div>
          <div className="orchestrator-body">
            <aside className="agent-roster">
              <span className="roster-label">AGENTS / 03</span>
              <div className="roster-person active"><b>P</b><span><strong>Planner</strong><small>mapping tasks</small></span></div>
              <div className="roster-person"><b>B</b><span><strong>Builder</strong><small>writing code</small></span></div>
              <div className="roster-person"><b>R</b><span><strong>Reviewer</strong><small>checking diff</small></span></div>
              <div className="human-chip"><span>YOU</span><small>direct the team</small></div>
            </aside>
            <div className="workflow-canvas">
              <div className="workflow-heading">
                <span>LIVE WORKFLOW</span>
                <small>7 / 8 TASKS COMPLETE</small>
              </div>
              <div className="workflow-rail">
                <div className="workflow-step workflow-prompt">
                  <span className="step-index">01</span>
                  <div><small>YOUR GOAL</small><b>Build secure<br/>auth flow</b></div>
                </div>
                <span className="flow-arrow">→</span>
                <div className="agent-stack">
                  <div><span>PLAN</span><b>3 tasks</b><i className="done">DONE</i></div>
                  <div><span>BUILD</span><b>12 files</b><i>ACTIVE</i></div>
                  <div><span>REVIEW</span><b>2 checks</b><i className="queued">NEXT</i></div>
                </div>
                <span className="flow-arrow">→</span>
                <div className="workflow-step workflow-output">
                  <span className="step-index">03</span>
                  <div><small>OUTPUT</small><b>Pull request<br/>ready</b></div>
                  <span className="output-check">✓</span>
                </div>
              </div>
              <div className="workflow-log">
                <span><i /> builder</span>
                <p>Connected OAuth callback and added session tests</p>
                <time>just now</time>
              </div>
            </div>
          </div>
          <div className="orchestrator-statusbar">
            <span><i /> 3 AGENTS WORKING IN PARALLEL</span>
            <span>BRANCH / feature-auth</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "guard") {
    return (
      <div className="project-visual guard-visual" aria-hidden="true">
        <div className="guard-shell">
          <div className="mini-titlebar"><span>COLLABGUARD / MOD QUEUE</span><span><i /> 03 OPEN</span></div>
          <div className="guard-board">
            <div className="guard-queue">
              <small>SHARED QUEUE</small>
              <div className="queue-item active"><b>r/developers</b><span>semantic review</span><i>HIGH</i></div>
              <div className="queue-item"><b>r/startups</b><span>possible spam</span><i>MED</i></div>
              <div className="queue-item"><b>r/programming</b><span>context check</span><i>LOW</i></div>
            </div>
            <div className="guard-case">
              <div className="case-top"><span>CASE / CG-204</span><b>EVIDENCE FOUND</b></div>
              <p>“You keep posting this link in every thread…”</p>
              <div className="risk-signal"><span>SEMANTIC RISK</span><strong>0.84</strong><i><b /></i></div>
              <div className="evidence-tags"><span>repeated link</span><span>hostile tone</span><span>3 reports</span></div>
              <div className="moderator-actions"><span>GENTLE NUDGE</span><span>START VOTE</span><b>REVIEW →</b></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "hire") {
    return (
      <div className="project-visual hire-visual" aria-hidden="true">
        <div className="hire-pipeline">
          <div className="mini-titlebar"><span>AI-HIRE-AI / LIVE RUN</span><span><i /> 10 APPLICATIONS</span></div>
          <div className="candidate-card"><span>BT</span><div><small>CANDIDATE</small><b>Profile memory</b><i>READY</i></div></div>
          <span className="pipeline-arrow">→</span>
          <div className="hire-agents">
            <div><span>01</span><b>FIT RANKER</b><i>98% match</i></div>
            <div><span>02</span><b>FIELD MAPPER</b><i>12 fields</i></div>
            <div><span>03</span><b>FOLLOW-UP</b><i>draft ready</i></div>
          </div>
          <span className="pipeline-arrow">→</span>
          <div className="hire-output"><small>HUMAN REVIEW</small><b>ATS packet<br/>ready</b><span>APPROVE ✓</span></div>
        </div>
      </div>
    );
  }

  if (type === "market") {
    return (
      <div className="project-visual market-visual" aria-hidden="true">
        <div className="market-terminal">
          <div className="mini-titlebar"><span>CRYPTO PILOT / BTC-USD</span><span className="market-up">+4.82%</span></div>
          <div className="market-price"><small>BITCOIN</small><b>$104,284.32</b><span>LIVE MARKET</span></div>
          <div className="candle-chart"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
          <div className="market-order"><small>AI PORTFOLIO SIGNAL</small><b>Momentum rising</b><div><span>BUY 62%</span><span>HOLD 31%</span><span>SELL 07%</span></div></div>
        </div>
      </div>
    );
  }

  if (type === "social") {
    return (
      <div className="project-visual social-visual" aria-hidden="true">
        <div className="social-orbit orbit-heart-one">♥</div><div className="social-orbit orbit-heart-two">♥</div>
        <div className="vibe-card">
          <div className="mini-titlebar"><span>CRUSHIE / VIBE PROFILE</span><span>AI COACH</span></div>
          <div className="vibe-person"><span>BT</span><div><small>SOCIAL INTELLIGENCE</small><b>SIQ / 87</b></div></div>
          <div className="vibe-radar"><i /><i /><i /><b>87</b></div>
          <div className="vibe-traits"><span>EMPATHY 92</span><span>HUMOR 84</span><span>CONFIDENCE 76</span></div>
          <div className="coach-tip"><small>LIVE COACH SUGGESTS</small><b>Ask about the concert in their photo.</b><span>TRY IT →</span></div>
        </div>
      </div>
    );
  }

  if (type === "path") {
    return (
      <div className="project-visual path-visual" aria-hidden="true">
        <div className="path-workspace">
          <div className="mini-titlebar"><span>PATHAI / CAREER DNA</span><span><i /> SCANNING</span></div>
          <div className="resume-sheet"><span>BT</span><b>SOFTWARE<br/>ENGINEER</b><i /><i /><i /></div>
          <div className="path-beam"><span>AI MATCH</span></div>
          <div className="match-stack">
            <small>SELECTED MATCHES</small>
            <div><b>Principal Engineer</b><span>STRIPE</span><strong>98%</strong></div>
            <div><b>AI Research Lead</b><span>OPENAI</span><strong>94%</strong></div>
            <div><b>ML Architect</b><span>ANTHROPIC</span><strong>91%</strong></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual research-visual" aria-hidden="true">
      <div className="research-workspace">
        <div className="mini-titlebar"><span>FUSIONAI / RESEARCH</span><span><i /> SYNTHESIZING</span></div>
        <div className="research-query">How does quantum entanglement work?<span>↵</span></div>
        <div className="source-row"><span>WIKIPEDIA<i>FOUND</i></span><span>OPEN WEB<i>12 RESULTS</i></span><span>GPT-4o<i>READY</i></span></div>
        <div className="source-flow"><i /><i /><i /></div>
        <div className="answer-sheet"><small>SYNTHESIZED ANSWER</small><b>Entanglement links particle states across distance.</b><p>Measurements are correlated beyond what classical physics predicts.</p><div><span>[1] Wikipedia</span><span>[2] Nature</span><span>[3] arXiv</span></div></div>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeExperience, setActiveExperience] = useState(0);
  const [copied, setCopied] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [portraitMode, setPortraitMode] = useState<"photo" | "render">("photo");
  const surfaceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const introTimer = window.setTimeout(() => setIntroDone(true), 700);
    return () => window.clearTimeout(introTimer);
  }, []);

  useEffect(() => {
    const initialTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const intro = gsap.timeline({ delay: 0.82 });
        intro
          .from(".hero-copy .eyebrow", { autoAlpha: 0, y: 18, duration: 0.55, ease: "power2.out" })
          .from(".hero h1", { autoAlpha: 0, y: 72, rotate: 1.5, duration: 1, ease: "power4.out" }, "-=0.28")
          .from(".hero-bottom-copy", { autoAlpha: 0, y: 30, duration: 0.7, ease: "power3.out" }, "-=0.48")
          .from(".hero-thread", { autoAlpha: 0, x: 54, rotate: 1.4, duration: 0.9, ease: "power4.out" }, "-=0.65");

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((item) => {
          gsap.fromTo(
            item,
            { autoAlpha: 0, y: 46 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 88%",
                once: true,
              },
            },
          );
        });

        gsap.to(".hero-index", {
          xPercent: -13,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });

        gsap.utils.toArray<HTMLElement>(".project-visual").forEach((visual) => {
          gsap.fromTo(
            visual,
            { backgroundPosition: "50% 0%" },
            {
              backgroundPosition: "50% 100%",
              ease: "none",
              scrollTrigger: {
                trigger: visual,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.7,
              },
            },
          );
        });

        gsap.to(".contact-orbit", {
          rotate: 140,
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: ".contact-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      media.add("(min-width: 981px) and (prefers-reduced-motion: no-preference)", () => {
        const buildThread = gsap.timeline({
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.75,
            invalidateOnRefresh: true,
          },
        });

        buildThread
          .to(".thread-signal", {
            y: () => {
              const canvas = document.querySelector<HTMLElement>(".thread-rail");
              const signal = document.querySelector<HTMLElement>(".thread-signal");
              return canvas && signal ? Math.max(230, canvas.clientHeight - signal.offsetHeight - 34) : 280;
            },
            rotate: 5,
            ease: "none",
          }, 0)
          .to(".thread-line-fill", { scaleY: 1, ease: "none" }, 0)
          .to(".portrait-frame", { y: 10, rotate: 0.8, scale: 0.985, ease: "none" }, 0)
          .to(".hero-copy", { yPercent: -6, autoAlpha: 0.58, ease: "none" }, 0)
          .to(".thread-step-one", { color: "var(--blue)", x: 5, duration: 0.12 }, 0.08)
          .to(".thread-step-one i", { backgroundColor: "var(--blue)", color: "var(--on-dark)", duration: 0.12 }, 0.08)
          .to(".thread-step-two", { color: "var(--ink)", x: 5, duration: 0.12 }, 0.42)
          .to(".thread-step-two i", { backgroundColor: "var(--ink)", color: "var(--paper)", duration: 0.12 }, 0.42)
          .to(".thread-step-three", { color: "var(--coral)", x: 5, duration: 0.12 }, 0.74)
          .to(".thread-step-three i", { backgroundColor: "var(--coral)", color: "var(--on-dark)", duration: 0.12 }, 0.74)
          .to(".portrait-caption", { backgroundColor: "var(--blue-surface)", duration: 0.12 }, 0.8)
          .to(".portrait-focus", { autoAlpha: 1, x: 0, duration: 0.12 }, 0.84);
      });

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-reveal]", { autoAlpha: 1, y: 0 });
      });

    }, surfaceRef);

    return () => {
      media.revert();
      context.revert();
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

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
    setTheme(nextTheme);
    window.requestAnimationFrame(() => ScrollTrigger.refresh());
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
          <a href={resumeUrl} target="_blank" rel="noreferrer">RÉSUMÉ ↗</a>
        </div>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-pressed={theme === "dark"}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <span aria-hidden="true">{theme === "dark" ? "☀" : "◐"}</span>
            <small>{theme === "dark" ? "LIGHT" : "DARK"}</small>
          </button>
          <a className="nav-cta" href="mailto:baotran.swe@gmail.com">
            LET&apos;S TALK <span>↗</span>
          </a>
        </div>
      </nav>

      <main>
        <section className="hero" id="top">
          <div className="hero-sticky">
            <div className="hero-grid" aria-hidden="true" />
            <SignalScene />
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
                  <a className="text-link" href={resumeUrl} target="_blank" rel="noreferrer">DOWNLOAD RÉSUMÉ ↗</a>
                  <a className="text-link" href="https://github.com/BaoT1301" target="_blank" rel="noreferrer">GITHUB ↗</a>
                </div>
              </div>
            </div>

            <div className="hero-thread" aria-label="A scroll-driven thread from question to shipped product">
              <div className="thread-meta"><span>BAO TRAN / 1301</span><span>SCROLL TO BUILD ↓</span></div>
              <div className="thread-canvas">
                <div className="thread-rail" aria-hidden="true">
                  <span className="thread-line"><i className="thread-line-fill" /></span>
                  <div className="thread-step thread-step-one"><i>01</i><span><small>ASK</small><b>QUESTION</b></span></div>
                  <div className="thread-step thread-step-two"><i>02</i><span><small>MAKE</small><b>BUILD</b></span></div>
                  <div className="thread-step thread-step-three"><i>03</i><span><small>RELEASE</small><b>SHIP</b></span></div>
                  <div className="thread-signal"><b>BT</b><i /></div>
                </div>

                <figure className={`portrait-frame portrait-frame-${portraitMode}`}>
                  <div className="portrait-switch" role="group" aria-label="Choose portrait style">
                    <button
                      type="button"
                      className={portraitMode === "photo" ? "active" : ""}
                      onClick={() => setPortraitMode("photo")}
                      aria-pressed={portraitMode === "photo"}
                    >PHOTO</button>
                    <button
                      type="button"
                      className={portraitMode === "render" ? "active" : ""}
                      onClick={() => setPortraitMode("render")}
                      aria-pressed={portraitMode === "render"}
                    >3D</button>
                  </div>
                  <div className="portrait-media">
                    <img
                      className="portrait-photo"
                      src="/bao-tran-photo-v3.png"
                      alt={portraitMode === "photo" ? "Portrait photograph of Bao Tran" : ""}
                      aria-hidden={portraitMode !== "photo"}
                      width="1254"
                      height="1254"
                    />
                    <img
                      className="portrait-render"
                      src="/bao-tran-3d-v1.png"
                      alt={portraitMode === "render" ? "Stylized 3D portrait of Bao Tran" : ""}
                      aria-hidden={portraitMode !== "render"}
                      width="1536"
                      height="1536"
                    />
                  </div>
                  <span className="portrait-source">{portraitMode === "photo" ? "ORIGINAL FRAME" : "3D STUDY"}</span>
                  <figcaption className="portrait-caption"><b>BAO TRAN</b><span>SOFTWARE ENGINEER · AI BUILDER</span></figcaption>
                </figure>

                <div className="portrait-focus"><small>CURRENTLY EXPLORING</small><strong>AGENTS × DEV TOOLS</strong></div>
              </div>
              <div className="thread-foot"><span>FAIRFAX / VA</span><span>CS @ GMU · AVAILABLE FALL &apos;26</span></div>
            </div>

            <div className="hero-index" aria-hidden="true">1301</div>
          </div>
        </section>

        <section className="statement-strip" aria-label="Portfolio summary">
          <div className="ticker-track">
            {[0, 1].map((copy) => (
              <div className="ticker-group" aria-hidden="true" key={copy}>
                <span>AI SYSTEMS</span><i>✦</i><span>PRODUCTION APIs</span><i>✦</i><span>FULL-STACK PRODUCTS</span><i>✦</i>
              </div>
            ))}
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-kicker" data-reveal>
            <span>SELECTED SYSTEMS</span><span>07 PROJECTS / 2025—26</span>
          </div>
          <div className="work-heading" data-reveal>
            <h2>Work with<br/><em>a pulse.</em></h2>
            <p>Projects that think, respond, and solve a real problem—not just rectangles in a browser.</p>
          </div>

          <div className="project-showcase-grid">
            {projects.map((project, index) => (
              <a
                className={`project-card showcase-card showcase-${project.visual} ${index === 0 ? "showcase-card-featured" : ""}`}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                key={project.title}
                data-reveal
                aria-label={`Open ${project.title}`}
              >
                <div className="project-card-head">
                  <span>{project.number}</span>
                  <span>PROJECT / {project.label}</span>
                  <span>↗</span>
                </div>
                <ProjectVisual type={project.visual} />
                <div className="showcase-card-copy">
                  <div className="showcase-meta">
                    <span>{project.label}</span>
                    <span className="showcase-status"><i />{project.number === "01" ? "WAITLIST" : project.number === "02" ? "PLAYTEST" : "LIVE"}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="showcase-footer">
                    <div className="project-tech">
                      {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                    </div>
                    <span className="showcase-open">OPEN PROJECT <b>→</b></span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="experience-aside" data-reveal>
            <div className="section-kicker section-kicker-light">
              <span>FIELD EXPERIENCE</span><span>06 ROLES / 2026</span>
            </div>
            <h2>Code in the<br/><em>real world.</em></h2>
            <p>Real teams, real constraints, real software still running after the demo ends.</p>
            <div className="experience-counts">
              <div><strong>6</strong><span>ROLES & FELLOWSHIPS</span></div>
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
                <div className="tool-row-track" aria-hidden="true">
                  {[0, 1].map((copy) => (
                    <div className="tool-row-group" key={copy}>
                      {row.map((tool) => <span key={`${copy}-${tool}`}>{tool}<i>·</i></span>)}
                    </div>
                  ))}
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
      ╭─────▼──────╮
  ╭──▶│ PROTOTYPE  │
  │   ╰─────┬──────╯
  │         │
  │   ╭─────▼──────╮
  ╰───┤    LEARN   │
      ╰─────┬──────╯
            │
            ▼
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
