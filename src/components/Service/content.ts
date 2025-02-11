import { 
  ExperimentOutlined, 
  ApiOutlined, 
  BookOutlined, 
  TeamOutlined 
} from '@ant-design/icons';

export type NavItem = 'features' | 'about' | 'services' | 'products' | 'contact';
export type ServiceKey = 'agent' | 'enterprise' | 'academy' | 'ecosystem';

interface ServicePoints {
  points: string[];
}

interface ExtendedContentLanguage {
  agent: ServicePoints;
  enterprise: ServicePoints;
  academy: ServicePoints;
  ecosystem: ServicePoints;
}

interface ExtendedContent {
  en: ExtendedContentLanguage;
  zh: ExtendedContentLanguage;
}

interface ServiceItem {
  icon: typeof ExperimentOutlined | typeof ApiOutlined | typeof BookOutlined | typeof TeamOutlined;
  title: string;
  description: string;
}

interface ServiceContentLanguage {
  title: string;
  description: string;
  services: ServiceItem[];
}

interface ServiceContent {
  en: ServiceContentLanguage;
  zh: ServiceContentLanguage;
}

export const extendedContent: ExtendedContent = {
  en: {
    agent: {
      points: [
        'Learning Assistant: Personalized learning plans and intelligent knowledge mapping',
        'Career Planning: Career path design and skill gap analysis',
        'Personal Efficiency: Time management and smart information processing',
        'Decision Support: AI-powered guidance and optimization recommendations'
      ]
    },
    enterprise: {
      points: [
        'Technical Consulting: Digital maturity assessment and transformation strategy',
        'Solution Design: Business process optimization and system integration',
        'Implementation Support: Project management and technical guidance',
        'Performance Optimization: Continuous monitoring and improvement plans'
      ]
    },
    academy: {
      points: [
        'Practical Tools: AI office efficiency and smart creation tools',
        'Scenario Practice: Industry cases and hands-on skill training',
        'Capability Assessment: Career analysis and development planning',
        'Employment Support: Resume optimization and interview preparation'
      ]
    },
    ecosystem: {
      points: [
        'Learning Platform: Technical seminars and experience sharing sessions',
        'Resource Sharing: Learning materials and tool resource packages',
        'Startup Support: Technical guidance and resource matching',
        'Innovation Network: Industry collaboration and market opportunities'
      ]
    }
  },
  zh: {
    agent: {
      points: [
        '学习助手：个性化学习规划和知识点智能梳理',
        '职业规划：职业发展路径设计和技能差距分析',
        '效率提升：时间管理优化和信息智能处理',
        '决策支持：AI驱动的指导和优化建议'
      ]
    },
    enterprise: {
      points: [
        '技术咨询：数字化成熟度评估和转型战略规划',
        '方案设计：业务流程优化和系统集成方案',
        '实施支持：项目管理和技术指导服务',
        '效果优化：持续监控和改进计划制定'
      ]
    },
    academy: {
      points: [
        '实用工具：AI办公效率和智能创作工具应用',
        '场景实践：行业案例和技能实战训练',
        '能力评估：职业倾向分析和发展规划',
        '就业支持：简历优化和面试准备指导'
      ]
    },
    ecosystem: {
      points: [
        '学习平台：技术讲座和经验交流分享',
        '资源共享：学习资料和工具资源包',
        '创业支持：技术指导和资源对接服务',
        '创新网络：行业合作和市场机会'
      ]
    }
  }
};

export const serviceContent: ServiceContent = {
  en: {
    title: 'Our Services',
    description: 'Discover our comprehensive range of AI services designed to transform your business and prepare you for the future.',
    services: [
      {
        icon: ExperimentOutlined,
        title: 'AI Agent Innovation Center',
        description: 'As a future-oriented AI agent development and application platform, we focus on developing AI agent products for different scenarios and provide professional application training.',
      },
      {
        icon: ApiOutlined,
        title: 'Enterprise AI Solutions',
        description: 'We provide comprehensive enterprise AI solutions for Singapore businesses, helping them maintain competitiveness in the digital economy era.',
      },
      {
        icon: BookOutlined,
        title: 'Career Development Academy',
        description: 'Committed to becoming Singapore\'s leading AI vocational skills training institution, we are dedicated to helping every student master the essential AI skills for future work.',
      },
      {
        icon: TeamOutlined,
        title: 'Innovation Ecosystem Services',
        description: 'We are committed to building an open and shared AI innovation ecosystem that promotes technical exchange and collaboration.',
      },
    ],
  },
  zh: {
    title: '我们的服务',
    description: '探索我们全面的AI服务，为您的企业转型和未来发展提供支持。',
    services: [
      {
        icon: ExperimentOutlined,
        title: 'AI代理创新中心',
        description: '作为面向未来的AI代理开发与应用平台，我们专注于开发适应不同场景的AI代理产品，并提供专业的应用培训。',
      },
      {
        icon: ApiOutlined,
        title: '企业AI解决方案',
        description: '我们为新加坡企业提供全方位的企业AI解决方案，助力企业在数字经济时代保持竞争力。',
      },
      {
        icon: BookOutlined,
        title: '职业发展学院',
        description: '致力成为新加坡领先的AI职业技能培训机构，我们致力于帮助每一位学员掌握未来工作必备的AI技能。',
      },
      {
        icon: TeamOutlined,
        title: '创新生态服务',
        description: '我们致力于构建开放、共享的AI创新生态系统，促进技术交流与合作。',
      },
    ],
  },
};
