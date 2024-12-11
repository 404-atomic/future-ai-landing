import { RobotOutlined, CloudServerOutlined, CodeOutlined, BulbOutlined } from '@ant-design/icons';

export const serviceContent = {
  en: {
    title: 'Our Services',
    services: [
      {
        icon: RobotOutlined,
        title: 'AI Model Development',
        description: 'Custom AI model development services including machine learning and deep learning solutions tailored to your needs.',
      },
      {
        icon: CloudServerOutlined,
        title: 'Cloud AI Services',
        description: 'Scalable cloud-based AI services supporting rapid deployment and flexible integration with existing systems.',
      },
      {
        icon: CodeOutlined,
        title: 'AI System Integration',
        description: 'Seamlessly integrate AI technology with your existing systems to enhance operational efficiency.',
      },
      {
        icon: BulbOutlined,
        title: 'AI Consulting',
        description: 'Expert AI technology consulting to guide your digital transformation journey with strategic insights.',
      },
    ],
  },
  zh: {
    title: '我们的服务',
    services: [
      {
        icon: RobotOutlined,
        title: 'AI模型开发',
        description: '包括机器学习和深度学习在内的定制AI模型开发服务，根据您的需求量身定制。',
      },
      {
        icon: CloudServerOutlined,
        title: '云端AI服务',
        description: '可扩展的云端AI服务，支持快速部署并灵活集成到现有系统中。',
      },
      {
        icon: CodeOutlined,
        title: 'AI系统集成',
        description: '将AI技术无缝集成到您的现有系统中，提升运营效率。',
      },
      {
        icon: BulbOutlined,
        title: 'AI咨询服务',
        description: '专业的AI技术咨询，以战略洞察指导您的数字化转型之旅。',
      },
    ],
  },
} as const;

export interface ServiceItem {
  icon: typeof RobotOutlined | typeof CloudServerOutlined | typeof CodeOutlined | typeof BulbOutlined;
  title: string;
  description: string;
}
