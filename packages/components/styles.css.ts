import { globalStyle, style, keyframes } from '@vanilla-extract/css';
import { vars } from './theme/theme.css';

export * from './theme/theme.css';
export * from './card/card.css';

export const linkClass = style({
  textTransform: 'uppercase',
  fontWeight: '500',
});

export const headerClass = style({
  display: 'flex',
  padding: '2rem',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: '9999',
  position: 'sticky',
  top: '0',
  height: '6.4rem',
});

export const bentoBoxClass = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  background: vars.cardBackground,
  overflow: 'hidden',
  width: '100%',
  '@media': {
    '(min-width: 768px)': {
      gridTemplateColumns: '1fr 1fr',
    },
  },
});

export const featuredClass = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '4rem',
  fontSize: '2rem',
});

const fadeIn = keyframes({
  '0%': { opacity: '0' },
  '100%': { opacity: '1' },
});

export const fadeInClass = style({
  opacity: '0',
  animationName: fadeIn,
  animationDuration: '200ms',
  animationFillMode: 'forwards',
});

export const backLinkClass = style({
  position: 'absolute',
  top: '2rem',
  left: '2rem',
  zIndex: '3',
});

export const cartClass = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '3rem',
  paddingTop: '6rem',
});

export const cartIconClass = style({
  position: 'relative',
  display: 'block',
});

export const totalClass = style({
  position: 'absolute',
  borderRadius: '100%',
  bottom: '-.5rem',
  right: '-.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '2.6rem',
  width: '2.6rem',
  lineHeight: '2.6rem',
  fontSize: '1.4rem',
  fontWeight: 'bold',
  border: '.3rem solid transparent',
});

export const totalActiveClass = style({
  background: vars.primaryColor,
  borderColor: vars.background,
  color: '#000',
});

export const cartItemClass = style({
  display: 'flex',
  alignItems: 'center',
  padding: '2rem 3rem',
  justifyContent: 'space-between',
  width: '100%',
});

export const cartItemInfoClass = style({
  display: 'flex',
  alignItems: 'center',
});

export const cartItemImageContainerClass = style({
  width: '6.4rem',
  aspectRatio: '1',
  borderRadius: '100%',
  overflow: 'hidden',
  position: 'relative',
  marginRight: '2rem',
});

export const cartFormClass = style({
  marginLeft: '2rem',
});

globalStyle('html, body', {
  margin: 0,
});

globalStyle('html', {
  color: vars.color,
  background: vars.background,
  fontSize: vars.fontBase,
  fontFamily: vars.fontFamily,
  height: '100%',
});

globalStyle('body', {
  fontSize: vars.fontSize,
  margin: ' 0 auto',
  paddingBottom: '3rem',
  width: '90vw',
  maxWidth: vars.maxWidth,
});

globalStyle('a', {
  textDecoration: 'none',
  color: vars.color,
});

globalStyle('[readonly]', {
  display: 'none',
});
