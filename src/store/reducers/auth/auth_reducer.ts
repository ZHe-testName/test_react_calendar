import { AuthActionEnum, AuthActionsTypes, AuthStateType } from "./types";

const initialState: AuthStateType = {
    isAuth: false,
};

const authReducer = (state: AuthStateType = initialState, action: AuthActionsTypes): AuthStateType => {
    switch (action.type){
        case AuthActionEnum.SET_AUTH: {
            return {
                ...state,
                isAuth: action.payload
            };
        }

        default: {
            return state;
        }
    };
};

export default authReducer;