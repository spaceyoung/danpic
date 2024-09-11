const colorSystem = {
  grayscale000: '#FFFFFF',
  grayscale050: '#F1F3F3',
  grayscale100: '#E4E6E7',
  grayscale200: '#C8CDD0',
  grayscale300: '#ADB4B8',
  grayscale400: '#929BA0',
  grayscale500: '#778288',
  grayscale600: '#5F686D',
  grayscale700: '#474E52',
  grayscale750: '#3B4144',
  grayscale800: '#2F3437',
  grayscale900: '#181A1B',

  blue050: '#EAF0FA',
  blue100: '#D5E1F6',
  blue200: '#ABC3ED',
  blue300: '#81A5E4',
  blue400: '#5787DB',
  blue500: '#2D69D2',
  blue600: '#2454A8',
  blue700: '#1B3F7E',
  blue800: '#122A54',
  blue900: '#09152A',

  blackShadow100: 'rgba(24, 26, 27, 0.1)',
  blackShadow300: 'rgba(24, 26, 27, 0.3)',

  whiteShadow300: 'rgba(255, 255, 255, 0.3)',
};

// 라이트 모드
export const lightThemeColor = {
  text: {
    title: colorSystem.grayscale800,
    body: colorSystem.grayscale700,
    detail: colorSystem.grayscale500,
    label: colorSystem.grayscale400,
    disabled: colorSystem.grayscale300,
  },
  emphasis: {
    primary: colorSystem.blue600,
    secondary: colorSystem.blue400,
  },
  background: {
    default: colorSystem.grayscale000,
    toggleSwitch: colorSystem.grayscale200,
    banner: colorSystem.blue050,
    article: colorSystem.grayscale000,
    viewMoreButton: colorSystem.grayscale050,
  },
  border: {
    default: colorSystem.blackShadow300,
  },
  shadow: {
    default: colorSystem.blackShadow100,
  },
  button: {
    banner: colorSystem.blue600,
  },
};

// 다크 모드
export const darkThemeColor = {
  text: {
    title: colorSystem.grayscale050,
    body: colorSystem.grayscale100,
    detail: colorSystem.grayscale200,
    label: colorSystem.grayscale300,
    disabled: colorSystem.grayscale400,
  },
  emphasis: {
    primary: colorSystem.blue300,
    secondary: colorSystem.blue200,
  },
  background: {
    default: colorSystem.grayscale800,
    toggleSwitch: colorSystem.blue300,
    banner: colorSystem.blue600,
    article: colorSystem.grayscale750,
    viewMoreButton: colorSystem.grayscale700,
  },
  border: {
    default: colorSystem.whiteShadow300,
  },
  shadow: {
    default: colorSystem.blackShadow300,
  },
  button: {
    banner: colorSystem.blue050,
  },
};
