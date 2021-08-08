import * as tokens from '@shopify/polaris-tokens';
import {createTheme} from '@shopify/restyle';

const pxToNumber = (px: string) => {
  return parseInt(px.replace('px', ''), 10);
};

const base = {
  breakpoints: {
    s: 0,
    m: {
      height: 812,
      width: 0,
    },
    l: 768,
    xl: 1024,
  },
  colors: {
    background: tokens.colorWhite,
    danger: tokens.colorRed,
    onBackground: tokens.colorBlack,
    primary: tokens.colorIndigo,
  },
  spacing: {
    none: 0,
    s: pxToNumber(tokens.spacingBaseTight),
    m: pxToNumber(tokens.spacingBase),
    l: pxToNumber(tokens.spacingLoose),
    xs: pxToNumber(tokens.spacingExtraTight),
  },
};

type BaseThemeType = typeof base & {
  screenVariants: {[key: string]: any};
};

export const baseTheme: BaseThemeType = createTheme<BaseThemeType>({
  ...base,
  screenVariants: {
    defaults: {
      flex: 1,
      backgroundColor: 'background',
      paddingHorizontal: 'm',
    },
  },
});
