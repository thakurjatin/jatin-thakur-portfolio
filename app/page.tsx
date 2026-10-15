'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown, Code2, Database, Download, ExternalLink, Github, Linkedin, Mail, Menu, ShieldCheck, X, Cloud, Layers3, TerminalSquare } from 'lucide-react';
import { certifications, experience, personalProjects, profile, projects, skillGroups } from '@/data/portfolio';

const navItems = [
  ['About', '#about'], ['Experience', '#experience'], ['Skills', '#skills'], ['Projects', '#projects'], ['Contact', '#contact'],
] as const;

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const sections = ['top', ...navItems.map((item) => item[1].slice(1)), 'certifications'];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.2, 0.5] });
    sections.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selectedProject !== null) {
      const oldOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setSelectedProject(null); };
      window.addEventListener('keydown', onKey);
      return () => { document.body.style.overflow = oldOverflow; window.removeEventListener('keydown', onKey); };
    }
  }, [selectedProject]);

  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
    catch { window.location.href = `mailto:${profile.email}`; }
  };

  return (
    <main id="top">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Jatin Thakur, home"><span className="brand-mark">JT<span>.</span></span><span className="brand-name">Jatin Thakur</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, href]) => <a key={href} className={activeSection === href.slice(1) ? 'nav-link active' : 'nav-link'} href={href}>{label}</a>)}
        </nav>
        <a className="header-cta" href={profile.resumePath} download><Download size={15} /> Resume</a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>
      <AnimatePresence>
        {menuOpen && <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} aria-label="Mobile navigation">
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={16} /></a>)}
          <a href={profile.resumePath} download onClick={() => setMenuOpen(false)}>Download resume <Download size={16} /></a>
        </motion.nav>}
      </AnimatePresence>

      <section className="hero section-shell" aria-labelledby="hero-title">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: 'easeOut' }}>
          <div className="eyebrow"><span className="status-dot" /> {profile.openToOpportunities ? 'OPEN TO OPPORTUNITIES' : 'SOFTWARE ENGINEERING'} · DELHI, INDIA</div>
          <h1 id="hero-title">Senior backend engineer<br />for regulated<br /><span>banking platforms.</span></h1>
          <p className="hero-intro">I’m <strong>Jatin Thakur</strong>, a Senior Software Engineer with 7+ years owning backend systems end to end, from design and APIs to deployment and production support. I work in Java, Spring Boot, Kafka, microservices, and AWS, and I’m an <strong>AWS Certified Solutions Architect – Associate</strong>.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17} /></a>
            <a className="button button-secondary" href={profile.resumePath} download><Download size={16} /> Download resume</a>
          </div>
          <div className="hero-socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} /></a>
            {profile.github && <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={13} /></a>}
            <button onClick={copyEmail} aria-label="Copy email address"><Mail size={16} /> {copied ? 'Email copied' : 'Email'} {copied ? <Check size={13} /> : <ArrowUpRight size={13} />}</button>
          </div>
        </motion.div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.12 }}>
          <div className="visual-topline"><span>ENGINEERING MINDSET</span><span className="visual-live"><i /> SYSTEMS THINKING</span></div>
          <div className="architecture">
            <div className="arch-node node-api"><div className="node-icon"><Code2 size={18} /></div><div><small>01 / INTERFACE</small><strong>REST APIs</strong><span>Contracts · Integration</span></div></div>
            <div className="connector"><span /></div>
            <div className="arch-node node-service"><div className="node-icon"><Layers3 size={18} /></div><div><small>02 / APPLICATION</small><strong>Backend services</strong><span>Java · Spring Boot</span></div></div>
            <div className="connector"><span /></div>
            <div className="arch-bottom">
              <div className="arch-node mini-node"><div className="node-icon"><Database size={17} /></div><div><small>03 / DATA</small><strong>SQL systems</strong></div></div>
              <div className="arch-node mini-node"><div className="node-icon"><Cloud size={17} /></div><div><small>04 / PLATFORM</small><strong>AWS · Docker</strong></div></div>
            </div>
          </div>
          <div className="visual-footer"><span><ShieldCheck size={14} /> Reliability-minded</span><span><TerminalSquare size={14} /> Built for maintainability</span></div>
          <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
        </motion.div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ChevronDown size={15} /></a>
      </section>

      <section className="highlights section-shell" aria-label="Career highlights">
        <div className="highlight"><span className="highlight-number">01</span><div><strong>7+ years</strong><p>Backend engineering, Java and Spring Boot</p></div></div>
        <div className="highlight"><span className="highlight-number">02</span><div><strong>Led Sybase → MSSQL</strong><p>Migration across multiple production applications</p></div></div>
        <div className="highlight"><span className="highlight-number">03</span><div><strong>AWS Certified</strong><p>Solutions Architect – Associate (2026)</p></div></div>
      </section>

      <section className="content-section section-shell" id="about">
        <SectionHeading index="01" eyebrow="A LITTLE ABOUT ME" title="Engineering with ownership." />
        <div className="about-grid">
          <p className="about-lead">I work across the software lifecycle — from understanding a problem and shaping a technical approach to delivering, operating, and improving the system.</p>
          <div className="about-detail"><p>My experience spans enterprise backend development, database modernization, secure service integration, cloud deployments, and production support. I enjoy making complex systems more dependable and easier to maintain.</p><p>Working in regulated financial environments has reinforced the importance of thoughtful engineering: clear interfaces, careful change management, reliable data, and pragmatic collaboration.</p><div className="about-meta"><div><span>BASED IN</span><strong>{profile.location}</strong></div><div><span>FOCUS</span><strong>Backend systems</strong></div><div><span>WORK STYLE</span><strong>Ownership · Reliability</strong></div></div></div>
        </div>
      </section>

      <section className="content-section section-shell" id="experience">
        <SectionHeading index="02" eyebrow="WHERE I’VE CONTRIBUTED" title="Experience, built over time." description="A selection of the work and engineering responsibilities that have shaped my approach." />
        <div className="experience-list">
          {experience.map((job, i) => <motion.article className="experience-card" key={job.company} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: i * 0.08 }}>
            <div className="experience-rail"><span className="rail-dot" /><span className="rail-line" /></div>
            <div className="experience-main"><div className="experience-top"><div><span className="period">{job.period}</span><h3>{job.role}</h3><div className="company-name">{job.company}</div></div><span className="experience-index">0{i + 1}</span></div><p className="experience-summary">{job.summary}</p><ul className="check-list">{job.highlights.map((item) => <li key={item}><span className="check-mark"><Check size={13} /></span>{item}</li>)}</ul><div className="tag-row">{job.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div>
          </motion.article>)}
        </div>
      </section>

      <section className="content-section section-shell" id="skills">
        <SectionHeading index="03" eyebrow="TOOLS OF THE TRADE" title="A practical engineering toolkit." description="Technologies and practices used across backend development, delivery, and support." />
        <div className="skills-grid">{skillGroups.map((group, i) => <motion.article className="skill-card" key={group.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: i * 0.06 }}><div className="skill-card-top"><span className="skill-index">0{i + 1}</span><ArrowUpRight size={16} /></div><h3>{group.title}</h3><div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div></motion.article>)}</div>
      </section>

      <section className="content-section section-shell projects-section" id="projects">
        <SectionHeading index="04" eyebrow="SELECTED ENGINEERING WORK" title="Problems worth solving." description="Case studies from professional work, generalized to protect employer confidentiality. Personal projects with public code are below." />
        <div className="projects-grid">{projects.map((project, i) => <motion.button className={`project-card ${i === 0 ? 'project-featured' : ''}`} key={project.number} onClick={() => setSelectedProject(i)} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: i * 0.07 }}>
          <div className="project-card-top"><span className="project-number">{project.number}</span><span className="project-type">{project.type}</span><span className="project-open"><ArrowUpRight size={18} /></span></div>
          <div className="project-art" aria-hidden="true">{i === 0 ? <MigrationGraphic /> : i === 1 ? <SurveillanceGraphic /> : i === 2 ? <IntegrationGraphic /> : <SearchGraphic />}</div>
          <h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div><span className="case-link">Read case study <ArrowRight size={15} /></span>
        </motion.button>)}</div>
        {personalProjects.length > 0 && <div className="personal-projects"><h3 className="personal-heading">Personal projects <span>(public code)</span></h3><div className="skills-grid">{personalProjects.map((project) => <article className="skill-card" key={project.title}><div className="skill-card-top"><span className="skill-index">CODE</span><Github size={16} /></div><h3>{project.title}</h3><p>{project.description}</p><div className="skill-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="contact-actions">{project.github && <a className="button button-secondary" href={project.github} target="_blank" rel="noreferrer"><Github size={15} /> View code <ArrowUpRight size={14} /></a>}{project.live && <a className="button button-primary" href={project.live} target="_blank" rel="noreferrer">Live demo <ExternalLink size={14} /></a>}</div></article>)}</div></div>}
      </section>

      <section className="content-section section-shell" id="certifications">
        <SectionHeading index="05" eyebrow="CONTINUOUS LEARNING" title="Foundations that keep growing." />
        <div className="credentials-grid">{certifications.map((cert, i) => <article className="credential-card" key={cert.name}><div className={`credential-mark mark-${i}`}>{cert.mark}</div><div className="credential-copy"><span className="credential-date">{cert.date}</span><h3>{cert.name}</h3><p>{cert.detail}</p></div><ArrowUpRight className="credential-arrow" size={17} /></article>)}</div>
        <div className="education-row"><span className="education-symbol">EDU</span><div><span className="credential-date">EDUCATION</span><h3>B.Tech in Computer Science Engineering</h3><p>Netaji Subhas University of Technology · New Delhi</p></div></div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <div className="contact-panel"><div className="contact-glow" aria-hidden="true" /><div className="contact-copy"><span className="section-eyebrow"><span className="eyebrow-line" /> OPEN A CONVERSATION</span><h2>Let’s build something<br /><span>meaningful.</span></h2><p>{profile.openToOpportunities ? 'I’m open to senior backend and platform engineering roles (Java, Spring Boot, Kafka, AWS). The fastest way to reach me is email or LinkedIn.' : 'Interested in backend engineering, platform work, or solving complex systems problems? I’d be glad to connect.'}</p><div className="contact-actions"><a className="button button-primary" href={`mailto:${profile.email}`}>Get in touch <ArrowUpRight size={16} /></a><a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <Linkedin size={15} /></a></div></div><div className="contact-side"><span className="contact-side-label">PREFER EMAIL?</span><a href={`mailto:${profile.email}`} className="email-link">{profile.email}<ArrowUpRight size={15} /></a><button className="copy-email" onClick={copyEmail}>{copied ? <Check size={14} /> : <Mail size={14} />}{copied ? 'Copied to clipboard' : 'Copy email address'}</button><div className="contact-divider" /><span className="contact-side-label">PROFESSIONAL PROFILE</span><a className="profile-link" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} /></a>{profile.github && <a className="profile-link" href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={14} /></a>}</div></div>
      </section>

      <footer className="site-footer section-shell"><a className="brand" href="#top"><span className="brand-mark">JT<span>.</span></span><span className="brand-name">Jatin Thakur</span></a><p>Thoughtful engineering. Reliable systems.</p><div className="footer-right"><span>© {new Date().getFullYear()} Jatin Thakur</span><a href="#top">Back to top ↑</a></div></footer>

      <AnimatePresence>{selectedProject !== null && <motion.div className="modal-backdrop" role="presentation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedProject(null); }}><motion.section className="case-modal" role="dialog" aria-modal="true" aria-labelledby="case-title" initial={{ opacity: 0, y: 18, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.98 }} transition={{ duration: 0.2 }}><div className="modal-top"><span className="project-type">CASE STUDY / {projects[selectedProject].number}</span><button className="modal-close" aria-label="Close case study" onClick={() => setSelectedProject(null)}><X size={19} /></button></div><h2 id="case-title">{projects[selectedProject].title}</h2><p className="modal-description">{projects[selectedProject].description}</p><div className="modal-block"><span className="modal-label">CONTEXT</span><p>{projects[selectedProject].context}</p></div><div className="modal-block"><span className="modal-label">ENGINEERING APPROACH</span><ul>{projects[selectedProject].approach.map((item) => <li key={item}><span className="check-mark"><Check size={13} /></span>{item}</li>)}</ul></div><div className="modal-block"><span className="modal-label">OUTCOME / TAKEAWAY</span><p>{projects[selectedProject].outcome}</p></div><div className="tag-row modal-tags">{projects[selectedProject].tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div><p className="confidentiality-note"><ShieldCheck size={15} /> {projects[selectedProject].note}</p></motion.section></motion.div>}</AnimatePresence>
    </main>
  );
}

function SectionHeading({ index, eyebrow, title, description }: { index: string; eyebrow: string; title: string; description?: string }) {
  return <div className="section-heading"><div className="heading-index">{index}</div><div><span className="section-eyebrow"><span className="eyebrow-line" /> {eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div></div>;
}
function MigrationGraphic() { return <div className="graphic migration-graphic"><div className="db-cylinder"><span>SYBASE</span><i /><i /><i /></div><div className="migration-arrow"><span /><ArrowRight size={19} /></div><div className="db-cylinder db-target"><span>MSSQL</span><i /><i /><i /></div><div className="graphic-caption">DATABASE MODERNIZATION</div></div>; }
function SurveillanceGraphic() { return <div className="graphic surveillance-graphic"><div className="radar-ring ring-a"/><div className="radar-ring ring-b"/><div className="radar-ring ring-c"/><div className="radar-core"><ShieldCheck size={24}/></div><i className="radar-point point-a"/><i className="radar-point point-b"/><i className="radar-point point-c"/><span className="graphic-caption">RELIABILITY · SECURITY · CONTROL</span></div>; }
function IntegrationGraphic() { return <div className="graphic integration-graphic"><div className="integration-node"><Code2 size={18}/><span>API</span></div><div className="integration-lines"><i/><i/><i/></div><div className="integration-stack"><span>AUTH</span><span>JSON</span><span>REST</span></div><div className="graphic-caption">SECURE SERVICE COMMUNICATION</div></div>; }
function SearchGraphic() { return <div className="graphic search-graphic"><div className="search-window"><div className="search-window-top"><i/><i/><i/><span>SEARCH INDEX</span></div><div className="search-bar-visual"><span/><div/></div><div className="search-result"><b/><span/><i/></div><div className="search-result short-result"><b/><span/><i/></div><div className="search-result"><b/><span/><i/></div></div><div className="graphic-caption">RELEVANCE · USABILITY · SPEED</div></div>; }
