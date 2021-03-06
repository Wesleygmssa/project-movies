import React from 'react';

import Header from './components/Header';
import Routes from './routes/routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Header>Movies</Header>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
