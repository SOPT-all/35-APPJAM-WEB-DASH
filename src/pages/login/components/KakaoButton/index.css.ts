import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const kakaoButtonStyle = style({
  width: '100%',
  padding: '1.6rem 9.5rem 1.6rem 9.5rem',

  backgroundColor: vars.colors.kakao01,

  cursor: 'pointer',
});
