import "styled-components";

declare module "styled-components" {
  export interface breakpointType {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
  }
  export interface BorderRadiusType {
    none: string;
    sm: string;
    base: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    full: string;
  }
  export interface ColorType {
    primary: string;
    secondary: string;
    tertiary: string;
    transparent: string;
    lightGreen: string;
    green: string;
    darkBlue: string;

    lightGray: string;
    darkGray: string;
    darkerGray: string;

    lightBlue: string;

    dropdown: string;

    white: string;
    black: string;
    orange: string;
    red: string;
    danger: string;
  }

  export interface FontType {
    primary: string;
    secondary: string;
    poppins: string;
    roboto: string;
    robotoslab: string;
    nunito: string;
  }

  export interface FontSizeType {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
    "4.5xl": string;
    "5xl": string;
    "6xl": string;
    "9xl": string;
  }

  export interface FontWeightType {
    thin: number;
    extraLight: number;
    light: number;
    regular: number;
    medium: number;
    semiBold: number;
    bold: number;
    extraBold: number;
    black: number;
  }
  export interface LetterSpacingType {
    tighter: string;
    tight: string;
    normal: string;
    wide: string;
    wider: string;
    widest: string;
  }
  export interface LetterHeightType {
    normal: string;
    none: string;
    shorter: string;
    short: string;
    base: string;
    tall: string;
    taller: string;
    tallest: string;
  }
  export interface MediaQueryType {
    small: (args: TemplateStringsArray) => string;
    medium: (args: TemplateStringsArray) => string;
    large: (args: TemplateStringsArray) => string;
    up: (
      breakpoint: string,
      vertical?: boolean
    ) => (args: TemplateStringsArray) => FlattenSimpleInterpolation;
    down: (
      breakpoint: string,
      vertical?: boolean
    ) => (args: TemplateStringsArray) => FlattenSimpleInterpolation;
    between: (
      breakpointMin: string,
      breakpointMax: string,
      vertical?: boolean
    ) => (args: TemplateStringsArray) => FlattenSimpleInterpolation;
  }
  export interface SpaceType {
    px: string;
    0: string;
    0.5: string;
    1: string;
    1.5: string;
    2: string;
    2.5: string;
    3: string;
    3.5: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    12: string;
    14: string;
    15: string;
    16: string;
    18: string;
    19: string;
    20: string;
    24: string;
    28: string;
    32: string;
    36: string;
    40: string;
    44: string;
    48: string;
    52: string;
    56: string;
    60: string;
    64: string;
    72: string;
    80: string;
    96: string;
  }
  export interface SizeType extends SpaceType {
    full: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
    "5xl": string;
    "6xl": string;
  }
  export interface ZindexType {
    hide: number;
    auto: string;
    base: number;
    docked: number;
    dropdown: number;
    sticky: number;
    banner: number;
    overlay: number;
    modal: number;
    popover: number;
    skipLink: number;
    toast: number;
    tooltip: number;
  }
  export interface DefaultTheme {
    borderRadius: BorderRadiusType;
    colors: ColorType;
    fonts: FontType;
    fontSizes: FontSizeType;
    fontWeights: FontWeightType;
    lettingSpacings: LetterSpacingType;
    lineHeights: LetterHeightType;
    shadows: string[];
    sizes: SizeType;
    space: SpaceType;
    zIndices: ZindexType;
    breakpoint: breakpointType;
  }
}
