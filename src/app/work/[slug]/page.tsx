export const dynamicParams = false;
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header, Contact } from '@/components/portfolio/Shell';
import CaseMedia from '@/components/portfolio/CaseMedia';
import { works, getWork } from '@/data/work';
import { isExternalUrl } from '@/data/links';
import { sources } from '@/data/evidence';
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}
export async function generateMetadata({ params }: Props) {
  const w = getWork((await params).slug);
  return { title: w?.title ?? 'Project not found', description: w?.value };
}
const sections = [
  ['01', 'Overview', '概览'],
  ['02', 'Business Context', '业务背景'],
  ['03', 'Problem & Opportunity', '问题与机会'],
  ['04', 'Product Strategy', '产品策略'],
  ['05', 'AI Architecture', 'AI 技术方案'],
  ['06', 'Key Decisions & Build', '关键决策与构建'],
  ['07', 'Validation & Impact', '效果与商业价值'],
  ['08', 'Links & Resources', '演示与资料'],
];
function Paragraphs({ items }: { items: string[] }) {
  return items.length ? (
    <div className="case-paragraphs">
      {items.map((t, i) => (
        <p key={i}>{t}</p>
      ))}
    </div>
  ) : (
    <p className="muted">资料待补充。</p>
  );
}
export default async function WorkPage({ params }: Props) {
  const w = getWork((await params).slug);
  if (!w) notFound();
  const next = works[(works.indexOf(w) + 1) % works.length];
  const links = [
    { label: 'Live demo', url: w.demo },
    { label: 'GitHub', url: w.github },
    ...w.relatedLinks,
  ].filter((l) => isExternalUrl(l.url));
  const source = sources[w.sourceId as keyof typeof sources];
  const content = [
    <div key="overview">
      <p>{w.positioning || w.value}</p>
      <dl className="case-facts">
        <div>
          <dt>项目时间</dt>
          <dd>{w.time}</dd>
        </div>
        <div>
          <dt>我的角色</dt>
          <dd>{w.role}</dd>
        </div>
        <div>
          <dt>项目阶段</dt>
          <dd>{w.stage}</dd>
        </div>
      </dl>
      <div className="responsibility">
        <span className="eyebrow">MY RESPONSIBILITY / 职责边界</span>
        <p>{w.boundary || '具体职责边界待补充。'}</p>
      </div>
    </div>,
    <p key="background">{w.background || '业务背景待补充。'}</p>,
    <p key="problem">{w.problem || '核心问题与机会待补充。'}</p>,
    <Paragraphs key="strategy" items={w.strategy} />,
    <Paragraphs key="architecture" items={w.architecture} />,
    <div key="build">
      {w.decisions.length > 0 && (
        <ol className="decision-list">
          {w.decisions.map((d, i) => (
            <li key={d}>
              <span className="eyebrow">DECISION {String(i + 1).padStart(2, '0')}</span>
              <p>{d}</p>
            </li>
          ))}
        </ol>
      )}
      <h3 className="case-subtitle">Implementation / 产品实现</h3>
      <Paragraphs items={w.implementation} />
      <CaseMedia items={w.media} />
    </div>,
    <div key="impact">
      {w.metrics.length > 0 && (
        <div className="metric-list">
          {w.metrics.map((m) => (
            <article key={m.label}>
              <strong>{m.value}</strong>
              <h3>{m.label}</h3>
              <p>{m.context}</p>
            </article>
          ))}
        </div>
      )}
      {w.business.length > 0 && (
        <>
          <h3 className="case-subtitle">Business impact / 商业成果</h3>
          <Paragraphs items={w.business} />
        </>
      )}
      <p className="source-note">{w.verification}</p>
    </div>,
    <div key="links">
      {links.length ? (
        links.map((l) => (
          <a
            className="text-link resource-link"
            key={l.url}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {l.label} ↗
          </a>
        ))
      ) : (
        <p>真实 Demo、GitHub 与相关资料链接待补充。</p>
      )}
      <p className="source-note">
        内容来源：{source?.title} · {w.sourceSection}。{source?.kind}
        ，不代表独立第三方审计。项目封面为设计示意，真实截图与演示素材待补充。
      </p>
    </div>,
  ];
  return (
    <div id="top">
      <Header />
      <main id="main-content" className="case wrap">
        <Link className="text-link" href="/work">
          ← All work
        </Link>
        <div className="case-heading">
          <span className="eyebrow">{w.category} / CASE STUDY</span>
          <h1>{w.title}</h1>
          <p className="case-english">{w.english}</p>
          <p>{w.value}</p>
          <span className="project-stage">
            {w.time} · {w.stage}
          </span>
        </div>
        <div className="cover-frame case-cover">
          <Image
            src={w.cover}
            alt={`${w.title}${w.coverKind === 'concept' ? '概念封面，非实际产品截图' : '项目封面'}`}
            width={1200}
            height={700}
            priority
          />
          <span className="cover-label">
            {w.coverKind === 'concept' ? 'CONCEPT COVER / 概念封面' : 'PROJECT / 项目实录'}
          </span>
        </div>
        <div className="case-body">
          <aside>
            <span className="eyebrow">IN THIS CASE</span>
            {sections.map((s) => (
              <a key={s[0]} href={`#section-${s[0]}`}>
                {s[0]} / {s[2]}
              </a>
            ))}
          </aside>
          <div>
            {sections.map((s, i) => (
              <section id={`section-${s[0]}`} className="case-section" key={s[0]} data-reveal>
                <span className="eyebrow">
                  {s[0]} / {s[2]}
                </span>
                <h2>{s[1]}</h2>
                {content[i]}
              </section>
            ))}
          </div>
        </div>
        <Link className="next-work" href={`/work/${next.slug}`}>
          <span className="eyebrow">NEXT PROJECT</span>
          <h2>
            {next.title}
            <span>↗</span>
          </h2>
        </Link>
      </main>
      <Contact />
    </div>
  );
}
