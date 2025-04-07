import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { scroller } from 'react-scroll';
import { Link } from 'react-router-dom';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { theme } from '../../types/theme';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { navContent, NavItem } from './content';

const NavContainer = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${props => props.scrolled ? '60px' : '70px'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.scrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none'};
  padding: 0 50px;
  display: flex;
  align-items: center;
  z-index: 1000;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0 20px;
    height: 60px;
  }
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 50px;

  @media (max-width: 768px) {
    justify-content: flex-start;
    gap: 0;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    height: 32px;
    transition: height 0.3s ease;
  }

  @media (max-width: 768px) {
    img {
      height: 28px;
    }
  }
`;

const NavLinks = styled(motion.div)<{ isOpen: boolean }>`
  display: flex;
  gap: 32px;

  @media (max-width: 768px) {
    position: fixed;
    top: ${props => props.isOpen ? '60px' : '-100vh'};
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    gap: 0;
    padding: 20px;
    transition: top 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    height: auto;
    max-height: calc(100vh - 60px);
    overflow-y: auto;
  }
`;

const StyledNavItem = styled(motion.div)`
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 20px;
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: ${theme.colors.primary};
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover {
    color: ${theme.colors.primary};
    background: ${theme.colors.primary}10;

    &::after {
      width: 30px;
    }
  }

  @media (max-width: 768px) {
    display: block;
    padding: 16px;
    text-align: center;
    border-radius: 0;
    border-bottom: 1px solid #eee;

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background: ${theme.colors.primary}10;
      
      &::after {
        width: 50px;
      }
    }
  }
`;

const MobileControls = styled.div`
  display: none;
  align-items: center;
  gap: 16px;
  margin-left: auto;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const DesktopLanguageToggle = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
  margin-left: auto;
  
  img {
    width: 24px;
    height: 24px;
    border-radius: 4px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const LanguageToggle = styled(motion.div)`
  display: none;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  img {
    width: 24px;
    height: 24px;
    border-radius: 4px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 768px) {
    display: flex;
    padding: 6px;
  }
`;

const MenuIcon = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  color: #333;
  font-size: 20px;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

interface NavigationItemProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  isPage?: boolean;
  isHashLink?: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ to, children, onClick, isPage, isHashLink }) => {
  const handleClick = () => {
    if (!isPage && !isHashLink) {
      // This is a section on the home page, use scroll
      scroller.scrollTo(to, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }
    if (onClick) onClick();
  };

  if (isPage) {
    return (
      <Link to={to} style={{ textDecoration: 'none' }}>
        <StyledNavItem
          onClick={onClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {children}
        </StyledNavItem>
      </Link>
    );
  }

  if (isHashLink) {
    return (
      <Link to={to} style={{ textDecoration: 'none' }}>
        <StyledNavItem
          onClick={onClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {children}
        </StyledNavItem>
      </Link>
    );
  }

  return (
    <StyledNavItem
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </StyledNavItem>
  );
};

interface MenuItem {
  to: string;
  label: NavItem;
  isPage?: boolean;
  isHashLink?: boolean;
}

const MENU_ITEMS: MenuItem[] = [
  { to: 'features', label: 'features' },
  { to: 'about', label: 'about' },
  { to: 'vision-mission', label: 'vision' },
  { to: 'advantages', label: 'advantages' },
  { to: 'services', label: 'services' },
  { to: 'blog', label: 'blog'},
  { to: 'contact', label: 'contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const content = navContent[language];

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavContainer scrolled={scrolled}>
      <NavContent>
        <Logo onClick={() => window.scrollTo(0, 0)}>
          <img src="/future-ai-hub-logo.png" alt="Logo" />
        </Logo>
        <NavLinks isOpen={isOpen}>
          {MENU_ITEMS.map((item) => (
            <NavigationItem
              key={item.label}
              to={item.to}
              onClick={isOpen ? () => setIsOpen(false) : undefined}
              isPage={item.isPage}
              isHashLink={item.isHashLink}
            >
              {content[item.label]}
            </NavigationItem>
          ))}
        </NavLinks>
        <DesktopLanguageToggle
          onClick={handleLanguageToggle}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src={language === 'en' ? '/flags/en.png' : '/flags/zh.png'} 
            alt={language === 'en' ? 'English' : '中文'}
          />
        </DesktopLanguageToggle>
        <MobileControls>
          <LanguageToggle
            onClick={handleLanguageToggle}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src={language === 'en' ? '/flags/en.png' : '/flags/zh.png'} 
              alt={language === 'en' ? 'English' : '中文'}
            />
          </LanguageToggle>
          <MenuIcon
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <CloseOutlined /> : <MenuOutlined />}
          </MenuIcon>
        </MobileControls>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar;
