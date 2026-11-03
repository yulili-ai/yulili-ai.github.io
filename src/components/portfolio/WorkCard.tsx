import Image from 'next/image';
import Link from 'next/link';
import type { Work } from '@/data/work';
export default function WorkCard({
  work: w,
  index,
  composition = false,
}: {
  work: Work;
  index: number;
  composition?: boolean;
}) {
  return (
    <article className={`work-item ${composition ? `work-${index + 1}` : ''}`}>
      <Link href={`/work/${w.slug}`} className="work-link">
        <div className="cover-frame">
          <Image
            src={w.cover}
            alt={`${w.title}${w.coverKind === 'concept' ? '概念封面，非真实产品界面' : '项目封面'}`}
            width={1200}
            height={700}
            sizes="(max-width:700px) 100vw, 65vw"
          />
          <span className="cover-label">
            {w.coverKind === 'concept' ? 'CONCEPT COVER / 概念封面' : 'PROJECT / 项目实录'}
          </span>
          <span className="work-arrow" aria-hidden>
            ↗
          </span>
        </div>
        <div className="work-meta">
          <span className="eyebrow">
            {String(index + 1).padStart(2, '0')} / {w.category}
          </span>
          <span>VIEW CASE ↗</span>
        </div>
        <h3>{w.title}</h3>
        <p>{w.value}</p>
      </Link>
    </article>
  );
}
