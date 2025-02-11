import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../types/theme';
import { useLanguage } from '../../context/LanguageContext';
import { aboutContent } from './content';
import { SectionTitle } from '../shared/StyledComponents';

const AboutSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
  position: relative;
  overflow: hidden;
`;

const BackgroundImage = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0.04;
  z-index: 1;
  pointer-events: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%) blur(2px);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: ${theme.colors.text};
  opacity: 0.8;
  margin-bottom: 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const ContentWrapper = styled(motion.div)`
  max-width: 1900px;
  margin: 0 auto;
  padding: 0 20px;
  border-radius: 12px;
  backdrop-filter: blur(5px);
`;

const TextContent = styled.div`
  p {
    color: ${theme.colors.text};
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 24px;
    opacity: 0.9;
    text-align: center;
    text-justify: inter-word;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const About: React.FC = () => {
  const { language } = useLanguage();
  const content = aboutContent[language];

  return (
    <AboutSection id="about">
      <BackgroundImage
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.04 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <img 
          src="/about-image.png" 
          alt=""
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      </BackgroundImage>
      <Container>
        <SectionTitle>{content.title}</SectionTitle>
        <Description>{content.description}</Description>
        <ContentWrapper
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TextContent>
            {content.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </TextContent>
        </ContentWrapper>
      </Container>
    </AboutSection>
  );
};

export default About;
