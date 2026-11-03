import { notes, noteTopics, isExternalUrl } from '@/data/links';
export default function Notes() {
  const published = notes.filter(
    (n) => n.title && /^\d{4}-\d{2}-\d{2}$/.test(n.publishedAt) && isExternalUrl(n.url),
  );
  return (
    <div className="notes-track" tabIndex={0} role="region" aria-label="文章列表，可横向滚动">
      {published.length
        ? published.map((n, i) => (
            <article key={n.url} className="note">
              <span className="eyebrow">
                {String(i + 1).padStart(2, '0')} / {n.category}
              </span>
              <h3>{n.title}</h3>
              <p>
                <time dateTime={n.publishedAt}>{n.publishedAt}</time> · {n.platform}
              </p>
              <p>{n.description}</p>
              <a className="text-link" href={n.url} target="_blank" rel="noopener noreferrer">
                Read article ↗
              </a>
            </article>
          ))
        : noteTopics.map((topic, i) => (
            <article className="note" key={topic}>
              <span className="eyebrow">0{i + 1} / TOPIC</span>
              <h3>{topic}</h3>
              <p>微信公众号 / 小红书 / GitHub</p>
              <span className="pending">真实文章标题、发布日期与链接待补充</span>
            </article>
          ))}
    </div>
  );
}
