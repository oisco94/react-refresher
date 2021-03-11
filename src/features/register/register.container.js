import { connect } from 'react-redux';
import { Register } from "./register.component";

import {userActions} from "../../redux/actions/userActions";

const mapStateToProps = (state, ownProps) => {
  return {
  }
}
  
  const mapDispatchToProps = (dispatch) => {
    return { 
      createUser: (userToCreate)=> {
        dispatch(userActions.register(userToCreate));
    }    
  }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Register)