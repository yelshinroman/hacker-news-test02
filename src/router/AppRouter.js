import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import ShowStories from '../components/ShowStories';
// import HomePage from '../components/HomePage';
import PageNotFound from '../components/PageNotFound';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
        <Route path="/" render={() => <Redirect to="/top" />} exact={true} />
        <Route
          path="/:type"
          render={({ match }) => {
            const { type } = match.params;
            if (!['top', 'new', 'best'].includes(type)) {
              return <Redirect to="/" />;
            }
            return <ShowStories type={type} />;
          }}
        />
          <Route component={PageNotFound} />
          </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;