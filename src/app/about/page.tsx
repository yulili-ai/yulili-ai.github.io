import Link from 'next/link';
import { Header, Contact, SectionTitle } from '@/components/portfolio/Shell';
import { profile, capabilities, experience, techStack, careerImpact } from '@/data/profile';
export const metadata = { title: 'About' };
export default function About() {
  return (
    <div id="top">
      <Header />
      <main id="main-content" className="about-page wrap">
        <section className="about-hero">
          <span className="eyebrow">ABOUT / YULi</span>
          <h1>
            Curious mind.
            <br />
            <em>Builder at heart.</em>
          </h1>
          <div className="about-copy">
            <p className="positioning">{profile.role}</p>
            <p>{profile.about}</p>
            <p className="muted">{profile.positioning}</p>
            {profile.resumeUrl ? (
              <a className="text-link" href={profile.resumeUrl}>
                下载简历 ↗
              </a>
            ) : (
              <span className="pending">个人简历待补充</span>
            )}
          </div>
        </section>
        <section className="section-space">
          <SectionTitle number="01" title="How I approach work." subtitle="PERSPECTIVE" />
          <div className="about-principles">
            {capabilities.map((c, i) => (
              <article key={c.title} data-reveal>
                <span className="eyebrow">0{i + 1}</span>
                <h3>{c.title}</h3>
                <p>{c.description}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="section-space">
          <SectionTitle number="02" title="The journey so far." subtitle="EXPERIENCE" />
          {experience.map((e) => (
            <article className="about-experience" key={e.period}>
              <span className="eyebrow">{e.period}</span>
              <h3>
                {e.title}
                <small className="timeline-role">{e.chinese}</small>
              </h3>
              <p>{e.description}</p>
            </article>
          ))}
        </section>
        <section className="section-space">
          <SectionTitle number="03" title="Impact, in context." subtitle="CAREER OUTCOMES" />
          <div className="career-impact">
            {careerImpact.map((m) => (
              <article key={m.label}>
                <strong>{m.value}</strong>
                <h3>{m.label}</h3>
                <p>{m.scope}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="section-space">
          <SectionTitle
            number="04"
            title="Tools for the thinking."
            subtitle="AI TECHNOLOGY STACK"
          />
          <div className="tech-list">
            {techStack.map((t) => (
              <article key={t.title}>
                <h3>{t.title}</h3>
                <p>{t.tools}</p>
              </article>
            ))}
          </div>
          <p className="source-note">
            来源：个人简历与 V1.1 说明。技术栈为能力概览，不代表每个项目均采用全部工具。
          </p>
        </section>
        <Link href="/work" className="text-link">
          Explore my work ↗
        </Link>
      </main>
      <Contact />
    </div>
  );
}
