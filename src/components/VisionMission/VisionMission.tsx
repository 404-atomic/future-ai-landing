import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Row, Col } from 'antd';
import { RocketOutlined, EyeOutlined, StarOutlined } from '@ant-design/icons';
import { useLanguage } from '../../context/LanguageContext';
import { visionMissionContent } from './content';
import { theme } from '../../types/theme';
import { SectionTitle } from '../shared/StyledComponents';

const VisionMissionSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #fff6f0 0%, #fff 100%);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const StyledCard = styled(motion.div)`
  padding: 40px;
  background: transparent;
  transition: all 0.4s ease;
  height: 100%;
  border-radius: 12px;
  
  &:hover {
    background: ${theme.colors.secondary}10;
  }
`;

const CardHeader = styled.div`
  margin-bottom: 32px;
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

  .anticon {
    font-size: 28px;
    color: ${theme.colors.primary};
    opacity: 0.8;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  color: ${theme.colors.primary};
  margin: 0;
  font-weight: 500;
  letter-spacing: -0.5px;
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: ${theme.colors.text};
  margin-bottom: 32px;
  line-height: 1.6;
  opacity: 0.8;
`;

const PointsList = styled(motion.div)`
  display: grid;
  gap: 16px;
`;

const Point = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  padding: 8px 0;
  
  &::before {
    content: "";
    width: 6px;
    height: 6px;
    background: ${theme.colors.primary};
    border-radius: 50%;
    margin-top: 8px;
    margin-right: 16px;
    opacity: 0.6;
  }

  span {
    font-size: 1.05rem;
    line-height: 1.5;
    color: ${theme.colors.text};
    opacity: 0.9;
  }
`;

const ValuesGrid = styled.div`
  margin-top: 80px;
`;

const ValueCard = styled(motion.div)`
  padding: 32px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  height: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary});
    opacity: 0;
    transition: all 0.4s ease;
  }

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
    
    .value-icon {
      transform: scale(1.1) rotate(5deg);
      background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
      
      .anticon {
        color: white;
      }
    }
  }
`;

const ValueIconWrapper = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.primary}15;
  margin-bottom: 24px;
  transition: all 0.4s ease;
  
  .anticon {
    font-size: 28px;
    color: ${theme.colors.primary};
    transition: all 0.4s ease;
  }
`;

const ValueTitle = styled.h4`
  font-size: 1.3rem;
  color: ${theme.colors.primary};
  margin: 0 0 12px 0;
  font-weight: 500;
`;

const ValueDescription = styled.p`
  font-size: 1rem;
  color: ${theme.colors.text};
  margin: 0;
  line-height: 1.6;
  opacity: 0.85;
`;

const VisionMission: React.FC = () => {
  const { language } = useLanguage();
  const content = visionMissionContent[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const pointVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <VisionMissionSection id="vision-mission">
      <Container>
        <SectionTitle style={{ marginBottom: '60px' }}>{content.values.title}</SectionTitle>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row gutter={[48, 48]}>
            <Col xs={24} lg={12}>
              <StyledCard variants={cardVariants}>
                <CardHeader>
                  <IconWrapper>
                    <RocketOutlined />
                  </IconWrapper>
                  <CardTitle>{content.mission.title}</CardTitle>
                </CardHeader>
                <Description
                  variants={cardVariants}
                >
                  {content.mission.description}
                </Description>
                <PointsList variants={containerVariants}>
                  {content.mission.points.map((point, index) => (
                    <Point
                      key={index}
                      variants={pointVariants}
                    >
                      <span>{point}</span>
                    </Point>
                  ))}
                </PointsList>
              </StyledCard>
            </Col>
            <Col xs={24} lg={12}>
              <StyledCard variants={cardVariants}>
                <CardHeader>
                  <IconWrapper>
                    <EyeOutlined />
                  </IconWrapper>
                  <CardTitle>{content.vision.title}</CardTitle>
                </CardHeader>
                <Description
                  variants={cardVariants}
                >
                  {content.vision.description}
                </Description>
                <PointsList variants={containerVariants}>
                  {content.vision.points.map((point, index) => (
                    <Point
                      key={index}
                      variants={pointVariants}
                    >
                      <span>{point}</span>
                    </Point>
                  ))}
                </PointsList>
              </StyledCard>
            </Col>
          </Row>
        </motion.div>
        <ValuesGrid>
          <Row gutter={[32, 32]}>
            {content.values.items.map((value, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <ValueCard
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  <ValueIconWrapper className="value-icon">
                    <StarOutlined />
                  </ValueIconWrapper>
                  <ValueTitle>{value.key}</ValueTitle>
                  <ValueDescription>{value.description}</ValueDescription>
                </ValueCard>
              </Col>
            ))}
          </Row>
        </ValuesGrid>
      </Container>
    </VisionMissionSection>
  );
};

export default VisionMission;
