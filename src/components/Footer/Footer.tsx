import React from 'react';
import styled from 'styled-components';
import { GithubOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';
import { theme } from '../../types/theme';

const FooterSection = styled.footer`
  background: linear-gradient(135deg, #fff6f0 0%, #fff 100%);
  color: ${theme.colors.text};
  padding: 60px 0 30px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
  color: ${theme.colors.primary};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: ${theme.colors.primary};
  }
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 12px;
`;

const StyledLink = styled.a`
  color: ${theme.colors.text};
  text-decoration: none;
  font-size: 1rem;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
    color: ${theme.colors.primary};
  }
`;

const Description = styled.p`
  color: ${theme.colors.text};
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;

  a {
    color: ${theme.colors.text};
    font-size: 20px;
    opacity: 0.8;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
      color: ${theme.colors.primary};
    }
  }
`;

const BottomBar = styled.div`
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 20px 20px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  color: ${theme.colors.text};
  opacity: 0.8;
  font-size: 0.9rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterSection>
      <Container>
        <Column>
          <Title>About Us</Title>
          <Description>
            FutureAI Hub is committed to promoting the application of AI technology in Singapore,
            helping enterprises and individuals achieve continuous growth in the digital era.
          </Description>
          <SocialLinks>
            <StyledLink href="https://twitter.com/futureaihub" target="_blank" rel="noopener noreferrer">
              <TwitterOutlined />
            </StyledLink>
            <StyledLink href="https://linkedin.com/company/futureaihub" target="_blank" rel="noopener noreferrer">
              <LinkedinOutlined />
            </StyledLink>
            <StyledLink href="https://github.com/futureaihub" target="_blank" rel="noopener noreferrer">
              <GithubOutlined />
            </StyledLink>
          </SocialLinks>
        </Column>

        <Column>
          <Title>Quick Links</Title>
          <LinkList>
            <LinkItem>
              <StyledLink href="#features">Features</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink href="#about">About</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink href="#services">Services</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink href="#products">Products</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink href="#contact">Contact</StyledLink>
            </LinkItem>
          </LinkList>
        </Column>

        <Column>
          <Title>Contact Information</Title>
          <LinkList>
            <LinkItem>
              <StyledLink href="mailto:info@futureaihub.sg">Email: info@futureaihub.sg</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink href="tel:+6512345678">Phone: +65 1234 5678</StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink href="#">Address: Singapore Central Business District</StyledLink>
            </LinkItem>
          </LinkList>
        </Column>
      </Container>
      <BottomBar>
        &copy; {new Date().getFullYear()} FutureAI Hub. All rights reserved.
      </BottomBar>
    </FooterSection>
  );
};

export default Footer;
