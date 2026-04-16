import { Link } from "react-router-dom";
import Aurora from "../components/Aurora";
import GlareHover from "../components/GlareHover";
import SpotlightCard from "../components/SpotlightCard";

const personalStops = ["#ff253a", "#ff5d3a", "#b3001e"];

const profileCards = [
  {
    title: "Frontend Engineering",
    text: "I build React interfaces with motion, visual systems, and strong product storytelling."
  },
  {
    title: "Creative Direction",
    text: "I obsess over typography, contrast, interaction detail, and identity-driven layouts."
  },
  {
    title: "Education Products",
    text: "I design learning systems that are structured, practical, and easy to scale over time."
  }
];

export default function PersonalPage() {
  return (
    <>
      <div className="background-stack" aria-hidden="true">
        <Aurora colorStops={personalStops} amplitude={1.05} blend={0.45} speed={0.8} />
        <div className="atmosphere personal-atmosphere" />
      </div>

      <main className="page page-personal">
        <section className="hero personal-hero">
          <div>
            <p className="eyebrow personal-eyebrow">Personal Main Page</p>
            <h1>Arnav Bhatia</h1>
            <p className="lead">
              I build bold digital experiences at the intersection of design, code, and education.
              This is my main site, and SAT Math is one of my focused projects.
            </p>
            <div className="hero-actions">
              <a className="btn personal-btn" href="mailto:hello@arnavbha.com">
                Contact Me
              </a>
              <Link className="btn secondary" to="/sat">
                Open SAT Math Page
              </Link>
            </div>
          </div>

          <GlareHover
            width="100%"
            height="100%"
            background="linear-gradient(160deg, rgba(255,40,63,0.14), rgba(70,8,16,0.82))"
            borderRadius="1.25rem"
            borderColor="rgba(255,130,140,0.45)"
            glareColor="#ffd2d8"
            glareOpacity={0.4}
            glareSize={280}
            className="personal-glare"
          >
            <div className="personal-highlight">
              <p className="eyebrow">Current Focus</p>
              <h2>High-impact React projects with strong motion and visual presence.</h2>
              <p>
                Powered by React Bits components: Aurora, GlareHover, and SpotlightCard.
              </p>
            </div>
          </GlareHover>
        </section>

        <section className="section">
          <h2>What I Build</h2>
          <div className="cards three">
            {profileCards.map((card) => (
              <SpotlightCard
                key={card.title}
                className="personal-card"
                spotlightColor="rgba(255, 66, 85, 0.28)"
              >
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </SpotlightCard>
            ))}
          </div>
        </section>

        <section className="section personal-cta">
          <h2>Build Something Distinct</h2>
          <p>
            If you want a site or product experience that feels sharp, modern, and unmistakably yours,
            let&apos;s make it.
          </p>
          <a className="btn personal-btn" href="mailto:hello@arnavbha.com?subject=Project%20Inquiry">
            Start A Project
          </a>
        </section>
      </main>
    </>
  );
}
