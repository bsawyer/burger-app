import { createThemeContract, createTheme, style } from '@vanilla-extract/css';

export const vars = createThemeContract({
  color: '',
  background: '',
  fontBase: '',
  fontSize: '',
  iconSize: '',
  fontFamily: '',
  primaryColor: '',
  secondaryColor: '',
  secondaryBackground: '',
  cardBackground: '',
  cardColor: '',
  cardBordercolor: '',
  cardBorderSize: '',
  maxWidth: '',
});

export const baseThemeVar = {
  fontBase: '.625em',
  fontSize: '1.8rem',
  iconSize: '4rem',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
  maxWidth: '142rem',
};

export const [lightThemeClass, lightThemeVar] = createTheme({
  ...baseThemeVar,
  color: '#000',
  background: '#fff',
  primaryColor: '#5aef75',
  secondaryColor: '#6b7280',
  secondaryBackground: '#d8d8d8',
  cardBackground: '#fff',
  cardColor: '#000',
  cardBordercolor: '#d7d7d7',
  cardBorderSize: '.1rem',
});

export const [darkThemeClass, darkThemeVar] = createTheme({
  ...baseThemeVar,
  color: '#fff',
  background: '#0e0e10',
  primaryColor: '#5aef75',
  secondaryColor: '#a1a1aa',
  secondaryBackground: '#2d2d2e',
  cardBackground: '#18181b',
  cardColor: '#fff',
  cardBordercolor: 'transparent',
  cardBorderSize: '0',
});

export const defaultThemeClass = style({
  vars: {
    [vars.fontBase]: darkThemeVar.fontBase,
    [vars.fontSize]: darkThemeVar.fontSize,
    [vars.iconSize]: darkThemeVar.iconSize,
    [vars.fontFamily]: darkThemeVar.fontFamily,
    [vars.color]: darkThemeVar.color,
    [vars.background]: darkThemeVar.background,
    [vars.primaryColor]: darkThemeVar.primaryColor,
    [vars.secondaryColor]: darkThemeVar.secondaryColor,
    [vars.secondaryBackground]: darkThemeVar.secondaryBackground,
    [vars.maxWidth]: darkThemeVar.maxWidth,
    [vars.cardBackground]: darkThemeVar.cardBackground,
    [vars.cardColor]: darkThemeVar.cardColor,
    [vars.cardBordercolor]: darkThemeVar.cardBordercolor,
  },
  '@media': {
    '(prefers-color-scheme: light)': {
      vars: {
        [vars.fontBase]: lightThemeVar.fontBase,
        [vars.fontSize]: lightThemeVar.fontSize,
        [vars.iconSize]: lightThemeVar.iconSize,
        [vars.fontFamily]: lightThemeVar.fontFamily,
        [vars.color]: lightThemeVar.color,
        [vars.background]: lightThemeVar.background,
        [vars.primaryColor]: lightThemeVar.primaryColor,
        [vars.secondaryColor]: lightThemeVar.secondaryColor,
        [vars.secondaryBackground]: lightThemeVar.secondaryBackground,
        [vars.maxWidth]: lightThemeVar.maxWidth,
        [vars.cardBackground]: lightThemeVar.cardBackground,
        [vars.cardColor]: lightThemeVar.cardColor,
        [vars.cardBordercolor]: lightThemeVar.cardBordercolor,
      },
    },
  },
});
