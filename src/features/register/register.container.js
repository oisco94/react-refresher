import { connect } from "react-redux";
import { Register } from "./register.component";

import { userActions } from "../../redux/actions/userActions";

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (userToCreate, history) => {
      dispatch(userActions.register(userToCreate, history));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
