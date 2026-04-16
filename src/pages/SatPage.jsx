import { startTransition, useDeferredValue, useState } from "react";
import FloatingLines from "../components/FloatingLines";
import MetallicPaint from "../components/MetallicPaint";
import logo from "../assets/metallic-mark.svg";

const unitCatalog = [
  {
    title: "Heart of Algebra",
    focus: "Linear equations, systems, and real-world modeling.",
    tags: ["lesson", "drill", "strategy"],
    assets: ["Guided Lesson Decks", "Progressive Drill Sets", "Error Pattern Debrief"],
    unitPlanPath: "unit-plans/heart-of-algebra.md"
  },
  {
    title: "Problem Solving & Data Analysis",
    focus: "Ratios, percentages, table/graph interpretation, and probability.",
    tags: ["lesson", "drill", "timed"],
    assets: ["Data Reasoning Labs", "Calculator Tactics", "Timed Mixed Sets"],
    unitPlanPath: "unit-plans/problem-solving-and-data-analysis.md"
  },
  {
    title: "Passport to Advanced Math",
    focus: "Quadratics, exponents, nonlinear structures, and function fluency.",
    tags: ["lesson", "drill", "timed", "strategy"],
    assets: ["Concept Builder Notes", "Challenge Sets", "Advanced Timing Reps"],
    unitPlanPath: "unit-plans/passport-to-advanced-math.md"
  },
  {
    title: "Geometry & Trigonometry",
    focus: "Triangles, circles, coordinate geometry, and trig essentials.",
    tags: ["lesson", "drill", "strategy"],
    assets: ["Diagram Playbooks", "Formula Trigger Sheets", "Geometry Sprint Set"],
    unitPlanPath: "unit-plans/geometry-and-trigonometry.md"
  }
];

const filters = [
  { id: "all", label: "All" },
  { id: "lesson", label: "Lessons" },
  { id: "drill", label: "Drills" },
  { id: "timed", label: "Timed Sets" },
  { id: "strategy", label: "Strategy" }
];

const satWaveGradient = ["#74f4d4", "#60c3ff", "#ff9869", "#9f7bff"];

export default function SatPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const deferredFilter = useDeferredValue(activeFilter);
  const baseUrl = import.meta.env.BASE_URL;

  const visibleUnits = unitCatalog.filter((unit) => {
    if (deferredFilter === "all") {
      return true;
    }
    return unit.tags.includes(deferredFilter);
  });

  const withBase = (path) => `${baseUrl}${path}`;

  return (
    <>
      <div className="background-stack" aria-hidden="true">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={[10, 15, 20]}
          lineDistance={[8, 6, 4]}
          bendRadius={5}
          bendStrength={-0.5}
          interactive={false}
          parallax={false}
          linesGradient={satWaveGradient}
          mixBlendMode="screen"
        />
        <div className="atmosphere sat-atmosphere" />
      </div>

      <main className="page page-sat">
        <section className="hero">
          <div>
            <p className="eyebrow">SAT Math Project</p>
            <h1>Premium SAT Math Tutoring With a Fast, Modern Learning System.</h1>
            <p className="lead">
              Personalized SAT math prep with unit-based resources, timed drills, and strategic feedback
              loops.
            </p>
            <div className="hero-actions">
              <a className="btn" href="#sat-resources">
                Explore Unit Hub
              </a>
              <a className="btn secondary" href="mailto:hello@arnavbha.com">
                Start Diagnostic
              </a>
            </div>
            <div className="stats">
              <article>
                <h2>4</h2>
                <p>SAT Math unit tracks</p>
              </article>
              <article>
                <h2>1:1</h2>
                <p>Coaching and strategy sessions</p>
              </article>
              <article>
                <h2>Weekly</h2>
                <p>Progress loops and timed checkpoints</p>
              </article>
            </div>
          </div>

          <div className="paint-frame" aria-label="SAT Math animated logo">
            <MetallicPaint
              imageSrc={logo}
              seed={42}
              scale={4}
              patternSharpness={1}
              noiseScale={0.5}
              speed={0.3}
              liquid={0.75}
              mouseAnimation={false}
              brightness={2}
              contrast={0.5}
              refraction={0.01}
              blur={0.015}
              chromaticSpread={2}
              fresnel={1}
              angle={0}
              waveAmplitude={1}
              distortion={1}
              contour={0.2}
              lightColor="#ffffff"
              darkColor="#000000"
              tintColor="#8ef4d4"
            />
          </div>
        </section>

        <section className="section">
          <h2>How The Program Works</h2>
          <div className="cards three">
            <article className="card">
              <h3>Diagnostic Blueprint</h3>
              <p>
                Baseline scoring, miss-pattern analysis, and a clear study map built around target test
                dates.
              </p>
            </article>
            <article className="card">
              <h3>Focused Unit Sprints</h3>
              <p>
                Lessons and drills are grouped by SAT domains to make each study block specific and
                efficient.
              </p>
            </article>
            <article className="card">
              <h3>Performance Conditioning</h3>
              <p>
                Timed sets and error logs train pacing, confidence, and execution under pressure.
              </p>
            </article>
          </div>
        </section>

        <section id="sat-resources" className="section">
          <div className="section-head">
            <h2>Unit Resource Hub</h2>
            <p>
              Filter by resource type, then open each unit template to publish lesson packs, drills, and
              timed sets.
            </p>
          </div>

          <div className="chip-row" role="tablist" aria-label="SAT resource filters">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={`chip ${activeFilter === filter.id ? "active" : ""}`}
                onClick={() => startTransition(() => setActiveFilter(filter.id))}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="cards two">
            {visibleUnits.map((unit) => (
              <article key={unit.title} className="card unit-card">
                <p className="unit-tags">{unit.tags.join(" • ")}</p>
                <h3>{unit.title}</h3>
                <p>{unit.focus}</p>
                <ul>
                  {unit.assets.map((asset) => (
                    <li key={asset}>{asset}</li>
                  ))}
                </ul>
                <a className="btn secondary" href={withBase(unit.unitPlanPath)}>
                  Open Unit Blueprint
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
