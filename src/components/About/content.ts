export const aboutContent = {
  en: {
    title: 'About Us',
    subtitle: 'Empowering businesses with innovative AI solutions',
    description: 'We help organizations leverage artificial intelligence to transform their operations and drive sustainable growth.',
    paragraphs: [
      'FutureAI Hub is a forward-thinking AI solutions provider based in Singapore, dedicated to transforming businesses through innovative artificial intelligence technologies.',
      'Our mission is to make AI technology accessible and practical for businesses of all sizes. We combine deep technical expertise with a thorough understanding of the local market to deliver solutions that drive real business value.',
      'With a focus on practical applications and sustainable growth, we help organizations navigate their digital transformation journey and harness the power of AI to stay competitive in today\'s rapidly evolving landscape.'
    ],
    imageAlt: 'FutureAI Hub Team'
  },
  zh: {
    title: '关于我们',
    subtitle: '以创新AI解决方案赋能企业',
    description: '我们帮助企业利用人工智能技术转型升级，实现可持续发展。',
    paragraphs: [
      'FutureAI Hub 是一家位于新加坡的前瞻性人工智能解决方案提供商，致力于通过创新的人工智能技术推动企业转型。',
      '我们的使命是让人工智能技术变得更加实用和普及，适用于各种规模的企业。我们将深厚的技术专长与对本地市场的深入理解相结合，提供能够创造真实商业价值的解决方案。',
      '通过专注于实际应用和可持续发展，我们帮助组织机构驾驭数字化转型之旅，利用人工智能的力量在当今快速发展的环境中保持竞争力。'
    ],
    imageAlt: 'FutureAI Hub 团队'
  }
} as const;

export type AboutContent = typeof aboutContent;
