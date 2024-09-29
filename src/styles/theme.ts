import { lightThemeColor, darkThemeColor } from '@styles/color';
import typography from '@styles/typography';

export const lightTheme = {
  color: lightThemeColor,
  typography,
};

export const darkTheme = {
  color: darkThemeColor,
  typography,
};

// theme의 타입 추론을 위한 타입 정의
declare module '@emotion/react' {
  export interface Theme {
    color: typeof lightThemeColor | typeof darkThemeColor;
    typography: typeof typography;
  }
}
