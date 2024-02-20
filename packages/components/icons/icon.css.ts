import { style } from '@vanilla-extract/css';
import { vars } from '../theme/theme.css';

export const iconClass = style({
  stroke: vars.color,
  fill: 'transparent',
  strokeWidth: '.15rem',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  width: vars.iconSize,
  height: vars.iconSize,
});
