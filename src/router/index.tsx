
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from '../pages/index/page';
const RouterIndex = () => {
  return (
    <Switch>
      <Route exact={true} path='/wanc' component={Index} />
    </Switch>
  )
}

export default RouterIndex;