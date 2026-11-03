'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from '@/lib/gsap';
export default function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(
        '.hero-line > span',
        { yPercent: 110 },
        { yPercent: 0, duration: 0.85, stagger: 0.13, ease: 'power3.out', clearProps: 'transform' },
      );
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            if (el.classList.contains('cover-frame'))
              gsap.fromTo(
                el,
                { clipPath: 'inset(10% 0 10% 0)' },
                {
                  clipPath: 'inset(0% 0 0% 0)',
                  duration: 0.8,
                  ease: 'power2.out',
                  clearProps: 'clipPath',
                },
              );
            else
              gsap.fromTo(
                el,
                { y: 24, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.65, ease: 'power2.out', clearProps: 'all' },
              );
            observer.unobserve(el);
          });
        },
        { threshold: 0.12 },
      );
      document
        .querySelectorAll('[data-reveal], .cover-frame')
        .forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    });
    return () => media.revert();
  }, [pathname]);
  return null;
}
