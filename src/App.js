import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { history } from "./services/history";

import RegisterContainer from "./features/register/register.container";
import LoginContainer from "./features/login/login.container";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";

import { HomeScreen } from "./features/home/home.component";

class App extends React.Component {
  constructor(props) {
    super(props);

    // const { dispatch } = this.props;
    // history.listen((location, action) => {
    //   // clear alert on location change
    //   // dispatch(alertActions.clear());
    // });

    this._navigate.bind(this);
    // const history = useHistory();
    this.state = {
      // redirect: null,
    };
  }

  _navigate = () => {
    // this.setState({ ...this.state, redirect: "login" });

    history.push("/login");
  };

  _renderContent = () => {
    // if (this.state.redirect) {
    //   return <Redirect to={this.state.redirect} />;
    // }
    // return (
    //   <Switch>
    //     <Route path="/login" component={LoginContainer} />
    //     <Route path="/register" component={RegisterContainer} />
    //     <Route path="/" component={LoginContainer} />
    //   </Switch>
    // );
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/login" component={LoginContainer} />
            <Route path="/register" component={RegisterContainer} />
            <Route path="/home" component={HomeScreen} />
            <Route path="/" component={LoginContainer} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
