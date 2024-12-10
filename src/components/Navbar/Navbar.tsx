import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { scroller } from 'react-scroll';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { theme } from '../../types/theme';
import { motion, AnimatePresence } from 'framer-motion';

const NavContainer = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${props => props.scrolled ? '70px' : '80px'};
  background: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'white'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.scrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : '0 2px 8px rgba(0, 0, 0, 0.06)'};
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Logo = styled(motion.div)`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.colors.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    background: ${theme.colors.secondary};
    border-radius: 50%;
  }
`;

const NavLinks = styled(motion.div)<{ isOpen: boolean }>`
  display: flex;
  gap: 32px;

  @media (max-width: 768px) {
    position: fixed;
    top: ${props => props.isOpen ? '70px' : '-100vh'};
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
    max-height: calc(100vh - 70px);
    overflow-y: auto;
  }
`;

const StyledNavItem = styled(motion.div)`
  color: #333;
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

const MenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${theme.colors.primary};
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.primary}10;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ to, children, onClick }) => {
  const handleClick = () => {
    scroller.scrollTo(to, {
      duration: 800,
      smooth: true,
      offset: -70
    });
    if (onClick) onClick();
  };

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

const MENU_ITEMS = [
  { to: 'features', label: 'Features' },
  { to: 'about', label: 'About' },
  { to: 'services', label: 'Services' },
  { to: 'products', label: 'Products' },
  { to: 'contact', label: 'Contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <NavContainer scrolled={scrolled}>
      <Logo
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          closeMenu();
        }}
      >
        FutureAI
      </Logo>
      
      <MenuButton
        onClick={toggleMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <CloseOutlined /> : <MenuOutlined />}
      </MenuButton>

      <NavLinks
        isOpen={isOpen}
        initial={false}
        animate={{ opacity: 1 }}
      >
        {MENU_ITEMS.map(({ to, label }) => (
          <NavItem
            key={to}
            to={to}
            onClick={closeMenu}
          >
            {label}
          </NavItem>
        ))}
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;
