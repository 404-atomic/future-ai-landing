import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../../types/theme';

const gradient = keyframes`
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
`;

const wave = keyframes`
  2% {
    transform: translateX(1);
  }
  25% {
    transform: translateX(-25%);
  }
  50% {
    transform: translateX(-50%);
  }
  75% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(1);
  }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 120px 20px;
  position: relative;
  overflow: hidden;
  background: ${theme.colors.background};
  z-index: 1;

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-top: 180px;
  }
`;

const Wave = styled.div<{ delay: number; bottom: number; opacity: number }>`
  background: ${theme.colors.primary}40;
  border-radius: 1000% 1000% 0 0;
  position: absolute;
  width: 200%;
  height: 20em;
  animation: ${wave} ${props => props.delay}s linear infinite;
  transform: translate3d(0, 0, 0);
  opacity: ${props => props.opacity};
  bottom: ${props => props.bottom}em;
  left: 0;
  z-index: 0;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: ${theme.colors.text};
  text-shadow: none;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
    line-height: 1.3;
  }
`;

const HighlightText = styled.span`
  color: ${theme.colors.secondary};
`;

const SubtitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  z-index: 2;
  background: ${theme.colors.background}80;
  padding: 1rem;
  border-radius: 8px;
  max-width: 90%;
  
  @media (max-width: 768px) {
    margin-top: 1rem;
    padding: 0.75rem;
    max-width: 95%;
  }
`;

const Subtitle = styled.h2`
  margin: 0 auto;
  font-family: 'Courier New', Courier, monospace;
  letter-spacing: 0.1em;
  font-size: 1.2rem;
  color: ${theme.colors.text};
  text-shadow: none;
  line-height: 1.5;
  position: relative;
  
  &::after {
    content: '|';
    position: relative;
    margin-left: 0.1em;
    animation: ${blink} 1s step-end infinite;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    letter-spacing: 0.05em;
    max-width: 100%;
    padding: 0 0.25rem;
    line-height: 1.4;
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <Wave delay={10} bottom={-5} opacity={0.3} />
      <Wave delay={18} bottom={-8} opacity={0.28} />
      <Wave delay={20} bottom={-12} opacity={0.25} />
      <ContentWrapper>
        <Title>
          Empowering Digital <HighlightText>Singapore</HighlightText>,<br />
          Fostering Growth for All
        </Title>
        <SubtitleContainer>
          <Subtitle>
            FutureAI Hub - An innovative startup focused on AI applications and enterprise intelligence services.
          </Subtitle>
        </SubtitleContainer>
      </ContentWrapper>
    </HeroSection>
  );
};

export default Hero;
