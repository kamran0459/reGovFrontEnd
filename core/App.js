import React from 'react';
import Header from './common/components/header.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { withRouter } from 'react-router'

class AppContext extends React.Component { // this is class to pass to withRouter to enable this.props.history.push(redirectURL)
  render() {
    return (
      <div className="container-fluid">
        {sessionStorage.getItem('token') && <Header />}
        <Routes />
      </div>
    );
  }
}
const AppWithRouter = withRouter(AppContext)
class App extends React.Component {
  render() {
    return (
      <Router>
        <AppWithRouter />
      </Router>
    );
  }
}

export default App;
