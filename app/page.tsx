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
    number: "01",
    title: "Orchestrator Studio",
    label: "Multi agent dev tool",
    question: "Can one developer direct a small team of agents without losing the thread?",
    description: "Describe a feature once, fan it into parallel coding worktrees, and merge working commits back in dependency order.",
    result: "One brief can become parallel workstreams and return as dependency ordered commits on a shared branch.",
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
    description: "Dual sided agent workflows that batch applications for candidates and create ATS ready evidence packets for recruiters.",
    result: "The experiment produced candidate application batches and ATS ready recruiter packets through one connected workflow.",
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
    result: "Semantic review, voting, and audit history can support moderators while keeping the final decision human.",
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
    result: "Live prices, two order types, portfolio tracking, and AI support now live inside one coherent trading flow.",
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
    result: "Opportunities can be ranked by trajectory, skills, and context instead of keyword overlap alone.",
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
    result: "Three research paths converge into one explanation while keeping the supporting sources visible.",
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
    description: "Designed more than five agent systems, API integrations, and data enrichment pipelines for a logistics startup. Automating internal work and supporting GTM operations.",
  },
  {
    company: "Ellucian",
    context: "AI platform",
    role: "Software Engineer Intern",
    date: "May 2026 to now",
    href: "https://www.ellucian.com/",
    description: "Contributing to internal AI platform initiatives across token usage, systems architecture, and AWS deployment, with a focus on reliable production engineering.",
  },
  {
    company: "Todd",
    context: "Agtech",
    role: "Software Engineer Extern",
    date: "Jun 2026 to now",
    href: "https://toddagriscience.com/en",
    description: "Building AI powered agtech software across product engineering, farm management workflows, and internal tools using Next.js, TypeScript, Supabase, Drizzle, and PostgreSQL.",
  },
  {
    company: "Deepiri",
    context: "AI research",
    role: "Founding Engineer",
    date: "Feb 2026 to now",
    href: "https://deepiri.com",
    description: "Built AI features, ML pipelines, and RAG systems for a research collective with more than 35 developers. Supporting more than 100 internal users and improving research efficiency by 40 percent.",
  },
  {
    company: "Handshake",
    context: "LLM evals",
    role: "Software Engineer Fellow",
    date: "May to Jun 2026",
    href: "https://joinhandshake.com/ai/opportunities",
    description: "Developed golden solutions and adversarial test cases for difficult software engineering tasks, with reliable judging criteria for benchmarking AI coding systems.",
  },
];

const toolGroups = [
  { name: "Languages", tools: ["Python", "Java", "TypeScript", "SQL", "Bash"] },
  { name: "Product", tools: ["React", "Next.js", "FastAPI", "Node.js", "Tailwind"] },
  { name: "Systems", tools: ["AWS", "Docker", "PostgreSQL", "Firebase", "Git"] },
  { name: "AI", tools: ["LLMs", "Agents", "RAG", "Automation", "Evaluation"] },
];

const ribbonWords = ["notice", "ask", "sketch", "build", "break", "listen", "rebuild", "ship"];

