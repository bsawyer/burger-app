import { style } from '@vanilla-extract/css';
import { vars } from '../theme/theme.css';

export const cardClass = style({
  display: 'flex',
  flexDirection: 'column',
  color: vars.cardColor,
  height: '100%',
  position: 'relative',
});

export const cardImageContainerClass = style({
  position: 'relative',
  aspectRatio: '16 / 9',
  width: '100%',
  flex: '1 0 auto',
});

export const cardNameClass = style({
  fontSize: '2.2rem',
  fontWeight: '500',
  padding: '3rem 2rem 0 2rem',
});

export const cardDescriptionClass = style({
  fontSize: '1.6rem',
  padding: '0 2rem',
  color: vars.secondaryColor,
});

export const cardPriceClass = style({
  padding: '1rem 2rem 3rem 2rem',
});

export const cardActiveClass = style({
  position: 'fixed',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
  zIndex: '99',
  transition: 'top 200ms, left 200ms, bottom 200ms, right 200ms',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  background: vars.background,
  selectors: {
    [`${cardClass} ~ main &`]: {
      background: 'transparent',
    },
  },
});

export const cardCoverClass = style({
  position: 'absolute',
  top: '0',
  left: '0',
  bottom: '0',
  right: '0',
  zIndex: '2',
  selectors: {
    [`${cardActiveClass} &`]: {
      zIndex: '1',
    },
  },
});

export const cardContentClass = style({
  maxWidth: `70rem`,
  height: '100%',
  background: vars.cardBackground,
  borderRadius: '2rem',
  border: `${vars.cardBorderSize} solid ${vars.cardBordercolor}`,
  overflow: 'hidden',
  zIndex: '2',
  position: 'relative',
  selectors: {
    [`${cardActiveClass} &`]: {
      background: 'transparent',
      width: '100vw',
      height: 'calc(100% - 10.4rem)',
    },
  },
});

export const cardBottomClass = style({
  background: vars.cardBackground,
  selectors: {
    [`${cardActiveClass} &`]: {
      height: '100%',
    },
  },
});

export const cardFormClass = style({
  display: 'none',
  justifyContent: 'center',
  selectors: {
    [`${cardActiveClass} &`]: {
      display: 'flex',
    },
  },
});
