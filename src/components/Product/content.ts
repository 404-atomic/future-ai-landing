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
    subtitle: '首款核心产品',
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

export const featureContent = {
  en: {
    title: 'Core Features',
    description: 'CareerMateAI combines advanced AI technology with deep industry insights to provide comprehensive career development support.',
    features: [
      {
        title: 'Career Profile Analysis',
        items: [
          'Personality trait analysis',
          'Professional skills assessment',
          'Career interest mapping',
          'Development potential evaluation'
        ]
      },
      {
        title: 'Career Planning',
        items: [
          'Customized career path design',
          'Skill gap analysis',
          'Learning resource recommendations',
          'Industry trend insights'
        ]
      },
      {
        title: 'Job Search Support',
        items: [
          'Resume optimization',
          'Interview preparation',
          'Job market analysis',
          'Salary negotiation advice'
        ]
      },
      {
        title: 'Continuous Growth',
        items: [
          'Progress tracking',
          'Performance improvement tips',
          'Professional networking advice',
          'Work-life balance guidance'
        ]
      }
    ]
  },
  zh: {
    title: '核心功能',
    description: 'CareerMateAI 将先进的AI技术与深度的行业洞察相结合，为您提供全方位的职业发展支持。',
    features: [
      {
        title: '职业画像分析',
        items: [
          '性格特质分析',
          '专业技能评估',
          '职业兴趣匹配',
          '发展潜力评估'
        ]
      },
      {
        title: '职业规划',
        items: [
          '定制化职业路径设计',
          '技能差距分析',
          '学习资源推荐',
          '行业趋势洞察'
        ]
      },
      {
        title: '求职支持',
        items: [
          '简历优化',
          '面试准备',
          '就业市场分析',
          '薪资谈判建议'
        ]
      },
      {
        title: '持续成长',
        items: [
          '进度追踪',
          '绩效提升建议',
          '职业社交指导',
          '工作生活平衡指导'
        ]
      }
    ]
  }
};

export interface Feature {
  title: string;
  description: string;
}

export const valueContent = {
  en: {
    title: 'Our Core Values',
    description: 'CareerMateAI is built on a foundation of values that prioritize user growth and professional development.',
    values: [
      {
        title: 'Continuous Companionship',
        description: 'More than just an advisor, we\'re your dedicated growth partner',
        icon: 'TeamOutlined'
      },
      {
        title: 'Personalized Guidance',
        description: 'Tailored advice based on your unique characteristics and goals',
        icon: 'UserOutlined'
      },
      {
        title: 'Timely Support',
        description: 'Instant responses and guidance whenever you need direction',
        icon: 'ClockCircleOutlined'
      },
      {
        title: 'Professional Excellence',
        description: 'Expert analysis powered by deep learning and extensive data',
        icon: 'TrophyOutlined'
      }
    ]
  },
  zh: {
    title: '核心价值理念',
    description: 'CareerMateAI 建立在重视用户成长和职业发展的价值观基础之上。',
    values: [
      {
        title: '持续陪伴',
        description: '不仅是建议者，更是成长的伙伴',
        icon: 'TeamOutlined'
      },
      {
        title: '因材施教',
        description: '根据个人特点提供定制化建议',
        icon: 'UserOutlined'
      },
      {
        title: '及时反馈',
        description: '随时解答疑惑，指明方向',
        icon: 'ClockCircleOutlined'
      },
      {
        title: '专业可靠',
        description: '基于海量数据和深度学习的专业分析',
        icon: 'TrophyOutlined'
      }
    ]
  }
};

export const coreModulesContent = {
  en: {
    title: 'Core Modules',
    modules: [
      {
        title: 'Career Portrait System',
        features: [
          'Personality Trait Analysis System',
          'Personal Capability Assessment System',
          'Development Potential Prediction System',
          'Interest & Strength Mining System'
        ]
      },
      {
        title: 'Intelligent Planning Engine',
        features: [
          'Career Path Design',
          'Skill Enhancement Planning',
          'Development Strategy Formulation'
        ]
      },
      {
        title: 'Real-time Consultation System',
        features: [
          'Instant Q&A for Career Issues',
          'Real-time Stress Management Consultation',
          'Decision Support in Real-time',
          'In-depth Career Confusion Dialogue',
          'Work-life Goal Adjustment Advice'
        ]
      }
    ]
  },
  zh: {
    title: '核心功能模块',
    modules: [
      {
        title: '职业画像系统',
        features: [
          '个性特质分析系统',
          '个人能力评估系统',
          '发展潜力预测系统',
          '兴趣优势挖掘系统'
        ]
      },
      {
        title: '智能规划引擎',
        features: [
          '职业路径设计',
          '技能提升规划',
          '发展策略制定'
        ]
      },
      {
        title: '实时咨询系统',
        features: [
          '职场问题即时问答',
          '压力管理实时咨询',
          '决策建议实时支持',
          '职业困惑深度对话',
          '工作生活目标调整建议'
        ]
      }
    ]
  }
};

export const valuePropositionContent = {
  en: {
    title: 'Our Value Proposition',
    propositions: [
      {
        title: '🌟 Empowering Personal Growth',
        points: [
          'Practical AI Tool Application Training',
          'Career Skill Enhancement Courses',
          'AI Certification Programs',
          'Industry Development Updates'
        ]
      },
      {
        title: '💼 Career Development Support',
        points: [
          'Multi-domain Career Transition Support',
          'Employment Opportunity Matching',
          'Practical Project Training',
          'Career Development Community'
        ]
      },
      {
        title: '🎯 Practical Learning Experience',
        points: [
          'Small-group Hands-on Training',
          'Real Scenario Practice',
          'One-on-one Mentoring',
          'Continuous Learning Support'
        ]
      },
      {
        title: '🤝 Extensive Cooperation Network',
        points: [
          'Government Agency Resources',
          'Enterprise Recruitment Needs',
          'Industry Expert Network',
          'Learning Exchange Platform'
        ]
      }
    ]
  },
  zh: {
    title: '我们的价值主张',
    propositions: [
      {
        title: '🌟 赋能个人成长',
        points: [
          '提供实用的AI工具应用培训',
          '设计职业技能提升课程',
          '开展AI认证项目',
          '分享业内最新发展动态'
        ]
      },
      {
        title: '💼 助力职业发展',
        points: [
          '支持多领域职业转型',
          '提供就业机会对接',
          '开展实战项目训练',
          '建立职业发展社群'
        ]
      },
      {
        title: '🎯 务实的学习体验',
        points: [
          '小班制实操培训',
          '真实场景演练',
          '一对一辅导',
          '持续学习支持'
        ]
      },
      {
        title: '🤝 广泛的合作网络',
        points: [
          '链接政府机构资源',
          '对接企业用人需求',
          '汇聚行业专家',
          '建立学习交流平台'
        ]
      }
    ]
  }
};
