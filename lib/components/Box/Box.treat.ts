import { css } from 'sku/treat';

export const width = css({
  full: {
    width: '100%',
  },
});

export const borderRadius = css(({ borderRadius: radius }) => ({
  standard: { borderRadius: radius.standard },
}));

export const transition = css({
  fast: {
    transition: 'transform .125s ease, opacity .125s ease',
  },
  touchable: {
    transition: 'transform 0.2s cubic-bezier(0.02, 1.505, 0.745, 1.235)',
  },
});
