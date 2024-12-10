import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../types/theme';

const ProductSection = styled.section`
  padding: 100px 0;
  background: #fafafa;
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

const ProductContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const TextContent = styled(motion.div)`
  @media (max-width: 992px) {
    order: 2;
  }
`;

const ProductTitle = styled.h3`
  color: ${theme.colors.primary};
  font-size: 2rem;
  margin-bottom: 24px;
  font-weight: 600;
`;

const ProductDescription = styled.p`
  color: #333;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 32px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 32px;
`;

const FeatureItem = styled.li`
  color: #333;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 16px;
  padding-left: 28px;
  position: relative;

  &:before {
    content: "—";
    color: ${theme.colors.primary};
    position: absolute;
    left: 0;
  }

  strong {
    color: ${theme.colors.primary};
    font-weight: 600;
  }
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  padding-bottom: 75%;
  background: #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 992px) {
    order: 1;
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
  }
`;

const Product: React.FC = () => {
  return (
    <ProductSection id="products">
      <Container>
        <SectionTitle>Core Product</SectionTitle>
        <ProductContent>
          <TextContent
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ProductTitle>CareerMateAI</ProductTitle>
            <ProductDescription>
              CareerMateAI is the first AI agent product launched by FutureAI Hub, an
              innovative AI-driven career development companion that provides 24/7 career
              development support for Singaporean professionals.
            </ProductDescription>
            <FeatureList>
              <FeatureItem>
                <strong>Continuous Companionship:</strong> Not just an advisor, but a growth partner
              </FeatureItem>
              <FeatureItem>
                <strong>Personalized Teaching:</strong> Providing customized advice based on individual characteristics
              </FeatureItem>
              <FeatureItem>
                <strong>Timely Feedback:</strong> Answering questions and providing direction at any time
              </FeatureItem>
              <FeatureItem>
                <strong>Professional and Reliable:</strong> Professional analysis based on massive data and deep learning
              </FeatureItem>
            </FeatureList>
            <ProductDescription>
              CareerMateAI can provide personalized career planning advice, skill
              improvement paths, and industry insights based on the user's career
              background, skill level, and career goals. Whether it's job search preparation,
              workplace promotion, or career transition planning, CareerMateAI can provide
              professional and timely guidance.
            </ProductDescription>
          </TextContent>
          <ImageWrapper
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="/product-image.jpg" 
              alt="CareerMateAI Interface"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </ImageWrapper>
        </ProductContent>
      </Container>
    </ProductSection>
  );
};

export default Product;
