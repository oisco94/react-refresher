import { connect } from "react-redux";
import { Login } from "./login.component";

import { userActions } from "../../redux/actions/userActions";

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userDetails, history) => {
      dispatch(userActions.login(userDetails, history));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
