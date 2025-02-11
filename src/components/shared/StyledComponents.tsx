import styled from 'styled-components';
import { theme } from '../../types/theme';

export const SectionTitle = styled.h2`
  font-size: 2.8rem;
  color: ${theme.colors.primary};
  margin-bottom: 24px;
  font-weight: 600;
  text-align: center;
  position: relative;
  display: inline-block;
  padding-bottom: 15px;
  left: 50%;
  transform: translateX(-50%);

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, ${theme.colors.primary} 0%, ${theme.colors.primary}88 100%);
    border-radius: 2px;
  }
`;
