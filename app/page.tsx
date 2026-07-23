"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BuildArtifact from "./BuildArtifact";

gsap.registerPlugin(ScrollTrigger, useGSAP);

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
      <div className="project-artwork product-still still-orchestrator" aria-hidden="true">
        <div className="still-frame">
          <div className="still-meta"><span>One brief</span><b>Merged to main</b></div>
          <div className="orchestrator-map">
            <div className="map-card map-brief"><small>Brief</small><strong>Add OAuth login and session refresh</strong></div>
            <i className="flow-main-fill" />
            <div className="map-card map-architect">
              <small>Gemini</small>
              <strong>Architect</strong>
              <span className="node-copy">Plans the work</span>
              <span className="node-state"><b className="state-processing">Planning</b><b className="state-ready">Plan ready</b></span>
              <span className="node-progress"><i /></span>
            </div>
            <div className="map-branches">
              <i className="branch-trunk branch-trunk-in"><b /></i>
              <i className="branch-trunk branch-trunk-out"><b /></i>
              <div className="map-track map-track-a">
                <small>Track A</small><strong>Frontend</strong>
                <span className="node-state"><b className="state-processing">Processing</b><b className="state-ready">Ready</b></span>
                <span className="node-progress"><i /></span>
              </div>
              <div className="map-track map-track-b">
                <small>Track B</small><strong>Backend</strong>
                <span className="node-state"><b className="state-processing">Processing</b><b className="state-ready">Ready</b></span>
                <span className="node-progress"><i /></span>
              </div>
              <div className="map-track map-track-c">
                <small>Track C</small><strong>Tests</strong>
                <span className="node-state"><b className="state-processing">Processing</b><b className="state-ready">Ready</b></span>
                <span className="node-progress"><i /></span>
              </div>
            </div>
            <div className="map-card map-merge"><small>Shared branch</small><strong>Ordered merge</strong><span>Working commits</span></div>
            <div className="merge-confirmation"><span>Main</span><strong>Merged</strong><small>Frontend + backend + tests</small></div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "hire") {
    return (
      <div className="project-artwork product-still still-hire" aria-hidden="true">
        <div className="still-frame">
          <div className="still-meta"><span>Two sided agents</span><b>Human review gate</b></div>
          <div className="interview-scene">
            <i className="interview-signal" />
            <div className="agent agent-candidate"><small>Candidate agent</small><strong>Tailors the application</strong><span>Resume + role context</span></div>
            <div className="interview-transcript">
              <small>Interview exchange</small>
              <p><b>Recruiter</b> Tell me about a system you shipped.</p>
              <p><b>Candidate</b> I built an agent workflow that turns one brief into reviewed commits.</p>
            </div>
            <div className="agent agent-recruiter"><small>Recruiter agent</small><strong>Builds the evidence packet</strong><span>Links + notes + signals</span></div>
            <div className="evidence-packet"><span>Application</span><span>Interview</span><span>Public work</span><b>Ready for review</b></div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "guard") {
    return (
      <div className="project-artwork product-still still-guard" aria-hidden="true">
        <div className="still-frame">
          <div className="still-meta"><span>Shared moderation queue</span><b>Human controlled</b></div>
          <div className="moderation-flow">
            <i className="moderation-signal" />
            <div className="case-card"><small>Reported comment</small><strong>“You keep posting this link in every thread.”</strong><span>r/developers</span></div>
            <div className="evidence-card"><small>Evidence gathered</small><span>Repeated link</span><span>Thread context</span><span>Community reports</span></div>
            <div className="decision-card"><small>Moderator decides</small><strong>Review the context</strong><div><span>Gentle nudge</span><span>Start vote</span></div><b>Final action stays human</b></div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "market") {
    return (
      <div className="project-artwork product-still still-market" aria-hidden="true">
        <div className="still-frame">
          <div className="still-meta"><span>Live market</span><b>Review before submit</b></div>
          <div className="trading-scene">
            <div className="market-title"><small>BTC / USD</small><strong>Price movement, without the noise.</strong><span>Live WebSocket feed</span></div>
            <div className="market-bars">
              {[32, 45, 37, 56, 48, 67, 59, 77, 69, 86, 79, 93].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
              <span className="market-scan" />
            </div>
            <div className="trade-ticket"><small>Limit order</small><div><span>Side</span><b>Buy</b></div><div><span>Asset</span><b>Bitcoin</b></div><strong>Review order</strong></div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "social") {
    return (
      <div className="project-artwork product-still still-social" aria-hidden="true">
        <div className="still-frame">
          <div className="still-meta"><span>Real time coach</span><b>Practice, then reflect</b></div>
          <div className="coaching-scene">
            <div className="chat-thread">
              <small>Conversation practice</small>
              <p className="chat-them">What have you been excited about lately?</p>
              <p className="chat-me">I have been building a new side project. It finally works.</p>
              <p className="chat-them">That sounds fun. What does it do?</p>
            </div>
            <div className="coach-note"><small>Coach note</small><strong>Good opening. Ask one follow up before changing the subject.</strong><span>Notice → listen → respond</span></div>
            <div className="practice-loop"><span>Practice</span><i /><span>Feedback</span><i /><b>Try again</b></div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "path") {
    return (
      <div className="project-artwork product-still still-path" aria-hidden="true">
        <div className="still-frame">
          <div className="still-meta"><span>Resume to direction</span><b>Trajectory over keywords</b></div>
          <div className="career-map-scene">
            <div className="path-profile-card">
              <small>Resume signal</small>
              <strong>Builder profile</strong>
              <div><span>APIs</span><span>Agents</span><span>Product</span></div>
            </div>
            <div className="career-map">
              <span className="map-axis axis-depth">Systems depth</span>
              <span className="map-axis axis-ownership">Product ownership</span>
              <i className="career-route route-one" />
              <i className="career-route route-two" />
              <i className="career-route route-three" />
              <div className="career-point point-origin"><small>Starting signal</small><strong>Backend systems</strong></div>
              <div className="career-point point-platform"><small>Adjacent route</small><strong>Platform engineering</strong></div>
              <div className="career-point point-target"><small>Strongest direction</small><strong>AI product engineer</strong></div>
              <div className="career-point point-tools"><small>Explore next</small><strong>Developer tools</strong></div>
            </div>
            <div className="career-map-note"><span>Skills</span><span>Context</span><b>Long term fit</b></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="project-artwork product-still still-research" aria-hidden="true">
      <div className="still-frame">
        <div className="still-meta"><span>Multi source research</span><b>Citations stay visible</b></div>
        <div className="synthesis-scene">
          <div className="source-stack"><div><small>Source 01</small><strong>Wikipedia</strong></div><div><small>Source 02</small><strong>Open web</strong></div><div><small>Source 03</small><strong>GPT 4o mini</strong></div></div>
          <div className="synthesis-lines"><i /><i /><i /></div>
          <div className="synthesis-answer"><small>Synthesized answer</small><strong>Agent systems coordinate through shared state, clear ownership, and ordered handoffs.</strong><p>Each claim keeps a visible path back to its source.</p><div><span>[1]</span><span>[2]</span><span>[3]</span></div></div>
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
  const projectWorkbenchRef = useRef<HTMLDivElement>(null);
  const initialProjectRef = useRef(true);
  const project = projects[activeProject];

  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.05 });
      intro
        .from(".identity-card", { autoAlpha: 0, x: -35, duration: 0.55 })
        .from(".story-hero .eyebrow", { autoAlpha: 0, y: 10, duration: 0.3 }, "<0.08")
        .from(".story-hero h1", { autoAlpha: 0, y: 24, duration: 0.55 }, "<0.05")
        .from(".story-hero .hero-copy, .story-hero .hero-index", { autoAlpha: 0, y: 14, stagger: 0.07, duration: 0.4 }, "-=0.25");

      gsap.to(".story-hero h1", {
        yPercent: -7,
        ease: "none",
        scrollTrigger: {
          trigger: ".story-hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.65,
        },
      });

      gsap.to(".story-hero .eyebrow, .story-hero .hero-copy, .story-hero .hero-index", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: ".story-hero",
          start: "35% top",
          end: "bottom top",
          scrub: 0.65,
        },
      });

      gsap.utils.toArray<HTMLElement>(".story-section").forEach((section) => {
        const chapter = section.dataset.chapter ?? "Working";
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveChapter(chapter),
          onEnterBack: () => setActiveChapter(chapter),
        });

        gsap.from(section.querySelectorAll(":scope > .chapter-heading, :scope > .chapter-body, :scope > .project-workbench, :scope > .contact-panel, :scope > .site-footer"), {
          autoAlpha: 0,
          y: 36,
          stagger: 0.08,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 84%", once: true },
        });

        const processNote = section.querySelector<HTMLElement>(":scope > .process-note");
        if (processNote) {
          gsap.from(processNote, {
            autoAlpha: 0,
            y: 14,
            duration: 0.3,
            ease: "power2.out",
            scrollTrigger: { trigger: processNote, start: "top 92%", once: true },
          });
        }

        const headline = section.querySelector<HTMLElement>(".chapter-body h2");
        if (headline) {
          gsap.fromTo(headline, { yPercent: 5 }, {
            yPercent: -3,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "top 24%",
              scrub: 0.55,
            },
          });
        }
      });

      gsap.utils.toArray<HTMLElement>(".experience-row").forEach((row) => {
        gsap.from(row, {
          autoAlpha: 0,
          y: 24,
          duration: 0.52,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 92%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".tool-rack article").forEach((row, index) => {
        gsap.from(row, {
          autoAlpha: 0,
          x: index % 2 === 0 ? -22 : 22,
          duration: 0.56,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 92%",
            once: true,
          },
        });
      });

      gsap.from(".project-tabs button", {
        autoAlpha: 0,
        x: 14,
        stagger: 0.045,
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".project-tabs",
          start: "top 92%",
          once: true,
        },
      });

      gsap.from(".contact-panel > *", {
        autoAlpha: 0,
        y: 18,
        stagger: 0.07,
        duration: 0.48,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-panel",
          start: "top 82%",
          once: true,
        },
      });

      gsap.fromTo(".route-progress", { scaleX: 0 }, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { trigger: ".story-column", start: "top top", end: "bottom bottom", scrub: 0.45 },
      });
      gsap.to(".route-marker", {
        x: () => {
          const route = siteRef.current?.querySelector<HTMLElement>(".identity-route");
          return Math.max(0, (route?.clientWidth ?? 28) - 28);
        },
        ease: "none",
        scrollTrigger: {
          trigger: ".story-column",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.45,
          invalidateOnRefresh: true,
        },
      });
    });

    media.add("(min-width: 821px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.to(".portrait-window img", {
        yPercent: 3,
        scale: 1.025,
        ease: "none",
        scrollTrigger: {
          trigger: ".story-column",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.1,
        },
      });
    });

    return () => media.revert();
  }, { scope: siteRef });

  useGSAP(() => {
    if (initialProjectRef.current) {
      initialProjectRef.current = false;
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const stage = projectWorkbenchRef.current?.querySelector<HTMLElement>(".project-stage");
    if (!stage) return;

    const visual = stage.querySelector(".project-visual");
    const story = stage.querySelectorAll(".project-story > *");
    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

    timeline
      .fromTo(stage, { autoAlpha: 0.72 }, { autoAlpha: 1, duration: 0.22 })
      .fromTo(visual, { xPercent: -2.5, scale: 0.985 }, { xPercent: 0, scale: 1, duration: 0.48 }, 0)
      .fromTo(story, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, stagger: 0.035, duration: 0.36 }, 0.08);
  }, { dependencies: [activeProject], scope: projectWorkbenchRef, revertOnUpdate: true });

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
              <BuildArtifact />
            </div>
          </section>

          <section className="story-section work-section" id="work" data-chapter="Build an answer">
            <div className="chapter-heading"><span>BUILD</span><p>Seven questions, seven working answers</p></div>
            <div className="chapter-body">
              <h2>I learn faster when the idea has to become <em className="accent-violet">real.</em></h2>
              <p>Choose a question. Each project is the system I built to answer it.</p>
            </div>
            <div className="project-workbench" ref={projectWorkbenchRef}>
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
