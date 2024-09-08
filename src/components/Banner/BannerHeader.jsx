import { useTheme, css } from '@emotion/react';
import { useThemeMode } from '../../contexts/ThemeContext';
import logoLight from '../../assets/logo-light.svg';
import logoDark from '../../assets/logo-dark.svg';

function BannerHeader() {
  const themeMode = useThemeMode();
  const theme = useTheme();

  return (
    <div
      css={css`
        margin-bottom: 12px;
      `}
    >
      <span
        css={css`
          display: block;
          margin-bottom: 4px;
          color: ${theme.color.text.label};
        `}
      >
        오늘의 날짜
      </span>
      <div
        css={css`
          display: flex;
          align-items: center;
          gap: 12px;
        `}
      >
        <figure>
          <img
            src={themeMode === 'light' ? logoLight : logoDark}
            alt="단픽"
            css={css`
              width: 28px;
              margin-bottom: 2px;
            `}
          />
        </figure>
        <h2
          css={css`
            ${theme.typograhpy.sectionTitle}
            color: ${theme.color.text.title};
          `}
        >
          화제의{' '}
          <em
            css={css`
              color: ${theme.color.emphasis.primary};
            `}
          >
            단픽
          </em>
        </h2>
      </div>
    </div>
  );
}

export default BannerHeader;
