import { useThemeMode } from '../../contexts/ThemeContext';
import logoLight from '../../assets/logo-light.svg';
import logoDark from '../../assets/logo-dark.svg';

function BannerHeader() {
  const themeMode = useThemeMode();

  return (
    <div>
      <span>오늘의 날짜</span>
      <div>
        <figure>
          <img src={themeMode === 'light' ? logoLight : logoDark} alt="단픽" />
        </figure>
        <h2>
          화제의 <em>단픽</em>
        </h2>
      </div>
    </div>
  );
}

export default BannerHeader;
