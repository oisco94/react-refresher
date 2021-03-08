
// import { REGISTER_REQUEST } from '../../constants/const';

import { REGISTER_REQUEST } from "../../constants/const";

const initialState = {
  userId: "a value"
};

export default function(state = initialState, action) {
  switch (action.type) {

    case REGISTER_REQUEST: {

      // todo create service and look at thunk for submitting request
      
      debugger
      return {
        isRegistering: true,
        ...state
      }
    }
    default:
      return state;
  }
}
