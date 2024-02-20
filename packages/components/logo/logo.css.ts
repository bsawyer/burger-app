import { style } from '@vanilla-extract/css';
import { vars } from '../theme/theme.css';
import { iconClass } from '../icons/icon.css';

export const logoIconClass = style([
  iconClass,
  {
    stroke: '#000',
  },
]);

export const logoClass = style({
  background: vars.primaryColor,
  borderRadius: '50%',
  padding: '1rem',
  transform: 'rotate(-13deg)',
  display: 'flex',
});
