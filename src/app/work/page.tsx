import { Suspense } from 'react';
import WorkIndex from '@/components/portfolio/WorkIndex';
export const metadata = {
  title: 'Work & Experiments',
  description: '产品实践、客户项目与 AI Builder 实验。',
};
export default function Page() {
  return (
    <Suspense fallback={<main className="wrap">正在加载项目…</main>}>
      <WorkIndex />
    </Suspense>
  );
}
