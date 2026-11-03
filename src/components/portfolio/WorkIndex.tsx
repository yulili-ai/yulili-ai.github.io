'use client';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Header, Contact } from '@/components/portfolio/Shell';
import WorkCard from '@/components/portfolio/WorkCard';
import { works } from '@/data/work';
export default function WorkIndex() {
  const category = useSearchParams().get('category');
  const filters = ['All', 'Featured', 'Client Projects', 'AI Lab'];
  const selected = filters.includes(category || '') ? category! : 'All';
  const visible = works.filter(
    (w) => selected === 'All' || (selected === 'Featured' ? w.featured : w.category === selected),
  );
  return (
    <div id="top">
      <Header />
      <main id="main-content" className="wrap work-index">
        <div className="case-heading">
          <span className="eyebrow">WORK / CLIENT PROJECTS / EXPERIMENTS</span>
          <h1>
            Ideas into <em>practice.</em>
          </h1>
          <p>从复杂业务到独立实验，记录产品判断、构建过程与交付结果。</p>
        </div>
        <nav className="work-filters" aria-label="项目分类">
          {filters.map((f) => (
            <Link
              key={f}
              href={f === 'All' ? '/work' : `/work?category=${encodeURIComponent(f)}`}
              aria-current={selected === f ? 'page' : undefined}
            >
              {f}
              <span>
                {f === 'All'
                  ? works.length
                  : works.filter((w) => (f === 'Featured' ? w.featured : w.category === f)).length}
              </span>
            </Link>
          ))}
        </nav>
        <div className="project-index-grid">
          {visible.map((w, i) => (
            <WorkCard key={w.slug} work={w} index={i} />
          ))}
        </div>
        <p className="source-note">
          后续归档：奥美品牌营销、作业盒子学习产品与品牌体系、VIPKID
          学习产品与增长优化。具体案例资料补齐后再加入项目清单。
        </p>
      </main>
      <Contact />
    </div>
  );
}
