import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from './ClientLayout';
import { profile } from '@/data/profile';
export const metadata: Metadata = {
  title: { default: profile.projectName, template: '%s | YULi' },
  description: `${profile.role} — ${profile.positioning}`,
  icons: { icon: '/yuli-mark.svg' },
  robots: { index: false, follow: true },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <a className="skip-link" href="#main-content">
          跳至主要内容
        </a>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
