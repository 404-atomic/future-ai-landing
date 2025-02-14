export const heroContent = {
  en: {
    title: {
      part1: 'Empowering Digital',
      highlight: 'Singapore',
      part2: 'Fostering Growth for All'
    },
    subtitle: 'FutureAI Hub - An innovative startup focused on AI applications and enterprise intelligence services.',
    getStarted: "Get Started"
  },
  zh: {
    title: {
      part1: '赋能数字化',
      highlight: '新加坡',
      part2: '促进共同发展'
    },
    subtitle: 'FutureAI Hub - 专注于人工智能应用和企业智能服务的创新型初创企业。',
    getStarted: "立即开始"
  }
} as const;

export type HeroContent = typeof heroContent;
