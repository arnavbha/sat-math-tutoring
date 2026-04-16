import { HashRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";
import PersonalPage from "./pages/PersonalPage";
import SatPage from "./pages/SatPage";

function AppShell() {
  const year = new Date().getFullYear();

  return (
    <div className="app-shell">
      <header className="topbar">
        <NavLink className="brand" to="/">
          Arnav Bhatia
        </NavLink>
        <nav className="global-nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "is-active" : "")}>
            Home
          </NavLink>
          <NavLink to="/sat" className={({ isActive }) => (isActive ? "is-active" : "")}>
            SAT Math
          </NavLink>
          <a href="mailto:hello@arnavbha.com">Contact</a>
        </nav>
        <a className="btn ghost" href="mailto:hello@arnavbha.com">
          Let&apos;s Connect
        </a>
      </header>

      <Routes>
        <Route path="/" element={<PersonalPage />} />
        <Route path="/sat" element={<SatPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <footer className="global-footer">
        <p>{year} Arnav Bhatia. Built with React + React Bits effects.</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppShell />
    </HashRouter>
  );
}