function ProjectStudy({ type }: { type: string }) {
  if (type === "orchestrator") {
    return (
      <div className="study study-orchestrator" aria-hidden="true">
        <div className="study-note">one brief</div>
        <div className="agent-line"><span>plan</span><span>api</span><span>ui</span><span>test</span></div>
        <div className="merge-line"><i /><i /><i /><i /></div>
        <div className="study-result">working branch <b>✓</b></div>
      </div>
    );
  }
  if (type === "hire") {
    return (
      <div className="study study-hire" aria-hidden="true">
        <div className="hire-side"><i>candidate</i><b>18 roles</b><span>agent prepared</span></div>
        <div className="hire-pulse">AI<br />↔</div>
        <div className="hire-side"><i>recruiter</i><b>6 matches</b><span>evidence ready</span></div>
      </div>
    );
  }
  if (type === "guard") {
    return (
      <div className="study study-guard" aria-hidden="true">
        <div className="comment-card"><span>r/developers</span><b>“You keep posting this link.”</b></div>
        <div className="risk-scale"><i /><strong>risk 0.84</strong></div>
        <div className="human-stamp">human review</div>
      </div>
    );
  }
  if (type === "market") {
    return (
      <div className="study study-market" aria-hidden="true">
        <div className="market-value"><span>BTC / USD</span><b>$ 67,842</b><i>+ 2.8%</i></div>
        <div className="market-bars">{[3, 6, 4, 8, 5, 9, 7, 11, 8, 13, 12, 15].map((height, index) => <i style={{ height: `${height * 4}px` }} key={index} />)}</div>
        <div className="market-order">market order sent ↗</div>
      </div>
    );
  }
  if (type === "social") {
    return (
      <div className="study study-social" aria-hidden="true">
        <div className="vibe-orbit"><span>listen</span><span>notice</span><span>respond</span><b>you</b></div>
        <div className="mission-slip">mission 04<br /><strong>start the conversation</strong></div>
      </div>
    );
  }
  if (type === "path") {
    return (
      <div className="study study-path" aria-hidden="true">
        <div className="path-start">resume</div><i /><div className="path-step">skills</div><i /><div className="path-step">context</div><i /><div className="path-end">best fit<br /><b>92%</b></div>
      </div>
    );
  }
  return (
    <div className="study study-research" aria-hidden="true">
      <div className="source-stack"><span>wiki</span><span>web</span><span>gpt</span></div>
      <div className="source-merge"><i /><i /><i /></div>
      <div className="answer-page"><small>sourced answer</small><b>One useful explanation.</b><span>[1] [2] [3]</span></div>
    </div>
  );
}

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeProject, setActiveProject] = useState(0);
  const [activeExperience, setActiveExperience] = useState(0);
  const [copied, setCopied] = useState(false);
  const siteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initialTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    const frame = window.requestAnimationFrame(() => setTheme(initialTheme));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const intro = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.08 });
        intro
          .from(".hero-edition", { autoAlpha: 0, scale: 0.72, rotate: -16, duration: 0.7 })
          .from(".hero-statement .field-kicker", { autoAlpha: 0, y: 18, duration: 0.45 }, "-=0.35")
          .from(".hero-statement h1", { autoAlpha: 0, y: 70, rotate: 1.5, duration: 0.9 }, "-=0.22")
          .from(".hero-lede", { autoAlpha: 0, y: 28, duration: 0.58 }, "-=0.48")
          .from(".hero-actions a", { autoAlpha: 0, y: 18, stagger: 0.08, duration: 0.4 }, "-=0.32")
          .from(".field-portrait", { autoAlpha: 0, x: 70, rotate: 6, scale: 0.9, duration: 0.92 }, "-=0.92")
          .from(".thought-ribbon", { autoAlpha: 0, yPercent: 120, rotate: 2, duration: 0.65 }, "-=0.38");

        const revealGroups = [
          ".field-note > *",
          ".field-section-head > *",
          ".specimen-browser",
          ".logbook",
          ".personal-field > *",
          ".next-field > *",
          ".field-contact > *",
        ];

        revealGroups.forEach((selector) => {
          gsap.utils.toArray<HTMLElement>(selector).forEach((element, index) => {
            gsap.from(element, {
              autoAlpha: 0,
              y: 48,
              rotate: index % 2 ? 0.7 : -0.7,
              duration: 0.75,
              delay: Math.min(index * 0.07, 0.22),
              ease: "power3.out",
              scrollTrigger: { trigger: element, start: "top 90%", once: true },
            });
          });
        });

        gsap.from(".tool-notes article", {
          autoAlpha: 0,
          y: 80,
          rotate: 5,
          stagger: 0.12,
          duration: 0.78,
          ease: "back.out(1.15)",
          scrollTrigger: { trigger: ".tool-notes", start: "top 86%", once: true },
        });

        gsap.to(".field-portrait", {
          y: -55,
          rotate: -1.25,
          ease: "none",
          scrollTrigger: { trigger: ".field-hero", start: "top top", end: "bottom top", scrub: 0.8 },
        });

        gsap.to(".hero-edition", {
          y: 38,
          rotate: 4,
          ease: "none",
          scrollTrigger: { trigger: ".field-hero", start: "top top", end: "bottom top", scrub: 1 },
        });

        gsap.utils.toArray<HTMLElement>(".note-stamp, .personal-index, .next-marker").forEach((stamp) => {
          gsap.to(stamp, {
            rotate: "+=22",
            ease: "none",
            scrollTrigger: { trigger: stamp, start: "top bottom", end: "bottom top", scrub: 1.2 },
          });
        });
      });

      media.add("(min-width: 761px) and (hover: hover) and (prefers-reduced-motion: no-preference)", () => {
        const hero = siteRef.current?.querySelector<HTMLElement>(".field-hero");
        const photo = siteRef.current?.querySelector<HTMLElement>(".field-photo");
        if (!hero || !photo) return;

        const moveX = gsap.quickTo(photo, "rotationY", { duration: 0.55, ease: "power3.out" });
        const moveY = gsap.quickTo(photo, "rotationX", { duration: 0.55, ease: "power3.out" });

        const onPointerMove = (event: PointerEvent) => {
          const bounds = hero.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / bounds.width - 0.5;
          const y = (event.clientY - bounds.top) / bounds.height - 0.5;
          moveX(x * 7);
          moveY(y * -6);
        };
        const resetPortrait = () => {
          moveX(0);
          moveY(0);
        };

        hero.addEventListener("pointermove", onPointerMove);
        hero.addEventListener("pointerleave", resetPortrait);
        return () => {
          hero.removeEventListener("pointermove", onPointerMove);
          hero.removeEventListener("pointerleave", resetPortrait);
        };
      });
    }, siteRef);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
    setTheme(nextTheme);
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText("baotran.swe@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  const project = projects[activeProject];
  const experience = experiences[activeExperience];

  return (
    <div className="field-site" ref={siteRef}>
      <header className="field-header">
        <a className="field-brand" href="#top" aria-label="Bao Tran, back to top">
          <strong>Bao Tran</strong>
          <span>field guide / edition 2026</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">projects</a>
          <a href="#experience">experience</a>
          <a href="#toolkit">toolkit</a>
        </nav>
        <div className="header-actions">
          <button type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
            {theme === "dark" ? "day" : "night"}<i aria-hidden="true" />
          </button>
          <a href={resumeUrl} target="_blank" rel="noreferrer">résumé ↗</a>
        </div>
      </header>

      <main>
        <section className="field-hero" id="top">
          <div className="hero-edition">
            <span>FG 001</span>
            <p>software engineer<br />AI builder<br />CS at GMU</p>
          </div>
          <div className="hero-statement">
            <p className="field-kicker">Working notes from Washington DC</p>
            <h1>Things I build because I need to know if they can <span>work.</span></h1>
            <p className="hero-lede">I am Bao. I follow the annoying little problems that other people learn to live with, then turn them into systems someone can actually use.</p>
            <div className="hero-actions">
              <a href="#work">open the field guide ↓</a>
              <a href={githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>
          <figure className="field-portrait">
            <div className="photo-corner corner-one" /><div className="photo-corner corner-two" />
            <div className="field-photo">
              <Image src="/bao-tran-photo-original.png" alt="Portrait of Bao Tran" fill sizes="(max-width: 760px) 82vw, 32vw" priority unoptimized />
            </div>
            <figcaption><b>researcher 001</b><span>Bao Tran</span><small>available Fall 2026</small></figcaption>
          </figure>
          <div className="thought-ribbon" aria-label="Bao's build process">
            <div className="ribbon-track">
              {[0, 1].map((copy) => (
                <div className="ribbon-group" aria-hidden={copy === 1} key={copy}>
                  {ribbonWords.map((word, index) => <span key={word}>{word}<i>{index % 2 ? "↗" : "●"}</i></span>)}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="field-note" aria-labelledby="note-title">
          <div className="note-stamp">NOTE<br />00</div>
          <div>
            <p className="field-kicker">A note before the projects</p>
            <h2 id="note-title">I am less interested in making AI look magical than making it <span>dependable.</span></h2>
          </div>
          <p>My favorite work sits between a strange idea and a real constraint. That is where prototypes become products, and where I learn the most.</p>
        </section>

        <section className="project-field" id="work" aria-labelledby="projects-title">
          <div className="field-section-head">
            <span className="section-number">01</span>
            <div><p className="field-kicker">Project specimens</p><h2 id="projects-title">Seven working answers</h2></div>
            <p>Choose a question from the index. The plate shows what I built to answer it.</p>
          </div>

          <div className="specimen-browser">
            <div className="specimen-index" role="tablist" aria-label="Projects">
              {projects.map((item, index) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeProject === index}
                  aria-controls="project-specimen"
                  className={activeProject === index ? "active" : ""}
                  onClick={() => setActiveProject(index)}
                  key={item.title}
                >
                  <span>{item.number}</span><strong>{item.title}</strong><i>{activeProject === index ? "viewing" : "+"}</i>
                </button>
              ))}
            </div>

            <article className={`specimen-sheet specimen-${project.visual}`} id="project-specimen" role="tabpanel" key={project.title}>
              <div className="specimen-topline"><span>SPECIMEN {project.number}</span><span>{project.status}</span></div>
              <div className="study-frame">
                <span className="study-code">BT / {project.number} / 26</span>
                <ProjectStudy type={project.visual} key={project.visual} />
                <span className="scale-mark">not to scale</span>
              </div>
              <div className="specimen-copy">
                <div><p>{project.label}</p><h3>{project.title}</h3></div>
                <div><strong>{project.question}</strong><p>{project.description}</p></div>
              </div>
              <div className="proof-strip">
                <span>what it proved</span>
                <p>{project.result}</p>
              </div>
              <div className="specimen-footer">
                <span>{project.tech.join(" / ")}</span>
                <a href={project.href} target="_blank" rel="noreferrer">open project ↗</a>
              </div>
            </article>
          </div>
        </section>

        <section className="experience-field" id="experience" aria-labelledby="experience-title">
          <div className="field-section-head light-head">
            <span className="section-number">02</span>
            <div><p className="field-kicker">Practice log</p><h2 id="experience-title">Where the work met reality</h2></div>
            <p>Teams, users, deadlines, and the useful pressure of production constraints.</p>
          </div>
          <div className="logbook-shell">
            <div className="logbook">
              <div className="log-tabs" role="tablist" aria-label="Experience">
                {experiences.map((item, index) => (
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeExperience === index}
                  aria-controls="experience-entry"
                  className={activeExperience === index ? "active" : ""}
                  onClick={() => setActiveExperience(index)}
                    key={item.company}
                  >
                    <span>0{index + 1}</span><strong>{item.company}</strong><small>{item.role}</small>
                  </button>
                ))}
              </div>
              <article className="log-entry" id="experience-entry" role="tabpanel" key={experience.company}>
                <div className="log-meta"><span>{experience.context}</span><span>{experience.date}</span></div>
                <p className="log-label">entry 0{activeExperience + 1}</p>
                <h3>{experience.role}<br />at {experience.company}</h3>
                <p>{experience.description}</p>
                <a href={experience.href} target="_blank" rel="noreferrer">visit {experience.company} ↗</a>
              </article>
            </div>
          </div>
        </section>

        <section className="tool-field" id="toolkit" aria-labelledby="toolkit-title">
          <div className="field-section-head">
            <span className="section-number">03</span>
            <div><p className="field-kicker">Contents of the bag</p><h2 id="toolkit-title">The tools I reach for</h2></div>
            <p>The stack changes. The habit of choosing deliberately does not.</p>
          </div>
          <div className="tool-notes">
            {toolGroups.map((group, index) => (
              <article key={group.name}>
                <span>0{index + 1}</span><h3>{group.name}</h3><p>{group.tools.join(" · ")}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="personal-field" aria-labelledby="personal-title">
          <div className="personal-index">FIELD<br />NOTE<br />04</div>
          <div className="personal-copy">
            <p className="field-kicker">Away from the keyboard</p>
            <h2 id="personal-title">Not every curious thought needs to become a product.</h2>
            <p>
              I am still a student, still learning, and still deciding what kind of engineer I want to become. Away from a project, I value thoughtful conversations, unfamiliar perspectives, and curiosity with no deadline attached.
            </p>
          </div>
          <aside>
            <span>Based in Washington DC</span>
            <span>Studying CS at George Mason</span>
            <span>Always asking one more question</span>
          </aside>
        </section>

        <section className="next-field" aria-labelledby="next-title">
          <div className="next-marker">NEXT<br />FIELD<br />TRIP</div>
          <div>
            <p className="field-kicker">Current question</p>
            <h2 id="next-title">What should agents do after “hello world”?</h2>
            <p>I am exploring agent observability, human judgment in automated workflows, developer tools, and AI native interfaces.</p>
          </div>
          <aside><i />Looking for Fall 2026 and Summer 2027 software engineering opportunities.</aside>
        </section>

        <section className="field-contact" id="contact" aria-labelledby="contact-title">
          <p className="field-kicker">Leave a note in the margin</p>
          <h2 id="contact-title">Have a hard problem?<br />I want to hear it.</h2>
          <div>
            <a href={emailUrl}>baotran.swe@gmail.com ↗</a>
            <button type="button" onClick={copyEmail} aria-live="polite">{copied ? "email copied" : "copy email"}</button>
          </div>
        </section>
      </main>

      <footer className="field-footer">
        <div><strong>Bao Tran</strong><span>software engineer / Washington DC</span></div>
        <p>follow the question until it becomes useful</p>
        <div><a href={githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a><a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
      </footer>
    </div>
  );
}
