import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Collapse } from 'antd';
import { theme } from '../../types/theme';
import { useLanguage } from '../../context/LanguageContext';
import { serviceContent, extendedContent, ServiceKey } from './content';
import { SectionTitle } from '../shared/StyledComponents';

const { Panel } = Collapse;

const ServiceSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #fff6f0 0%, #fff 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Description = styled.p`
  text-align: center;
  color: ${theme.colors.text};
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto 60px;
  opacity: 0.8;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 30px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledCollapse = styled(Collapse)`
  background: white;
  border-radius: 12px !important;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: none !important;
  height: 500px !important;

  .ant-collapse-item {
    border-bottom: none !important;
  }

  .ant-collapse-header {
    padding: 28px 24px !important;
    align-items: center !important;
    background: white;
    transition: all 0.3s ease;
    
    &:hover {
      background: ${theme.colors.background};
    }
  }

  .ant-collapse-content {
    border-top: 1px solid ${theme.colors.background} !important;
  }

  .ant-collapse-content-box {
    padding: 10px 24px !important;
    font-size: 1rem;
    line-height: 1.6;
    color: ${theme.colors.text};
    background: ${theme.colors.background};
  }

  .ant-collapse-arrow {
    color: ${theme.colors.primary} !important;
    font-size: 16px !important;
    transition: transform 0.3s ease !important;
  }

  .ant-collapse-item-active .ant-collapse-arrow {
    transform: rotate(0deg) !important;
  }

  @media (max-width: 768px) {
    height: auto !important;
  }
`;

const ServiceHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

const ServiceIcon = styled.div`
  font-size: 24px;
  color: ${theme.colors.primary};
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

const ServiceTitle = styled.h3`
  margin: 0;
  color: ${theme.colors.primary};
  font-size: 1.5rem;
  font-weight: 500;
  flex-grow: 1;
`;

const ExtendedDescription = styled.div`
  color: ${theme.colors.text};
  font-size: 1rem;
  line-height: 1.8;
  opacity: 0.85;

  p {
    margin-bottom: 16px;
  }

  ul {
    margin: 16px 0 0 0;
    padding-left: 20px;
    list-style-type: none;
  }

  li {
    margin-bottom: 12px;
    position: relative;
    padding-left: 24px;

    &:before {
      content: "•";
      position: absolute;
      left: 0;
      color: ${theme.colors.primary};
      font-weight: bold;
    }
  }
`;

const Service: React.FC = () => {
  const { language } = useLanguage();
  const content = serviceContent[language];
  const extended = extendedContent[language];

  const serviceKeys: ServiceKey[] = ['agent', 'enterprise', 'academy', 'ecosystem'];

  return (
    <ServiceSection id="services">
      <Container>
        <SectionTitle>{content.title}</SectionTitle>
        <Description>{content.description}</Description>
        <ServicesGrid>
          {content.services.map((service, index) => {
            const ServiceIconComponent = service.icon;
            const extendedPoints = extended[serviceKeys[index]].points;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <StyledCollapse collapsible="disabled" defaultActiveKey={[index]}>
                  <Panel
                    header={
                      <ServiceHeader>
                        <ServiceIcon>
                          <ServiceIconComponent />
                        </ServiceIcon>
                        <ServiceTitle>{service.title}</ServiceTitle>
                      </ServiceHeader>
                    }
                    key={index}
                  >
                    <ExtendedDescription>
                      <p>{service.description}</p>
                      <ul>
                        {extendedPoints.map((point: string, idx: number) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </ExtendedDescription>
                  </Panel>
                </StyledCollapse>
              </motion.div>
            );
          })}
        </ServicesGrid>
      </Container>
    </ServiceSection>
  );
};

export default Service;
