import { TeamOutlined, GlobalOutlined, BookOutlined, ApiOutlined } from '@ant-design/icons';

export const featuresContent = {
  en: {
    sectionTitle: 'Why Choose Us',
    sectionSubtitle: 'Discover how our AI expertise and innovative solutions can transform your business',
    features: [
      {
        icon: TeamOutlined,
        title: 'Expert AI Team',
        description: 'Our team combines deep AI expertise with extensive industry experience to deliver cutting-edge solutions.',
      },
      {
        icon: GlobalOutlined,
        title: 'Global Reach',
        description: 'We provide AI solutions that meet international standards while understanding local market needs.',
      },
      {
        icon: BookOutlined,
        title: 'Comprehensive Training',
        description: 'Structured learning paths from fundamentals to advanced AI concepts, tailored to your pace.',
      },
      {
        icon: ApiOutlined,
        title: 'Strategic Partnerships',
        description: 'Strong collaborations with leading institutions, enterprises, and research organizations worldwide.',
      },
    ],
  },
  zh: {
    sectionTitle: '为什么选择我们',
    sectionSubtitle: '探索我们的人工智能专业知识和创新解决方案如何改变您的业务',
    features: [
      {
        icon: TeamOutlined,
        title: '专业AI团队',
        description: '我们的团队将深厚的AI专业知识与丰富的行业经验相结合，提供尖端解决方案。',
      },
      {
        icon: GlobalOutlined,
        title: '全球影响力',
        description: '我们提供符合国际标准的AI解决方案，同时深入理解本地市场需求。',
      },
      {
        icon: BookOutlined,
        title: '全面培训体系',
        description: '从基础到高级AI概念的结构化学习路径，根据您的节奏量身定制。',
      },
      {
        icon: ApiOutlined,
        title: '战略合作伙伴',
        description: '与全球领先机构、企业和研究组织建立强有力的合作关系。',
      },
    ],
  },
} as const;

export interface Feature {
  icon: typeof TeamOutlined | typeof GlobalOutlined | typeof BookOutlined | typeof ApiOutlined;
  title: string;
  description: string;
}
