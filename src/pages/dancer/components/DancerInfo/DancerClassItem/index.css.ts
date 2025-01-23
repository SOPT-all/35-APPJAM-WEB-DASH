import { vars } from "@/styles/theme.css";
import { style } from '@vanilla-extract/css';

export const wrapperStyle = style({
  position: 'relative',
});

export const classImageStyle = style({
  width: '16.4rem',
  height: '9.1rem',

  borderRadius: '4px',
  backgroundColor: vars.colors.gray02
});

export const deadlineTagStyle = style({
  position: 'absolute',

  top: '0.8rem',
});

