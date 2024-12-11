import styled from 'styled-components';
import { theme } from '../../types/theme';

export const FooterSection = styled.footer`
  background: #FFFFFF;
  color: ${theme.colors.text};
  padding: 60px 0 0;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
`;

export const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const CompanyInfo = styled.div`
  flex: 1;
  max-width: 400px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Logo = styled.div`
  margin-bottom: 20px;

  img {
    height: 40px;
  }
`;

export const Description = styled.p`
  color: ${theme.colors.text};
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 24px;
  font-size: 0.95rem;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 16px;

  a {
    color: ${theme.colors.text};
    font-size: 20px;
    opacity: 0.7;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.04);

    &:hover {
      opacity: 1;
      color: ${theme.colors.primary};
      background: rgba(0, 0, 0, 0.06);
      transform: translateY(-2px);
    }
  }
`;

export const ContactGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

export const ContactGroup = styled.div`
  h4 {
    color: ${theme.colors.text};
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 16px;
    opacity: 0.5;
  }
`;

export const ContactIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  opacity: 0.7;
  width: 20px;
`;

export const ContactLink = styled.a`
  color: ${theme.colors.text};
  text-decoration: none;
  font-size: 0.95rem;
  opacity: 0.8;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;

  &:hover {
    opacity: 1;
    color: ${theme.colors.primary};
    transform: translateX(2px);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const BottomBar = styled.div`
  padding: 20px 0;
  margin-top: 40px;
  text-align: center;
  font-size: 0.9rem;
  color: ${theme.colors.text};
  opacity: 0.7;
`;
