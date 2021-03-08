import {REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS} from "../../constants/const";

export function registerUser (userDetails){
    return {
        type: REGISTER_REQUEST,
        payload: userDetails
    }
}

export function registerUserSuccess (){
    return {
        type: REGISTER_SUCCESS,
    }
}

export function registerUserFailure (error){
    return {
        type: REGISTER_FAILURE,
        error
    }
}
