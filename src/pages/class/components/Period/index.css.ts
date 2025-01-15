import { style } from '@vanilla-extract/css';
import { vars } from "@/styles/theme.css";

export const cardContent = style({
  display: 'flex',
  alignItems: 'center',
});

export const roundBox = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: vars.colors.main04,
  borderRadius: '4px',
  marginRight: '1rem',
  padding: '0.6rem 1.2rem',
});

