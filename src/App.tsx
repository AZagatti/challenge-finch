import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppContext from './contexts';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <AppContext>
        <Routes />
      </AppContext>
    </Router>
  );
};

export default App;
