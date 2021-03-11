import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  LOGOUT,
} from "../../constants/const";
import { userService } from "../../services/userService";

// import { push } from "react-router-redux";

export const userActions = {
  // login,
  logout,
  register,
};

function logout() {
  userService.logout();
  return { type: LOGOUT };
}

function register(user) {
  return (dispatch) => {
    dispatch(request(user));

    debugger;
    userService.register(user).then(
      (user) => {
        debugger;
        dispatch(success());
        //todo find out how to navigate here!!

        // dispatch(push("/login"));

        // history.push("/login");
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
