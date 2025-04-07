export type NavItem = 'features' | 'about' | 'vision' | 'advantages' | 'services' | 'blogPreview' | 'contact' | 'blog';

export const navContent = {
  en: {
    features: 'Features',
    about: 'About',
    vision: 'Vision & Mission',
    advantages: 'Advantages',
    services: 'Services',
    blogPreview: 'Blog Highlights',
    contact: 'Contact',
    blog: 'Blog'
  },
  zh: {
    features: '功能',
    about: '关于我们',
    vision: '愿景使命',
    advantages: '优势',
    services: '服务',
    blogPreview: '博客亮点',
    contact: '联系我们',
    blog: '博客'
  }
} as const;

export type NavContent = typeof navContent;
