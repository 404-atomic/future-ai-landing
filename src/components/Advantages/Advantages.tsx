import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Carousel, Row, Col } from 'antd';
import { 
  TeamOutlined, 
  GlobalOutlined, 
  SolutionOutlined, 
  ClusterOutlined,
  DeploymentUnitOutlined,
  ToolOutlined,
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons';
import { useLanguage } from '../../context/LanguageContext';
import { advantagesContent } from './content';
import { theme } from '../../types/theme';
import { SectionTitle } from '../shared/StyledComponents';
import { CarouselRef } from 'antd/lib/carousel';

const AdvantagesSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
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

const StyledCarousel = styled(Carousel)`
  .slick-dots li button {
    background: ${theme.colors.primary}40 !important;
  }
  
  .slick-dots li.slick-active button {
    background: ${theme.colors.primary} !important;
  }

  .slick-track {
    display: flex !important;
    align-items: stretch;
  }

  .slick-slide {
    height: inherit !important;
    > div {
      height: 100%;
      > div {
        height: 100%;
      }
    }
  }

  .slick-list {
    padding-bottom: 20px;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  margin: 0 40px;
  padding-bottom: 40px;
`;

const CarouselButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  background: ${theme.colors.primary}20;
  color: ${theme.colors.primary};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.primary}40;
    color: ${theme.colors.primary};
  }

  &.prev {
    left: -50px;
  }

  &.next {
    right: -50px;
  }
`;

const AdvantageCard = styled(motion.div)`
  background: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  height: 100%;
  margin: 10px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex !important;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    opacity: 0.8;
  }
`;

const IconWrapper = styled.div`
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.primary}10;
  border-radius: 12px;

  .anticon {
    font-size: 28px;
    color: ${theme.colors.primary};
  }
`;

const Title = styled.h3`
  font-size: 1.25rem;
  color: ${theme.colors.text};
  margin-bottom: 12px;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 1rem;
  color: ${theme.colors.text};
  opacity: 0.8;
  line-height: 1.6;
  margin: 0;
`;

const BackgroundPattern = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0.05;
  background-image: radial-gradient(${theme.colors.primary} 1px, transparent 1px);
  background-size: 20px 20px;
  pointer-events: none;
`;

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'team':
      return <TeamOutlined />;
    case 'global':
      return <GlobalOutlined />;
    case 'solution':
      return <SolutionOutlined />;
    case 'cluster':
      return <ClusterOutlined />;
    case 'deployment-unit':
      return <DeploymentUnitOutlined />;
    case 'tool':
      return <ToolOutlined />;
    default:
      return <GlobalOutlined />;
  }
};

const Advantages: React.FC = () => {
  const { language } = useLanguage();
  const content = advantagesContent[language];
  const carouselRef = React.useRef<CarouselRef>(null);

  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  const handleNext = () => {
    carouselRef.current?.next();
  };

  // Create slides with 4 advantages per slide
  const slides = [];
  for (let i = 0; i < content.advantages.length; i += 4) {
    slides.push(content.advantages.slice(i, i + 4));
  }

  return (
    <AdvantagesSection id="advantages">
      <BackgroundPattern
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
      />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle style={{ marginBottom: '60px' }}>{content.title}</SectionTitle>
          
          <CarouselContainer>
            <CarouselButton className="prev" onClick={handlePrev}>
              <LeftOutlined />
            </CarouselButton>
            
            <StyledCarousel
              ref={carouselRef}
              dots={true}
              autoplay
              autoplaySpeed={5000}
              pauseOnHover
            >
              {slides.map((slide, slideIndex) => (
                <div key={slideIndex}>
                  <Row gutter={[24, 24]}>
                    {slide.map((advantage, index) => (
                      <Col xs={24} sm={12} md={6} key={index}>
                        <AdvantageCard
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                          <IconWrapper>
                            {getIcon(advantage.icon)}
                          </IconWrapper>
                          <Title>{advantage.title}</Title>
                          <Description>{advantage.description}</Description>
                        </AdvantageCard>
                      </Col>
                    ))}
                  </Row>
                </div>
              ))}
            </StyledCarousel>

            <CarouselButton className="next" onClick={handleNext}>
              <RightOutlined />
            </CarouselButton>
          </CarouselContainer>
        </motion.div>
      </Container>
    </AdvantagesSection>
  );
};

export default Advantages;
