import { startTransition, useDeferredValue, useState } from "react";
import MetallicPaint from "./components/MetallicPaint";
import logo from "./assets/metallic-mark.svg";

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

function App() {
  const [activeFilter, setActiveFilter] = useState("all");
  const deferredFilter = useDeferredValue(activeFilter);
  const baseUrl = import.meta.env.BASE_URL;
  const year = new Date().getFullYear();

  const visibleUnits = unitCatalog.filter((unit) => {
    if (deferredFilter === "all") {
      return true;
    }
    return unit.tags.includes(deferredFilter);
  });

  const withBase = (path) => `${baseUrl}${path}`;

  return (
    <div className="app-shell">
      <div className="atmosphere" aria-hidden="true" />
      <header className="topbar">
        <p className="brand">Arnav SAT Math</p>
        <nav>
          <a href="#program">Program</a>
          <a href="#resources">Resources</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn ghost" href="mailto:hello@arnavsatmath.com">
          Book Session
        </a>
      </header>

      <main>
        <section className="hero">
          <div>
            <p className="eyebrow">React + Animated Brand Experience</p>
            <h1>Premium SAT Math Tutoring With a Fast, Modern Learning System.</h1>
            <p className="lead">
              We built this frontend in React and centered it around your preferred MetallicPaint animation.
              The curriculum is organized by SAT units so you can publish lessons, drills, and timed sets at
              scale.
            </p>
            <div className="hero-actions">
              <a className="btn" href="#resources">
                Explore Unit Hub
              </a>
              <a className="btn secondary" href="mailto:hello@arnavsatmath.com">
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

          <div className="paint-frame" aria-label="Metallic animated logo">
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

        <section id="program" className="section">
          <h2>How The Program Works</h2>
          <div className="cards three">
            <article className="card">
              <h3>Diagnostic Blueprint</h3>
              <p>
                We score a baseline test, classify misses, and map a week-by-week build plan around your test
                date.
              </p>
            </article>
            <article className="card">
              <h3>Focused Unit Sprints</h3>
              <p>
                Lessons and drill banks are grouped by SAT domain so every practice block has a clear objective.
              </p>
            </article>
            <article className="card">
              <h3>Performance Conditioning</h3>
              <p>
                Timed sets and error logs train pacing, confidence, and question selection for test day.
              </p>
            </article>
          </div>
        </section>

        <section id="resources" className="section">
          <div className="section-head">
            <h2>Unit Resource Hub</h2>
            <p>
              Filter by resource type, then open each unit template and start publishing your own lesson packs.
            </p>
          </div>

          <div className="chip-row" role="tablist" aria-label="Unit resource filters">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={`chip ${activeFilter === filter.id ? "active" : ""}`}
                onClick={() => {
                  startTransition(() => setActiveFilter(filter.id));
                }}
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

        <section className="section">
          <h2>Starter Templates</h2>
          <div className="cards two">
            <article className="card">
              <h3>Weekly Study Planner</h3>
              <p>Plan each day, set timing targets, and keep week-over-week momentum visible.</p>
              <a className="btn secondary" href={withBase("templates/study-planner-template.md")}>
                Download Planner
              </a>
            </article>
            <article className="card">
              <h3>Error Log</h3>
              <p>Track recurring mistakes and convert them into concrete “never miss this again” rules.</p>
              <a className="btn secondary" href={withBase("templates/error-log-template.md")}>
                Download Error Log
              </a>
            </article>
          </div>
        </section>

        <section id="contact" className="section cta">
          <h2>Ready To Launch This Brand?</h2>
          <p>
            Next step: plug in your real email, booking link, and first worksheet PDFs. Then we can wire
            analytics and a lead capture form.
          </p>
          <a className="btn" href="mailto:hello@arnavsatmath.com?subject=SAT%20Math%20Tutoring%20Inquiry">
            Contact Arnav
          </a>
        </section>
      </main>

      <footer>
        <p>{year} Arnav SAT Math. Built in React.</p>
      </footer>
    </div>
  );
}

export default App;
