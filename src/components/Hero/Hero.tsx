import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { theme } from '../../types/theme';
import { useLanguage } from '../../context/LanguageContext';
import { heroContent } from './content';
import { RightOutlined } from '@ant-design/icons';

// Animations
const animations = {
  wave: keyframes`
    2% { transform: translateX(1); }
    25% { transform: translateX(-25%); }
    50% { transform: translateX(-50%); }
    75% { transform: translateX(-25%); }
    100% { transform: translateX(1); }
  `,
  
  shimmer: keyframes`
    0% { background-position: -1000px 0; }
    100% { background-position: 1000px 0; }
  `,
  
  gradient: keyframes`
    0% { background-position: 0% 0%; }
    50% { background-position: 100% 100%; }
    100% { background-position: 0% 0%; }
  `,
  
  blink: keyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  `,
  
  typewriter: keyframes`
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  `,
  
  fadeIn: keyframes`
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,
  
  cursor: keyframes`
    from, to {
      border-color: transparent;
    }
    50% {
      border-color: ${theme.colors.primary};
    }
  `,
};

// Styled Components
const HeroSection = styled.section`
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0px 20px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(255,102,0,0.05) 0%, rgba(226,179,62,0.1) 100%);
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 50% 50%, 
      rgba(255,102,0,0.15) 0%, 
      rgba(226,179,62,0.08) 50%,
      rgba(255,102,0,0.05) 100%
    );
    animation: ${animations.gradient} 15s ease infinite;
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 0;
    justify-content: flex-start;
    min-height: 90vh;
    text-align: left;
  }
`;

const Wave = styled.div<{ delay: number; bottom: number; opacity: number }>`
  background: linear-gradient(135deg, 
    ${theme.colors.primary}40 0%, 
    ${theme.colors.secondary}50 50%,
    ${theme.colors.primary}40 100%
  );
  border-radius: 1000% 1000% 0 0;
  position: absolute;
  width: 200%;
  height: 20em;
  animation: 
    ${animations.wave} ${props => props.delay}s linear infinite,
    ${animations.shimmer} ${props => props.delay * 1.5}s linear infinite;
  transform: translate3d(0, 0, 0);
  opacity: ${props => props.opacity * 1.5};
  bottom: ${props => props.bottom}em;
  left: 0;
  z-index: 0;
  backdrop-filter: blur(8px);
  box-shadow: 
    0 0 20px rgba(255, 102, 0, 0.2),
    inset 0 0 50px rgba(226, 179, 62, 0.1);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    animation: ${animations.shimmer} ${props => props.delay * 0.8}s linear infinite;
  }

  @media (max-width: 768px) {
    height: 15em;
    opacity: ${props => props.opacity * 1.2};
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1700px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    align-items: flex-start;
    padding: 0 24px;
    margin-top: 25vh;
  }

  @media (max-width: 480px) {
    margin-top: 20vh;
  }
`;

const Title = styled.h1`
  font-size: 5.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: ${theme.colors.text};
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin-bottom: 1.2rem;
    line-height: 1.15;
    text-align: left;
    max-width: 90%;
    br {
      display: none;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    max-width: 100%;
  }
`;

const HighlightText = styled.span`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const SubtitleContainer = styled.div`
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 10px;
  }
`;

const SubtitleWrapper = styled.div`
  position: relative;
  width: fit-content;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const Subtitle = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.05em;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
    text-align: left;
    margin: 0;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.1em;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    max-width: 100%;
  }
`;

const NavLink = styled(motion(Link))`
  margin-top: 40px;
  padding: 16px 32px;
  font-size: 1.1rem;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;

  .anticon {
    font-size: 0.9em;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);

    .anticon {
      transform: translateX(4px);
    }
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const DocLink = styled(NavLink)`
  background: transparent;
  border: 2px solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

// Wave configuration
const WAVE_CONFIG = [
  { delay: 10, bottom: -5, opacity: 0.3 },
  { delay: 18, bottom: -8, opacity: 0.28 },
  { delay: 20, bottom: -12, opacity: 0.25 }
] as const;

// Hero Component
const Hero: React.FC = () => {
  const { language } = useLanguage();
  const content = heroContent[language];

  return (
    <HeroSection>
      {WAVE_CONFIG.map((config, index) => (
        <Wave key={index} {...config} />
      ))}
      <ContentWrapper>
        <Title>
          {content.title.part1}{' '}
          <HighlightText>{content.title.highlight}</HighlightText>
          {' '}{content.title.part2}
        </Title>
        <SubtitleContainer>
          <SubtitleWrapper>
            <Subtitle>
              {content.subtitle}
            </Subtitle>
          </SubtitleWrapper>
        </SubtitleContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <ButtonsContainer>
            <DocLink
              to="https://404-984da704.mintlify.app/"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {content.documentation}
              <RightOutlined />
            </DocLink>
          </ButtonsContainer>
        </motion.div>
      </ContentWrapper>
    </HeroSection>
  );
};

export default Hero;
