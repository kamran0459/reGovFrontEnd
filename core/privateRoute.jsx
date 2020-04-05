import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    AuthService.isAuthenticated() === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )}/>
);

class AuthService extends React.Component {
  static isAuthenticated = () => {
    // sessionStorage.setItem('token', 'er5hcgfurw73refhceyt3527e')
    if (sessionStorage.getItem('token')) {
      return true;
    }
    return false;
  }
}

export default PrivateRoute;