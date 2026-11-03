import Link from 'next/link';
import { profile } from '@/data/profile';
import { socialLinks, pendingSocialLinks, isExternalUrl } from '@/data/links';
export function Header() {
  return (
    <header className="site-header wrap">
      <Link className="wordmark" href="/" aria-label="YULi 首页">
        YULi<span className="blue">.</span>
      </Link>
      <nav aria-label="主导航">
        <Link href="/#work">Work</Link>
        <Link href="/about">About</Link>
        <Link href="/#notes">Notes</Link>
        <Link href="/#contact">
          Let’s talk <span aria-hidden>↗</span>
        </Link>
      </nav>
    </header>
  );
}
export function Contact() {
  return (
    <footer id="contact" className="contact wrap">
      <div className="eyebrow">06 / CONTACT</div>
      <h2>
        Let’s make
        <br />
        <em>something matter.</em>
        <span className="blue">↗</span>
      </h2>
      <div className="contact-bottom">
        <p>
          从一个值得解决的问题开始。
          <br />
          <span className="muted">AI 产品咨询 · 解决方案 · 构建合作</span>
        </p>
        <div>
          {profile.email ? (
            <a className="text-link" href={`mailto:${profile.email}`}>
              {profile.email} ↗
            </a>
          ) : (
            <span className="pending">联系邮箱待补充</span>
          )}
          <div className="socials">
            {socialLinks.length ? (
              socialLinks
                .filter((s) => isExternalUrl(s.url))
                .map((s) => (
                  <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">
                    {s.label} ↗
                  </a>
                ))
            ) : (
              <span className="muted">社交链接待补充</span>
            )}
          </div>
          <p className="contact-pending">{pendingSocialLinks.join(' / ')}：链接待补充</p>
        </div>
      </div>
      <div className="footer-line">
        <span>© {new Date().getFullYear()} YULi</span>
        <span>THOUGHTFULLY DESIGNED. CONTINUOUSLY BUILT.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
export function SectionTitle({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">
        {number} / {subtitle}
      </span>
      <h2>{title}</h2>
    </div>
  );
}
