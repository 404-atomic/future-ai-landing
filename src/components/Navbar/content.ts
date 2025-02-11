export type NavItem = 'features' | 'about' | 'vision' | 'advantages' | 'services' | 'contact';

export const navContent = {
  en: {
    features: 'Features',
    about: 'About',
    vision: 'Vision & Mission',
    advantages: 'Advantages',
    services: 'Services',
    contact: 'Contact'
  },
  zh: {
    features: '功能',
    about: '关于我们',
    vision: '愿景使命',
    advantages: '优势',
    services: '服务',
    contact: '联系我们'
  }
} as const;

export type NavContent = typeof navContent;
