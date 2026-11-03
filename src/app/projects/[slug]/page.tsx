import Link from 'next/link';
export const dynamicParams = false;
export function generateStaticParams() {
  return ['c-study', 'hms', 'ecommerce', 'finance', 'blog'].map((slug) => ({ slug }));
}
export default function LegacyProject() {
  return (
    <main className="wrap">
      <h1>项目页面已更新</h1>
      <Link href="/work/">查看 YULi 的作品集 →</Link>
    </main>
  );
}
