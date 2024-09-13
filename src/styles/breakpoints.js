// sm: 568px 모바일
// md: 768px 모바일 가로형, 태블릿 세로형
// lg: 1024px 태블릿 가로형, 노트북
// xl: 1440px 데스크탑

const breakpoints = [568, 768, 1024, 1440];

export const mediaQuery = breakpoints.map(
  (breakpoint) => `@media all and (max-width: ${breakpoint - 1}px)`
);
