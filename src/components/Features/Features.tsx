import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../types/theme';
import { useLanguage } from '../../context/LanguageContext';
import { featuresContent } from './content';
import { SectionTitle } from '../shared/StyledComponents';

const FeatureSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #fff6f0 0%, #fff 100%);
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: radial-gradient(circle at 0% 0%, rgba(255, 246, 240, 0.8) 0%, transparent 60%),
                radial-gradient(circle at 100% 100%, rgba(255, 246, 240, 0.8) 0%, transparent 60%);
    z-index: 1;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FeatureRow = styled(Row)`
  margin-bottom: 40px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const FeatureItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  padding: 30px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  height: 100%;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${theme.colors.primary};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  min-width: 60px;
  border-radius: 16px;
  background: ${theme.colors.primary}15;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24px;

  .anticon {
    font-size: 28px;
    color: ${theme.colors.primary};
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const FeatureTitle = styled.h3`
  color: ${theme.colors.primary};
  font-size: 1.4rem;
  margin-bottom: 12px;
  font-weight: 600;
`;

const FeatureDescription = styled.p`
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Features: React.FC = () => {
  const { language } = useLanguage();
  const content = featuresContent[language];

  return (
    <FeatureSection id="features">
      <Container>
        <SectionTitle>Features</SectionTitle>
        <SectionSubtitle>
          {content.sectionSubtitle}
        </SectionSubtitle>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <FeatureRow gutter={[32, 32]}>
            {content.features.map((feature, index) => (
              <Col xs={24} md={12} key={index}>
                <FeatureItem variants={itemVariants}>
                  <IconWrapper>
                    <feature.icon />
                  </IconWrapper>
                  <ContentWrapper>
                    <FeatureTitle>{feature.title}</FeatureTitle>
                    <FeatureDescription>{feature.description}</FeatureDescription>
                  </ContentWrapper>
                </FeatureItem>
              </Col>
            ))}
          </FeatureRow>
        </motion.div>
      </Container>
    </FeatureSection>
  );
};

export default Features;
