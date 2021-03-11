import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../../constants/const";

const initialState = {
  userId: "a value",
  isRegistering: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUEST: {
      return {
        ...state,
        isRegistering: true,
      };
    }

    case REGISTER_FAILURE: {
      return {
        ...state,
        isRegistering: false,
      };
    }

    case REGISTER_SUCCESS: {
      return {
        ...state,
        isRegistering: false,
      };
    }
    default:
      return state;
  }
}
