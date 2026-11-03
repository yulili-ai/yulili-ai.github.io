'use client';
import { useRef } from 'react';
import { TransitionRouter } from 'next-transition-router';
import { gsap } from '@/lib/gsap';
import Motion from '@/components/portfolio/Motion';
declare global {
  interface Window {
    __preloaderDone?: boolean;
  }
}
export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const surface = useRef<HTMLDivElement>(null);
  return (
    <TransitionRouter
      auto
      leave={(next) => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          next();
          return;
        }
        const tween = gsap.to(surface.current, {
          opacity: 0,
          y: -6,
          duration: 0.18,
          onComplete: next,
        });
        return () => tween.kill();
      }}
      enter={(next) => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          gsap.set(surface.current, { clearProps: 'all' });
          next();
          return;
        }
        const tween = gsap.fromTo(
          surface.current,
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.3, clearProps: 'all', onComplete: next },
        );
        return () => tween.kill();
      }}
    >
      <div ref={surface}>{children}</div>
      <Motion />
    </TransitionRouter>
  );
}
