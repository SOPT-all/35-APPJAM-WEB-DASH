import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const infoComponentStyle = style({
  margin: '0 auto',
  padding: '2rem',

  width: '100%',

  background: vars.colors.white,
  borderRadius: '4px',
});

export const textLabelStyle = style({
  width: '4.4rem',
});