import { connect } from 'react-redux';
import { Login } from "./login.component";

import {userActions} from "../../redux/actions/userActions";

const mapStateToProps = (state, ownProps) => {
  return {
  }
}
  
  const mapDispatchToProps = (dispatch) => {
    return { 
      login: (userDetails)=> {
          debugger;
        // dispatch(userActions.register(userToCreate));
    }    
  }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)