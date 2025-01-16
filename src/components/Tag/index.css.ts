import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/styles/theme.css';

export const tagStyle = recipe({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: vars.colors.white,
  },
  variants: {
    type: {
      genre: {
        backgroundColor: vars.colors.main03,
      },
      level: {
        backgroundColor: vars.colors.sub07,
      },
      deadline: {
        backgroundColor: vars.colors.gray10,
      },
      search: {
        color: vars.colors.main03,
        backgroundColor: vars.colors.white,
      },
    },
    size: {
      small: {
        height: '1.8rem',
        borderRadius: '2px',
        padding: '0.4rem 0.6rem',
        gap: '1rem',
        ...vars.fonts.c1,
      },
      medium: {
        borderRadius: '2.4px',
        padding: '0.3rem 0.8rem',
        gap: '1.2rem',
        ...vars.fonts.b2,
      },
      large: {
        borderRadius: 2,
        border: `1px solid ${vars.colors.main03}`,
        padding: '0.2rem 0.6rem',
        gap: '1rem',
        ...vars.fonts.b7,
      },
      thumbnail: {
        borderRadius: '0px 4px 4px 0px',
        padding: '0.2rem 0.8rem',
        gap: '1rem',
        ...vars.fonts.c1,
      },
    },
  },
});
