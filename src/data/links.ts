export type SocialLink = { label: string; url: string; source: string };
export type Note = {
  title: string;
  category: string;
  description: string;
  publishedAt: string;
  platform: '微信公众号' | '小红书' | 'GitHub' | '其他';
  url: string;
  source: string;
};
// 只收录可追溯的真实标题、发布日期和地址。未提供的文章不伪造。
export const notes: Note[] = [];
export const noteTopics = ['AI 技术研究', '行业观察', '项目复盘'];
export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/yulili-ai',
    source: '简历第 1 页；2026-11-03 验证 HTTP 200',
  },
];
export const pendingSocialLinks = ['微信公众号', '小红书'];
export function isExternalUrl(url: string) {
  try {
    const u = new URL(url);
    return u.protocol === 'https:' || u.protocol === 'http:';
  } catch {
    return false;
  }
}
