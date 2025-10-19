import Image from "next/image";
import NavBar from "@/components/NavBar";
import Timeline from "@/components/Timeline";
import TechPill from "@/components/TechPill";
import site from "@/content/site.json";
import skills from "@/content/skills.json";
import projects from "@/content/projects.json";
import timeline from "@/content/timeline.json";
import "./page.module.css";

export default function Home() {
  return (
    <main>
      <NavBar />

      <section id="about" className="container">
        <div className="hero-wrap">
          <div className="hero">
            <span className="badge">{site.tagline}</span>
            <h1>{site.name}</h1>
            <p className="hero-sub">{site.punchline}</p>
            <p className="hero-sub">{site.about}</p>
            <div style={{display:"flex", gap:12, flexWrap:"wrap"}}>
              <a className="btn" href="#projects">View Projects</a>
              <a className="btn" href="#contact" style={{background:'linear-gradient(90deg,#1f2937,#374151)'}}>Contact</a>
            </div>
          </div>
          <div className="avatar card">
            <Image src={site.profileImage || "/profile-placeholder.png"} alt="Profile" width={400} height={400} />
          </div>
        </div>
      </section>

      <section id="timeline" className="container">
        <h2 className="section-title">Timeline</h2>
        <div className="card">
          <Timeline items={timeline} />
        </div>
      </section>

      <section id="projects" className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid grid-3">
          {projects.filter((p:any) => p.featured).map((p:any, i:number) => (
            <div className="card" key={i}>
              <h3 style={{marginTop:0}}>{p.name}</h3>
              <p style={{color:"var(--muted)"}}>{p.tagline}</p>
              <ul style={{marginLeft:18}}>
                {p.highlights.map((h:string, idx:number) => <li key={idx}>{h}</li>)}
              </ul>
              <div className="tech-row">
                {p.tech.map((t:string, j:number) => <TechPill key={j} name={t} />)}
              </div>
              <div style={{display:"flex", gap:12, marginTop:12, flexWrap:"wrap"}}>
                {p.links?.github ? <a className="btn" href={p.links.github} target="_blank">GitHub</a> : null}
                {p.links?.live ? <a className="btn" href={p.links.live} target="_blank">Live</a> : null}
                {p.period ? <span className="badge">{p.period}</span> : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="all-projects" className="container">
        <h2 className="section-title">All Projects</h2>
        <div className="grid grid-3">
          {projects.map((p:any, i:number) => (
            <div className="card" key={i}>
              <h3 style={{marginTop:0}}>{p.name}</h3>
              <p style={{color:"var(--muted)"}}>{p.tagline}</p>
              <ul style={{marginLeft:18}}>
                {p.highlights.slice(0,3).map((h:string, idx:number) => <li key={idx}>{h}</li>)}
              </ul>
              <div className="tech-row">
                {p.tech.map((t:string, j:number) => <TechPill key={j} name={t} />)}
              </div>
              <div style={{display:"flex", gap:12, marginTop:12, flexWrap:"wrap"}}>
                {p.links?.github ? <a className="btn" href={p.links.github} target="_blank">GitHub</a> : null}
                {p.links?.live ? <a className="btn" href={p.links.live} target="_blank">Live</a> : null}
                {p.period ? <span className="badge">{p.period}</span> : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="container">
        <h2 className="section-title">Tech Stack</h2>
        <div className="card">
          <div className="tech-row">
            {skills.map((s:any, i:number) => (
              <span key={i} className="tech-pill">
                {s.icon ? <Image src={s.icon} alt={s.name} width={18} height={18} /> : null}
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="container">
        <h2 className="section-title">Contact</h2>
        <div className="card">
          <p>Want to collaborate or discuss an idea? Ping me.</p>
          <div style={{display:"flex", gap:12, flexWrap:"wrap"}}>
            {site.social?.github ? <a className="btn" href={site.social.github} target="_blank">GitHub</a> : null}
            {site.social?.linkedin ? <a className="btn" href={site.social.linkedin} target="_blank">LinkedIn</a> : null}
            {site.email ? <a className="btn" href={`mailto:${site.email}`}>Email</a> : null}
          </div>
        </div>
      </section>

      <footer className="footer container">
        © {new Date().getFullYear()} {site.name}. Built with Next.js · Deployed on Vercel.
      </footer>
    </main>
  );
}
