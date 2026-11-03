import Image from 'next/image';
import type { Media } from '@/data/work';
import { isExternalUrl } from '@/data/links';
export function validMediaSource(src: string) {
  return (src.startsWith('/') && !src.startsWith('//')) || isExternalUrl(src);
}
export default function CaseMedia({ items }: { items: Media[] }) {
  return (
    <div className="case-gallery">
      {items
        .filter((m) => validMediaSource(m.src))
        .map((m) => (
          <figure key={m.src}>
            {m.type === 'image' ? (
              <Image
                src={m.src}
                alt={m.alt}
                width={m.width || 1200}
                height={m.height || 800}
                unoptimized={isExternalUrl(m.src)}
                sizes="(max-width:700px) 100vw, 70vw"
              />
            ) : (
              <video
                controls
                preload="none"
                playsInline
                poster={m.poster && validMediaSource(m.poster) ? m.poster : undefined}
                aria-label={m.alt}
              >
                <source src={m.src} />
                你的浏览器不支持视频播放。
              </video>
            )}
            <figcaption>
              {m.caption} · 来源：{m.sourceId}
            </figcaption>
          </figure>
        ))}
    </div>
  );
}
