import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../types/theme';
import { useLanguage } from '../../context/LanguageContext';
import { aboutContent } from './content';

const AboutSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
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
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const TextContent = styled(motion.div)`
  text-align: left;

  p {
    color: ${theme.colors.text};
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 24px;
    opacity: 0.8;
    
    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    order: 2;
  }
`;

const ImageWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 80%;
    height: auto;
    object-fit: contain;
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    order: 1;
    
    img {
      max-width: 70%;
    }
  }
`;

const About: React.FC = () => {
  const { language } = useLanguage();
  const content = aboutContent[language];

  return (
    <AboutSection id="about">
      <Container>
        <Title>{content.title}</Title>
        <Description>{content.description}</Description>
        <ContentGrid>
          <TextContent
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {content.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </TextContent>
          <ImageWrapper
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="/about-image.png" 
              alt={content.imageAlt}
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
