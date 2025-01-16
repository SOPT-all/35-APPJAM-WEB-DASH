import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const headerStyle = style({
  height: '37.5rem',
  backgroundColor: vars.colors.gray02,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

export const lessonCount = style({
  ...vars.fonts.h5,
  color: vars.colors.gray06,
});

export const profileStyle = style({
  width: '3.2rem',
  height: '3.2rem',
  borderRadius: '50%',
  objectFit: 'cover',
  backgroundColor: vars.colors.gray01,
});

export const lessonNameStyle = style({
  ...vars.fonts.h4,

  marginBottom: '1.6rem',
});

export const cardStyle = style({
  display: 'inline-flex',
  padding: '1.6rem 2rem',
  alignItems: 'center',
  borderRadius: '4px',
  backgroundColor: vars.colors.white,
  gap: '0.2rem',
  width: '100%',
  boxShadow: '0px 0px 0.4rem 0px rgba(0, 0, 0, 0.10)',
});
export const thunderIconStyle = style({
  marginRight: '0.4rem',
});
