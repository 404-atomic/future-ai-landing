export const productContent = {
  en: {
    subtitle: 'Your AI Career Companion',
    title: 'CareerMateAI',
    description: 'CareerMateAI is the first AI agent product launched by FutureAI Hub, an innovative AI-driven career development companion that provides 24/7 career development support for Singaporean professionals.',
    product: {
      features: [
        {
          title: 'Continuous Companionship',
          description: 'Not just an advisor, but a growth partner available 24/7 to support your career journey.'
        },
        {
          title: 'Personalized Teaching',
          description: 'Providing customized advice based on your unique background, skills, and career goals.'
        },
        {
          title: 'Professional Guidance',
          description: 'Expert analysis and insights powered by advanced AI technology and industry data.'
        }
      ]
    },
    extendedDescription: 'CareerMateAI can provide personalized career planning advice, skill improvement paths, and industry insights based on the user\'s career background, skill level, and career goals. Whether it\'s job search preparation, workplace promotion, or career transition planning, CareerMateAI can provide professional and timely guidance.'
  },
  zh: {
    subtitle: '您的AI职业伴侣',
    title: 'CareerMateAI',
    description: 'CareerMateAI 是 FutureAI Hub 推出的首个AI代理产品，是一个创新的AI驱动职业发展伴侣，为新加坡专业人士提供全天候的职业发展支持。',
    product: {
      features: [
        {
          title: '持续陪伴',
          description: '不仅是顾问，更是全天候陪伴您职业发展的成长伙伴。'
        },
        {
          title: '个性化指导',
          description: '根据您独特的背景、技能和职业目标提供定制化建议。'
        },
        {
          title: '专业指引',
          description: '由先进AI技术和行业数据支持的专业分析和见解。'
        }
      ]
    },
    extendedDescription: 'CareerMateAI 能够根据用户的职业背景、技能水平和职业目标，提供个性化的职业规划建议、技能提升路径和行业洞察。无论是求职准备、职场晋升还是职业转型规划，CareerMateAI 都能提供专业及时的指导。'
  }
} as const;

export interface Feature {
  title: string;
  description: string;
}
