"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "@phosphor-icons/react";
import BuildArtifact from "./BuildArtifact";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const resumeUrl = "https://drive.google.com/file/d/1qGFqSE-PPQgTFeseoSHboO8INOjg2oWn/view?usp=sharing";
const emailUrl = "mailto:baotran.swe@gmail.com";
const githubUrl = "https://github.com/BaoT1301";
const linkedinUrl = "https://www.linkedin.com/in/baot1301/";

const projects = [
  {
    title: "Chuchube Workflow",
    label: "Multi agent developer tool",
    question: "Can one developer direct a small team of agents without losing the thread?",
    description: "Describe a feature once, fan it into parallel coding worktrees, and merge working commits back in dependency order.",
    result: "One brief becomes parallel workstreams, then returns as ordered commits on a shared branch.",
    tech: ["Gemini", "Git Worktrees", "MongoDB"],
    href: "https://workflow.chuchube.co/",
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
    title: "Prism",
    label: "Personalized learning",
    question: "Can one lesson meet every student where they already are?",
    description: "Turns one teacher set objective into an interactive lab personalized to each student's interests, holding the same rigor while changing the way in.",
    result: "One objective becomes three tailored paths, basketball, Formula 1, and space, each preserving the same difficulty.",
    tech: ["Next.js", "LLMs", "EdTech"],
    href: "https://prism-gray-gamma.vercel.app/",
    status: "Live",
    visual: "prism",
  },
  {
    title: "Crypto Pilot",
    label: "Real time trading",
    question: "How do you make a fast market feel understandable?",
    description: "A cryptocurrency trading platform with live prices, market and limit orders, portfolio tooling, and AI powered support.",
    result: "Live prices, order types, portfolio tracking, and AI support live inside one coherent trading flow.",
    tech: ["WebSockets", "Trading Engine", "AI Assistant"],
    href: "https://cryptopilot.up.railway.app/",
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
    href: "https://crushie.up.railway.app/",
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
    href: "https://usepathai.vercel.app/",
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

type Experience = {
  company: string;
  context: string;
  role: string;
  href: string;
  description: string;
  collapsed?: boolean;
};

const experiences: Experience[] = [
  {
    company: "OpenTrade",
    context: "YC S26",
    role: "Growth Intern",
    href: "https://www.opentrade.live/",
    description: "Built an automated outreach engine that discovers and verifies target communities, drafts personalized messaging, and drove high engagement and weekly active growth for a games first fintech product.",
  },
  {
    company: "Deep24",
    context: "YC W24",
    role: "Founder Fellow",
    href: "https://deep24.com/",
    description: "Building an AI startup inside a YC backed founder fellowship. Moving from raw idea to tested product with an AI coach and founder feedback loops.",
  },
  {
    company: "Hemut",
    context: "YC X25",
    role: "Software Engineer Intern",
    href: "https://www.hemut.com/",
    description: "Designed more than five agent systems, API integrations, and data enrichment pipelines for a logistics startup.",
  },
  {
    company: "Ellucian",
    context: "AI platform",
    role: "Software Engineer Intern",
    href: "https://www.ellucian.com/",
    description: "Contributing to internal AI platform initiatives across token usage, systems architecture, and AWS deployment.",
  },
  {
    company: "Todd",
    context: "Agtech",
    role: "Software Engineer Intern",
    href: "https://toddagriscience.com/en",
    description: "Building AI powered agtech software across product engineering, farm management workflows, and internal tools.",
  },
  {
    company: "Deepiri",
    context: "AI research",
    role: "Founding Engineer",
    href: "https://deepiri.com",
    description: "Built AI features, ML pipelines, and RAG systems for more than 100 internal users in a research collective.",
  },
  {
    company: "Handshake",
    context: "LLM evals",
    role: "Software Engineer Fellow",
    href: "https://joinhandshake.com/ai/opportunities",
    description: "Developed golden solutions and adversarial test cases for benchmarking difficult AI coding tasks.",
    collapsed: true,
  },
];

const toolGroups = [
  { name: "Languages", tools: ["Python", "Go", "Java", "TypeScript", "SQL"] },
  { name: "Product", tools: ["React", "Next.js", "FastAPI", "Node.js", "Spring Boot", "LangChain"] },
  { name: "Systems", tools: ["AWS", "GCP", "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "Redis", "Kafka", "Supabase"] },
  { name: "AI", tools: ["LLMs", "Agents", "RAG", "Bedrock", "LangGraph", "OpenAI", "PyTorch", "MCP", "pgvector"] },
];

const buildSteps = ["notice", "ask", "sketch", "build", "break", "listen", "rebuild", "ship"];

const projectShots: Record<string, string> = {
  orchestrator: "/shots/orchestrator.jpg",
  hire: "/shots/ai-hire.jpg",
  prism: "/shots/prism.jpg",
  market: "/shots/crypto-pilot.jpg",
  social: "/shots/crushie.jpg",
  path: "/shots/pathai.jpg",
  research: "/shots/fusionai.jpg",
};

// Per-project screenshot framing (object-position). Default is top center.
const shotPosition: Record<string, string> = {
  orchestrator: "22% center",
  hire: "center",
  social: "center",
  path: "center",
  market: "22% center",
  research: "28% center",
  prism: "18% center",
};

export default function Home() {
  const [activeProject, setActiveProject] = useState(0);
  const [activeChapter, setActiveChapter] = useState("Introduction");
  const [copied, setCopied] = useState(false);
  const [showAllExperience, setShowAllExperience] = useState(false);
  const siteRef = useRef<HTMLDivElement>(null);
  const projectWorkbenchRef = useRef<HTMLDivElement>(null);
  const initialProjectRef = useRef(true);
  const project = projects[activeProject];

  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      // Entrance choreography: the page assembles, then the headline reveals
      // line by line from behind a mask. Expo easing, staggered overlaps.
      const intro = gsap.timeline({ defaults: { ease: "power4.out" }, delay: 0.06 });
      intro
        .from(".identity-card", { autoAlpha: 0, y: 34, scale: 0.965, transformOrigin: "50% 0%", duration: 0.95 }, 0.05)
        .from(".portrait-window img", { scale: 1.14, duration: 1.25, ease: "power3.out" }, 0.2)
        .from(".identity-route", { autoAlpha: 0, scaleX: 0, transformOrigin: "left center", duration: 0.7 }, 0.6)
        .from(".story-hero .eyebrow", { autoAlpha: 0, y: 16, duration: 0.6 }, 0.42)
        .from(".story-hero h1 .hl-in", { yPercent: 115, duration: 1.05, stagger: 0.13, ease: "power4.out" }, 0.5)
        .from(".story-hero .hero-copy > *, .story-hero .hero-index > *", { autoAlpha: 0, y: 18, duration: 0.6, stagger: 0.045 }, 0.98);

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

  // Magnetic Résumé button: eases toward the cursor when it comes near.
  // Writes transform directly (no React state) so it never re-renders the tree.
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!mq.matches) return;
    const btn = document.querySelector<HTMLElement>(".header-resume");
    if (!btn) return;
    const strength = 0.32;
    const onMove = (event: PointerEvent) => {
      const r = btn.getBoundingClientRect();
      const dx = event.clientX - (r.left + r.width / 2);
      const dy = event.clientY - (r.top + r.height / 2);
      const reach = Math.hypot(r.width, r.height) / 2 + 80;
      if (Math.hypot(dx, dy) < reach) {
        btn.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
      } else if (btn.style.transform) {
        btn.style.transform = "";
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      btn.style.transform = "";
    };
  }, []);

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
        <a className="header-resume" href={resumeUrl} target="_blank" rel="noreferrer">Résumé <ArrowUpRight className="external-arrow" weight="regular" aria-hidden="true" /></a>
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
              <a href={githubUrl} target="_blank" rel="noreferrer">GitHub <ArrowUpRight className="external-arrow" weight="regular" aria-hidden="true" /></a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight className="external-arrow" weight="regular" aria-hidden="true" /></a>
              <a href={emailUrl}>Email <ArrowUpRight className="external-arrow" weight="regular" aria-hidden="true" /></a>
            </div>
          </div>
        </aside>

        <main className="story-column">
          <section className="story-hero" id="top" data-chapter="Introduction">
            <p className="eyebrow"><span>●</span> Available for Fall 2026 and Summer 2027</p>
            <h1>
              <span className="hl"><span className="hl-in">I build the thing.</span></span>
              <span className="hl"><span className="hl-in">Then I make it <em className="accent-em">worth using.</em></span></span>
            </h1>
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
              <h2>Most of my projects begin with something I cannot stop <em className="accent-em">noticing.</em></h2>
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
              <h2>I learn faster when the idea has to become <em className="accent-em">real.</em></h2>
              <p>Choose a question. Each project is the system I built to answer it.</p>
            </div>
            <div className="project-workbench" ref={projectWorkbenchRef}>
              <article className={`project-stage project-stage-${project.visual}`} id="project-panel" role="tabpanel" key={project.title}>
                <div className="project-visual" data-pointer-surface="project">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="project-shot" style={{ objectPosition: shotPosition[project.visual] ?? "top center" }} src={projectShots[project.visual] ?? "/shots/orchestrator.png"} alt={`${project.title} screenshot`} />
                </div>
                <div className="project-story">
                  <div className="panel-meta"><span>{project.label}</span><b>{project.status}</b></div>
                  <p className="project-number">SELECTED PROJECT</p>
                  <h3>{project.title}</h3>
                  <strong>{project.question}</strong>
                  <p>{project.description}</p>
                  <div className="project-proof"><span>What it proved</span><p>{project.result}</p></div>
                  <footer><span>{project.tech.join(" / ")}</span><a href={project.href} target="_blank" rel="noreferrer">open project <ArrowUpRight className="external-arrow" weight="regular" aria-hidden="true" /></a></footer>
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
              <h2>Then the work meets users, deadlines, and <em className="accent-em">production.</em></h2>
              <p>These are the places that taught me how an idea changes when other people depend on it.</p>
            </div>
            <div className="experience-list">
              {experiences
                .filter((item) => showAllExperience || !item.collapsed)
                .map((item) => (
                <a className="experience-row" href={item.href} target="_blank" rel="noreferrer" key={item.company}>
                  <div className="experience-company"><small className={item.context.startsWith("YC") ? "ctx-yc" : undefined}>{item.context}</small><h3>{item.company}</h3></div>
                  <div className="experience-role"><strong className="role-flip"><span className="role-cur">{item.role}</span><span className="role-alt" aria-hidden="true">{item.role}</span></strong></div>
                  <p>{item.description}</p>
                  <ArrowUpRight className="experience-arrow external-arrow" weight="regular" aria-hidden="true" />
                </a>
              ))}
            </div>
            {experiences.some((item) => item.collapsed) && (
              <button
                type="button"
                className="experience-toggle"
                onClick={() => setShowAllExperience((prev) => !prev)}
                aria-expanded={showAllExperience}
              >
                {showAllExperience
                  ? "Show less"
                  : `Show ${experiences.filter((item) => item.collapsed).length} more`}
              </button>
            )}
          </section>

          <section className="story-section toolkit-section" id="toolkit" data-chapter="Choose the right tool">
            <div className="chapter-heading"><span>TOOLKIT</span><p>Tools are choices, not identity</p></div>
            <div className="chapter-body">
              <h2>The stack changes. The habit of choosing deliberately <em className="accent-em">does not.</em></h2>
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
              <h2>What should agents do after <em className="accent-em">“hello world”?</em></h2>
              <p>I am exploring agent observability, human judgment in automated workflows, developer tools, and AI native interfaces.</p>
            </div>
            <div className="contact-panel">
              <p>Have a hard problem?</p>
              <a className="contact-email" href={emailUrl}>baotran.swe@gmail.com</a>
              <div className="contact-actions"><a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight className="external-arrow" weight="regular" aria-hidden="true" /></a><a href={githubUrl} target="_blank" rel="noreferrer">GitHub <ArrowUpRight className="external-arrow" weight="regular" aria-hidden="true" /></a><button type="button" onClick={copyEmail}>{copied ? "email copied" : "copy email"}</button></div>
            </div>
            <footer className="site-footer">
              <div className="footer-statement"><span>LAST NOTE / 2026</span><strong>Make something useful.</strong></div>
              <div className="footer-note"><span>Software engineer</span><span>Washington DC</span><span>Available Fall 2026 and Summer 2027</span></div>
              <nav aria-label="Footer navigation"><a href="#work">Work</a><a href="#experience">Experience</a><a href="#toolkit">Toolkit</a><a href={resumeUrl} target="_blank" rel="noreferrer">Résumé <ArrowUpRight className="external-arrow" weight="regular" aria-hidden="true" /></a></nav>
              <div className="footer-bottom"><small>© 2026 Bao Tran. Built with curiosity and too many tabs.</small><a href="#top">Back to top ↑</a></div>
            </footer>
          </section>
        </main>
      </div>
    </div>
  );
}
