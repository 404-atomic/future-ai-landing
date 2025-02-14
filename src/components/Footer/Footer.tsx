import React from 'react';
import styled from 'styled-components';
import { theme } from '../../types/theme';
import { useLanguage } from '../../context/LanguageContext';
import { footerContent } from './content';
import { EnvironmentOutlined, MailOutlined, GlobalOutlined } from '@ant-design/icons';

const FooterSection = styled.footer`
  background: #fff;
  padding: 80px 0 40px;
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 60px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const CompanyInfo = styled.div`
  h2 {
    font-size: 1.8rem;
    color: ${theme.colors.primary};
    margin-bottom: 20px;
    background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: ${theme.colors.text};
    margin-bottom: 30px;
  }
`;

const ContactInfo = styled.div`
  h3 {
    font-size: 1.4rem;
    color: ${theme.colors.text};
    margin-bottom: 24px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  font-size: 1.1rem;
  color: ${theme.colors.text};

  .anticon {
    font-size: 1.2em;
    color: ${theme.colors.primary};
  }

  a {
    color: ${theme.colors.text};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.colors.primary};
    }
  }
`;

const Logo = styled.img`
  width: 200px;
  padding-bottom: 10px;
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  color: ${theme.colors.text};
  font-size: 1rem;
`;

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const content = footerContent[language];

  return (
    <FooterSection>
      <Container>
        <Grid>
          <CompanyInfo>
            <Logo src="/future-ai-hub-logo.png" alt="Future AI Hub" />
            <p>{content.description}</p>
          </CompanyInfo>
          <ContactInfo>
            <h3>{content.contact.title}</h3>
            <ContactItem>
              <MailOutlined />
              <a href={`mailto:${content.contact.email}`}>{content.contact.email}</a>
            </ContactItem>
            <ContactItem>
              <EnvironmentOutlined />
              <span>{content.contact.location}</span>
            </ContactItem>
            <ContactItem>
              <GlobalOutlined />
              <a href={content.contact.website} target="_blank" rel="noopener noreferrer">
                {content.contact.website}
              </a>
            </ContactItem>
          </ContactInfo>
        </Grid>
        <Copyright>
          {content.copyright}
        </Copyright>
      </Container>
    </FooterSection>
  );
};

export default Footer;
