import React, { } from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './privateRoute';
import Home from './components/news/newsListScreen';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Logout from './components/auth/logout';
import Error from './common/components/error';

class Routing extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/logout" component={Logout} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/news" component={Home} />
        <Route path='*' component={Error} />
        <Route component={Error} />
      </Switch>
    );
  }
}
export default Routing;
