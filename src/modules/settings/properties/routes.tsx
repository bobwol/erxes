import queryString from 'query-string';
import * as React from 'react';
import { Route } from 'react-router-dom';
import { Properties } from './containers';

const properties = ({ location }) => {
  const queryParams = queryString.parse(location.search);
  return <Properties queryParams={queryParams} />;
};

const routes = () => (
  <Route path="/settings/properties/" component={properties} />
);

export default routes;
