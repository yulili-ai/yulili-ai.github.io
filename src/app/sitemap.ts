export const dynamic = 'force-static';
import type { MetadataRoute } from 'next';
import { works } from '@/data/work';
import { profile } from '@/data/profile';
export default function sitemap(): MetadataRoute.Sitemap {
  if (!profile.siteUrl) return [];
  return ['', '/about', '/work', ...works.map((w) => `/work/${w.slug}`)].map((path) => ({
    url: `${profile.siteUrl}${path}`,
  }));
}
