import React from 'react';
import { Row, Col, Card } from 'antd';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RobotOutlined, CloudServerOutlined, CodeOutlined, BulbOutlined } from '@ant-design/icons';
import { theme } from '../../types/theme';

const ServiceSection = styled.section`
  padding: 80px 20px;
  background: linear-gradient(135deg, #fff 0%, #fff6f0 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: ${theme.colors.primary};
  font-size: 2.8rem;
  margin-bottom: 60px;
  font-weight: bold;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);

  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: ${theme.colors.primary};
  }
`;

const ServiceCard = styled(motion(Card))`
  height: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-align: center;
  padding: 32px 24px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  .anticon {
    font-size: 2.5rem;
    color: ${theme.colors.primary};
    margin-bottom: 20px;
  }

  h3 {
    color: ${theme.colors.primary};
    font-size: 1.5rem;
    margin-bottom: 15px;
    font-weight: 600;
  }

  p {
    color: #666;
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const services = [
  {
    icon: <RobotOutlined />,
    title: 'AI Model Development',
    description: 'Custom AI model development services including machine learning and deep learning solutions tailored to your needs.',
  },
  {
    icon: <CloudServerOutlined />,
    title: 'Cloud AI Services',
    description: 'Scalable cloud-based AI services supporting rapid deployment and flexible integration with existing systems.',
  },
  {
    icon: <CodeOutlined />,
    title: 'AI System Integration',
    description: 'Seamlessly integrate AI technology with your existing systems to enhance operational efficiency.',
  },
  {
    icon: <BulbOutlined />,
    title: 'AI Consulting',
    description: 'Expert AI technology consulting to guide your digital transformation journey with strategic insights.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Service: React.FC = () => {
  return (
    <ServiceSection id="services">
      <Container>
        <SectionTitle>Our Services</SectionTitle>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Row gutter={[32, 32]}>
            {services.map((service, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <ServiceCard
                  variants={itemVariants}
                  bordered={false}
                >
                  {service.icon}
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </ServiceCard>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </ServiceSection>
  );
};

export default Service;
