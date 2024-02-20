import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '../theme/theme.css';

const toastInOut = keyframes({
  '0%': {
    transform: 'translateX(-50%) translateY(100%)',
  },
  '10%': {
    transform: 'translateX(-50%) translateY(-2rem)',
  },
  '90%': {
    transform: 'translateX(-50%) translateY(-2rem)',
  },
  '100%': {
    transform: 'translateX(-50%) translateY(100%)',
  },
});

export const toastClass = style({
  display: 'flex',
  justifyContent: 'center',
  color: vars.color,
  background: vars.secondaryBackground,
  position: 'fixed',
  bottom: '0',
  left: '50%',
  transform: 'translateX(-50%) translateY(100%)',
  borderRadius: '6rem',
  padding: '3rem 4rem',
  whiteSpace: 'nowrap',
});

export const toastActiveClass = style({
  animationName: toastInOut,
  animationDuration: '3s',
});
