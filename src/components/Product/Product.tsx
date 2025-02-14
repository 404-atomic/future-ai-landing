import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../types/theme';
import { useLanguage } from '../../context/LanguageContext';
import { productContent } from './content';
import { DashboardOutlined, AppstoreOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import { SectionTitle } from '../shared/StyledComponents';

const ProductSection = styled.section`
  padding-top: 100px;
  background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
  position: relative;
  overflow: hidden;
`;

const BackgroundImage = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  width: 80%;
  height: 80%;
  opacity: 0.1;
  z-index: 1;
  pointer-events: none;

  img {
    width: 100%;
    height: 80%;
    object-fit: cover;
    filter: grayscale(100%) blur(1px);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const Subtitle = styled.h3`
  font-size: 1.2rem;
  color: ${theme.colors.text};
  opacity: 0.7;
  margin-bottom: 16px;
  font-weight: normal;
  justify-content: center;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: ${theme.colors.text};
  opacity: 0.8;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 80px;
  justify-content: center;
  text-align: center;
`;

const ExtendedDescription = styled(Description)`
  margin: 40px auto;
  font-style: italic;
  padding: 32px;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const FeatureCard = styled(motion.div)`
  text-align: center;
`;

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  .anticon {
    font-size: 48px;
    color: ${theme.colors.primary};
  }
`;

const FeatureTitle = styled.h4`
  font-size: 1.5rem;
  color: ${theme.colors.text};
  margin-bottom: 16px;
  font-weight: 600;
`;

const FeatureDescription = styled.p`
  font-size: 1.1rem;
  color: ${theme.colors.text};
  opacity: 0.8;
  line-height: 1.6;
  max-width: 300px;
  margin: 0 auto;
`;

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
`;

const AnimatedTitle = styled(SectionTitle)`
  font-size: 3.8rem;
  letter-spacing: 2px;
  background: linear-gradient(
    130deg,
    #FF6600 0%,
    #FF8533 15%,
    #E2B33E 30%,
    #FF6600 45%,
    #FFB366 60%,
    #FF8533 75%,
    #FF6600 85%,
    #E2B33E 100%,
    #FF6600 100%
  );
  background-size: 200% 200%;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${gradientAnimation} 7s ease infinite;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Product: React.FC = () => {
  const { language } = useLanguage();
  const content = productContent[language];

  const features = [
    {
      icon: <DashboardOutlined />,
      title: content.product.features[0].title,
      description: content.product.features[0].description
    },
    {
      icon: <AppstoreOutlined />,
      title: content.product.features[1].title,
      description: content.product.features[1].description
    },
    {
      icon: <SafetyCertificateOutlined />,
      title: content.product.features[2].title,
      description: content.product.features[2].description
    }
  ];

  return (
    <ProductSection id="product">
      <BackgroundImage
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.04 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <img 
          src="/connecting.jpg" 
          alt=""
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      </BackgroundImage>
      <Container>
        <Subtitle>{content.subtitle}</Subtitle>
        <AnimatedTitle>{content.title}</AnimatedTitle>
        <Description>{content.description}</Description>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <IconWrapper>
                {feature.icon}
              </IconWrapper>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
        <ExtendedDescription>{content.extendedDescription}</ExtendedDescription>
      </Container>
    </ProductSection>
  );
};

export default Product;
