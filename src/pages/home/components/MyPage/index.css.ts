import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const wrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  width: '31.2rem',
  height: '100vh',

  overflow: 'auto',

  position: 'fixed',
  right: '0',

  backgroundColor: vars.colors.white,
});

export const visibleStyle = style({
  position: 'fixed',
  right: '0',
  zIndex: 6,

  width: '100%',
  height: '100%',

  transform: 'translateX(0)',
  opacity: 1,
  transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
});

export const invisibleStyle = style({
  position: 'fixed',
  height: '100vh',
  right: '0',
  zIndex: 6,

  transform: 'translateX(31.2rem)',
  opacity: 0,
  transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
});
