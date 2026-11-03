export const dynamic = 'force-static';
import type { MetadataRoute } from 'next';
import { profile } from '@/data/profile';
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: profile.projectName,
    short_name: 'YULi',
    description: profile.positioning,
    start_url: '/',
    display: 'standalone',
    background_color: '#F6F5F1',
    theme_color: '#F6F5F1',
    icons: [{ src: '/yuli-mark.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}
