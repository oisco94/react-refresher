import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  LOGOUT,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../../constants/const";
import { userService } from "../../services/userService";

// import { browserHistory } from "react-router";

import { history } from "../../services/history";

export const userActions = {
  login,
  logout,
  register,
};

function logout() {
  userService.logout();
  return { type: LOGOUT };
}

function login(userCredentials, history) {
  return (dispatch) => {
    dispatch(request(userCredentials));

    userService
      .login(userCredentials)
      .then((resp) => {
        debugger;
        history.push("/home");
        dispatch(success(resp));
      })
      .catch((err) => {
        dispatch(failure(err));
      });
  };

  function request(user) {
    return { type: LOGIN_REQUEST, userCredentials };
  }
  function success(user) {
    return { type: LOGIN_SUCCESS };
  }
  function failure(error) {
    return { type: LOGIN_FAILURE };
  }
}

function register(user, history) {
  return (dispatch) => {
    dispatch(request(user));

    debugger;
    userService.register(user).then(
      (user) => {
        debugger;
        dispatch(success());
        //todo find out how to navigate here!!

        // dispatch(push("/login"));

        history.push("/login");
        // browserHistory.push("/login");

        debugger;

        // dispatch(alertActions.success('Registration successful'));
      },
      (error) => {
        debugger;
        dispatch(failure(error));
        // dispatch(alertActions.error(error));
      }
    );
  };

  function request(user) {
    return { type: REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: REGISTER_FAILURE, error };
  }
}
