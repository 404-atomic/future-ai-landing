import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../types/theme';
import { useLanguage } from '../../context/LanguageContext';
import { productContent } from './content';
import { DashboardOutlined, AppstoreOutlined, SafetyCertificateOutlined } from '@ant-design/icons';

const ProductSection = styled.section`
  padding: 100px 0;
  background: #FFFFFF;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const Subtitle = styled.h3`
  font-size: 1.2rem;
  color: ${theme.colors.text};
  opacity: 0.7;
  margin-bottom: 16px;
  font-weight: normal;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  color: ${theme.colors.primary};
  margin-bottom: 24px;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: ${theme.colors.text};
  opacity: 0.8;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 80px;
`;

const ExtendedDescription = styled(Description)`
  margin: 80px auto;
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
    <ProductSection id="products">
      <Container>
        <Subtitle>{content.subtitle}</Subtitle>
        <Title>{content.title}</Title>
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
