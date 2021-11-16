import { UserType } from "../../../models/models";
import { AuthActionEnum, AuthActionsTypes, AuthStateType } from "./types";

const initialState: AuthStateType = {
    isAuth: false,
    user: {} as UserType,
    isLoaing: false,
    error: '',
};

const authReducer = (state: AuthStateType = initialState, action: AuthActionsTypes): AuthStateType => {
    switch (action.type){
        case AuthActionEnum.SET_AUTH: {
            return {
                ...state,
                isAuth: action.payload,
            };
        }

        case AuthActionEnum.SET_USER: {
            return {
                ...state,
                user: action.payload,
            };
        }

        case AuthActionEnum.SET_ERROR: {
            return {
                ...state,
                error: action.payload,
            };
        }

        case AuthActionEnum.SET_AUTH: {
            return {
                ...state,
                isLoaing: action.payload,
            };
        }

        default: {
            return state;
        }
    };
};

export const authActionCreators = {
    setUser: (user: UserType): AuthActionsTypes => ({type: AuthActionEnum.SET_USER, payload: user}),
    setError: (error: string): AuthActionsTypes => ({type: AuthActionEnum.SET_ERROR, payload: error}),
    setIsLoading: (isAuth: boolean): AuthActionsTypes => ({type: AuthActionEnum.SET_AUTH, payload: isAuth}),
    switchIsLoading: (isLoading: boolean): AuthActionsTypes => ({type: AuthActionEnum.SWITCH_IS_LOAD, payload: isLoading}),
};

export default authReducer;