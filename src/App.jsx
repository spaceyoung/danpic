import { Global } from '@emotion/react';
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
