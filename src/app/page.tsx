import Link from 'next/link';
import { Header, Contact, SectionTitle } from '@/components/portfolio/Shell';
import { profile, capabilities, experience } from '@/data/profile';
import Notes from '@/components/portfolio/Notes';
import WorkCard from '@/components/portfolio/WorkCard';
import { featuredWorks } from '@/data/work';
export default function Home() {
  return (
    <div id="top">
      <Header />
      <main id="main-content">
        <section className="hero wrap">
          <div className="hero-top eyebrow">
            <span>INDEPENDENT MIND. BUILDER’S HANDS.</span>
            <span>AI PRODUCT MANAGER / AI BUILDER</span>
          </div>
          <h1>
            <span className="hero-line">
              <span>Think deeply.</span>
            </span>
            <span className="hero-line second">
              <span>
                Build <em>boldly.</em>
                <i className="hero-star" aria-hidden>
                  ✳
                </i>
              </span>
            </span>
          </h1>
          <div className="hero-bottom">
            <span className="hero-index">IDEA → PRODUCT → IMPACT</span>
            <div>
              <p className="positioning">{profile.positioning}</p>
              <p className="hero-description">{profile.intro}</p>
              <p className="hero-motto">{profile.motto}</p>
              <a className="text-link" href="#work">
                Explore selected work <span>↘</span>
              </a>
            </div>
          </div>
          <div className="hero-rule">
            <span>YULi — PERSONAL PORTFOLIO</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>
        <section id="capabilities" className="capabilities wrap section-space">
          <SectionTitle number="01" title="A connected perspective." subtitle="CAPABILITIES" />
          <div className="capability-intro" data-reveal>
            <p>
              从判断方向，到亲手构建。
              <br />
              让技术能力与真实需求相遇。
            </p>
            <span className="muted">四个视角，贯穿产品从想法到落地的过程。</span>
          </div>
          <div className="capability-list">
            {capabilities.map((c, i) => (
              <article key={c.title} data-reveal>
                <span className="eyebrow">0{i + 1}</span>
                <h3>
                  {c.title}
                  <small>{c.chinese}</small>
                </h3>
                <div>
                  <p>{c.description}</p>
                  <span className="cap-tags">{c.tags}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="work" className="work-section wrap section-space">
          <SectionTitle number="02" title="Selected work" subtitle="PROJECTS & EXPLORATIONS" />
          <div className="work-intro">
            <p>
              一些实践，一些探索。
              <br />
              每个项目，都是对问题的一次具体回应。
            </p>
            <span className="muted">04 SELECTED PROJECTS</span>
          </div>
          <div className="work-composition">
            {featuredWorks.map((w, i) => (
              <WorkCard key={w.slug} work={w} index={i} composition />
            ))}
          </div>
          <Link href="/work" className="text-link more-projects">
            More Projects &amp; Experiments →
          </Link>
        </section>
        <section className="experience wrap section-space">
          <SectionTitle number="03" title="An evolving practice." subtitle="EXPERIENCE" />
          <div className="experience-layout">
            <p className="experience-note">
              12 年复杂业务与数字产品经验，
              <br />
              从产品判断走向全链路构建。
              <Link className="text-link" href="/about">
                More about me ↗
              </Link>
            </p>
            <div>
              {experience.map((e) => (
                <article key={e.period} data-reveal>
                  <span className="eyebrow">{e.period}</span>
                  <h3>{e.title}</h3>
                  <p>{e.chinese}</p>
                  <small className="muted">{e.description}</small>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="notes" className="notes wrap section-space">
          <SectionTitle number="04" title="Notes & thoughts." subtitle="A WORKING NOTEBOOK" />
          <p className="notes-intro">
            关于 AI、产品与构建的持续思考。<span>横向浏览 →</span>
          </p>
          <Notes />
        </section>
        <section className="interlude wrap" data-reveal>
          <span className="eyebrow">05 / A CONTINUOUS PRACTICE</span>
          <p>
            Good questions.
            <br />
            <em>Meaningful products.</em>
          </p>
          <span>持续提问，持续构建。</span>
        </section>
      </main>
      <Contact />
    </div>
  );
}
