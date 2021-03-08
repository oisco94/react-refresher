import { connect } from 'react-redux';
import { Register } from "./register.component";

import {registerUser} from "../../redux/actions/userActions";

const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.userState.userId,
    userToken: null
  }
}
  
  const mapDispatchToProps = (dispatch) => {
    return { 
      createUser: (userToCreate)=> {
        debugger;
        dispatch(registerUser(userToCreate));
    }    
  }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Register)