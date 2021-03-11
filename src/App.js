import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { history } from "./services/history";

import RegisterContainer from "./features/register/register.container";
import LoginContainer from "./features/login/login.container";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    // const { dispatch } = this.props;
    // history.listen((location, action) => {
    //   // clear alert on location change
    //   // dispatch(alertActions.clear());
    // });

    this._navigate.bind(this);
  }

  _navigate = () => {
    debugger;
  };

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route path="/login">
              <LoginContainer />
            </Route>
            <Route path="/register">
              <RegisterContainer />
            </Route>
            <Route path="/" exact component={LoginContainer}>
              <LoginContainer />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
