export type NavItem = 'features' | 'about' | 'services' | 'products' | 'contact';

export const navContent = {
  en: {
    features: 'Features',
    about: 'About',
    services: 'Services',
    products: 'Products',
    contact: 'Contact',
  },
  zh: {
    features: '功能特点',
    about: '关于我们',
    services: '服务项目',
    products: '产品介绍',
    contact: '联系我们',
  },
} as const;

export type NavContent = typeof navContent;
