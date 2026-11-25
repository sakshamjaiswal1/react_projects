import { imageMetadata } from './image-metadata';
export const moments = [{'image': '/images/moment-1.jpg', 'href': 'https://www.instagram.com/sakshamjaiswal1/p/By9WXFOgbKC/', 'label': 'June 2019'}, {'image': '/images/moment-2.jpg', 'href': 'https://www.instagram.com/sakshamjaiswal1/p/CyI3ogZSLoT/', 'label': 'October 2023'}, {'image': '/images/moment-3.jpg', 'href': 'https://www.instagram.com/sakshamjaiswal1/p/CccqauVs6PM/', 'label': 'April 2022'}, {'image': '/images/moment-4.jpg', 'href': 'https://www.instagram.com/sakshamjaiswal1/p/DgHNYDqmZjN/', 'label': 'November 2026'}, {'image': '/images/moment-5.jpg', 'href': 'https://www.instagram.com/sakshamjaiswal1/p/Db95EtZK2dH/', 'label': 'August 2026'}, {'image': '/images/moment-6.jpg', 'href': 'https://www.instagram.com/sakshamjaiswal1/p/DbkyAWuGYva/', 'label': 'August 2026'}, {'image': '/images/moment-7.jpg', 'href': 'https://www.instagram.com/sakshamjaiswal1/reel/DakwRs1qWjl/', 'label': 'July 2026'}, {'image': '/images/moment-8.jpg', 'href': 'https://www.instagram.com/sakshamjaiswal1/p/DaZoEG9Gewn/', 'label': 'July 2026'}, {'image': '/images/moment-9.jpg', 'href': 'https://www.instagram.com/sakshamjaiswal1/reel/DaYEVjxqEcl/', 'label': 'July 2026'}, {'image': '/images/moment-10.jpg', 'href': 'https://www.instagram.com/sakshamjaiswal1/p/DaVPQY4GVUr/', 'label': 'July 2026'}, {'image': '/images/moment-11.jpg', 'href': 'https://www.instagram.com/sakshamjaiswal1/reel/DaFp-rRqbSC/', 'label': 'June 2026'}, {'image': '/images/moment-12.jpg', 'href': 'https://www.instagram.com/sakshamjaiswal1/p/DYPHobkGZQR/', 'label': 'May 2026'}];
export const places = ['Kerala','Mumbai','Almora','Banaras'];

export type Reel = {
  id: string;
  src?: string;
  poster: string;
  href: string;
  title: string;
  label: string;
  date: string;
  number: string;
};
export const reels: Reel[] = [
  { id: 'escape', src: '/videos/escape-explore-repeat.mp4', poster: '/images/reel-escape.jpg', href: moments[6].href, title: 'Escape. Explore. Repeat.', label: 'A travel montage from Saksham’s July 2026 reel.', date: '09 JULY 2026', number: '01' },
  { id: 'roads', src: '/videos/chasing-curves.mp4', poster: '/images/reel-roads.jpg', href: moments[8].href, title: 'Chasing curves.', label: 'Open roads and travel scenes from Saksham’s July 2026 reel.', date: '04 JULY 2026', number: '02' },
  { id: 'discipline', src: '/videos/the-journey-begins.mp4', poster: '/images/reel-discipline.jpg', href: moments[10].href, title: 'The journey begins.', label: 'Saksham’s first gym filming session, shared in June 2026.', date: '27 JUNE 2026', number: '03' },
];

export function imageSrcSet(src: string) {
  return imageMetadata[src]?.srcSet;
}
