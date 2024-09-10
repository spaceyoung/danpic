import { useTheme, css } from '@emotion/react';
import { useThemeMode } from '../../contexts/ThemeContext';
import logoLight from '../../assets/logo-light.svg';
import logoDark from '../../assets/logo-dark.svg';

function BannerHeader() {
  const themeMode = useThemeMode();
  const theme = useTheme();

  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = week[today.getDay()];
  const formattedDate = `${year}-${month}-${day} (${dayOfWeek})`;

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
        {formattedDate}
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
            color: ${theme.color.text.title};
            ${theme.typography.sectionTitle}
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
