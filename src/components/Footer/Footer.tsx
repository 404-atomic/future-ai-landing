import React from 'react';
import { 
  TwitterOutlined, 
  LinkedinFilled, 
  GithubOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  TeamOutlined,
  CustomerServiceOutlined,
  EnvironmentOutlined
} from '@ant-design/icons';
import { useLanguage } from '../../context/LanguageContext';
import { footerContent } from './content';
import {
  FooterSection,
  MainContent,
  TopSection,
  CompanyInfo,
  Logo,
  Description,
  SocialLinks,
  ContactGrid,
  ContactGroup,
  ContactLink,
  ContactIcon,
  BottomBar
} from './styles';

type Language = 'en' | 'zh';
type SocialPlatform = keyof typeof footerContent[Language]['socialLinks'];

interface ContactLink {
  href: string;
  text: string;
}

interface ContactSection {
  title: string;
  links: ContactLink[];
}

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const content = footerContent[language as Language];

  const socialIcons = {
    twitter: <TwitterOutlined />,
    linkedin: <LinkedinFilled />,
    github: <GithubOutlined />
  };

  const getContactIcon = (href: string) => {
    if (href.startsWith('mailto:')) return <MailOutlined />;
    if (href.startsWith('tel:')) return <PhoneOutlined />;
    if (href.startsWith('http')) return <GlobalOutlined />;
    if (href.includes('careers')) return <TeamOutlined />;
    if (href.includes('support')) return <CustomerServiceOutlined />;
    if (href === '#') return <EnvironmentOutlined />;
    return <MailOutlined />;
  };

  return (
    <FooterSection>
      <MainContent>
        <TopSection>
          <CompanyInfo>
            <Logo>
              <img src="/future-ai-hub-logo.png" alt="FutureAI Hub" />
            </Logo>
            <Description>{content.description}</Description>
            <SocialLinks>
              {(Object.entries(content.socialLinks) as [SocialPlatform, string][]).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${platform}`}
                >
                  {socialIcons[platform]}
                </a>
              ))}
            </SocialLinks>
          </CompanyInfo>

          <ContactGrid>
            {Object.entries(content.contact).map(([section, data]) => {
              const contactData = data as ContactSection;
              return (
                <ContactGroup key={section}>
                  <h4>{contactData.title}</h4>
                  {contactData.links.map((link, index) => (
                    <ContactLink
                      key={index}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <ContactIcon>{getContactIcon(link.href)}</ContactIcon>
                      {link.text}
                    </ContactLink>
                  ))}
                </ContactGroup>
              );
            })}
          </ContactGrid>
        </TopSection>
      </MainContent>

      <BottomBar>
        {content.copyright.replace('{year}', new Date().getFullYear().toString())}
      </BottomBar>
    </FooterSection>
  );
};

export default Footer;
