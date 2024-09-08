import { Global } from '@emotion/react';
import Header from './components/Header/Header';
import globalStyle from './styles/global';

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <Header />
    </>
  );
}

export default App;
