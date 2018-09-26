import { SET_CURRENT_USER } from "../actionTypes";

const DEFAULT_STATE = {
    //this will be true when user is logged in
    isAuthenticated: false,
    //all the user info whhen logged in 
    user:{}
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                //turn an empty object into false or if there are keys, true
                isAuthenticated: Object.keys(action.user).length > 0 ,
                user: action.user
            };  
        default:
            return state;
    }
};