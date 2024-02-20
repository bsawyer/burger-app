import { style } from '@vanilla-extract/css';

export const gridClass = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridGap: '2rem',
  '@media': {
    '(min-width: 768px)': {
      gridTemplateColumns: '1fr 1fr',
    },
    '(min-width: 1025px)': {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
  },
});
