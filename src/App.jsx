import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  SEARCH_PAGE_ROUTE,
  WELCOME_PAGE_ROUTE,
  RESULTS_PAGE_ROUTE,
} from './utils/Constants';
import { IsMobileContext } from './is-mobile-context/IsMobileContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SearchPage } from './pages/search-page/SearchPage';
import { WelcomePage } from './pages/welcome-page/WelcomePage';
import { ResultsPage } from './pages/results-page/ResultsPage';

const App = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Router>
      <Switch>
        <IsMobileContext.Provider value={isMobile}>
          <Route exact path={WELCOME_PAGE_ROUTE}>
            <WelcomePage />
          </Route>
          <Route exact path={SEARCH_PAGE_ROUTE}>
            <SearchPage />
          </Route>
          <Route exact path={RESULTS_PAGE_ROUTE}>
            <ResultsPage />
          </Route>
        </IsMobileContext.Provider>
      </Switch>
    </Router>
  );
};

export default App;
