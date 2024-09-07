import { Global } from '@emotion/react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import globalStyle from './styles/global';

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <h1>단픽 Danpic</h1>
    </>
  );
}

export default App;
