import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../types/theme';

const AboutSection = styled.section`
  padding: 100px 0;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  color: ${theme.colors.primary};
  font-size: 2.8rem;
  margin-bottom: 60px;
  font-weight: bold;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 60px;
    height: 3px;
    background: ${theme.colors.primary};
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const TextContent = styled(motion.div)`
  p {
    color: #333;
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 24px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ImageWrapper = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: transparent;

  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 20px;
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1));
  }

  @media (max-width: 768px) {
    padding: 10px;
    margin-top: 30px;
  }
`;

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>About Us</SectionTitle>
        <ContentGrid>
          <TextContent
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              FutureAI Hub is a forward-thinking AI solutions provider based in Singapore,
              dedicated to transforming businesses through innovative artificial intelligence
              technologies.
            </p>
            <p>
              Our mission is to make AI technology accessible and practical for businesses
              of all sizes. We combine deep technical expertise with a thorough understanding
              of the local market to deliver solutions that drive real business value.
            </p>
            <p>
              With a focus on practical applications and sustainable growth, we help
              organizations navigate their digital transformation journey and harness
              the power of AI to stay competitive in today's rapidly evolving landscape.
            </p>
          </TextContent>
          <ImageWrapper
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 0.9 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="/image1.png" 
              alt="FutureAI Hub Team"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </ImageWrapper>
        </ContentGrid>
      </Container>
    </AboutSection>
  );
};

export default About;
