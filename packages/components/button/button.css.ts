import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../theme/theme.css';

export const buttonClass = style({
  width: 'auto',
  margin: '0',
  background: vars.secondaryBackground,
  color: vars.color,
  border: `.2rem solid ${vars.secondaryBackground}`,
  borderRadius: '4rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem 2rem',
  fontSize: '2rem',
  fontWeight: '600',
  cursor: 'pointer',
});

export const buttonVariant = styleVariants({
  icon: [
    {
      padding: '1rem',
    },
  ],
  iconAlt: [
    {
      padding: '1rem',
      background: 'transparent',
      borderColor: 'transparent',
    },
  ],
  primary: [
    buttonClass,
    {
      color: vars.background,
      background: vars.primaryColor,
      borderColor: vars.primaryColor,
    },
  ],
  primaryAlt: [
    buttonClass,
    {
      color: vars.primaryColor,
      background: 'transparent',
      borderColor: vars.primaryColor,
    },
  ],
  secondary: [
    buttonClass,
    {
      background: 'transparent',
      color: vars.color,
      borderColor: vars.color,
    },
  ],
});
