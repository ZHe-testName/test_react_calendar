import { UserType } from "../../../models/IUser";
import { AuthActionEnum, AuthActionsTypes, AuthStateType } from "./types";
import { Dispatch } from "redux";
import UserService from '../../../services/UserService';

const initialState: AuthStateType = {
    isAuth: false,
    user: {} as UserType,
    isLoading: false,
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

        case AuthActionEnum.SWITCH_IS_LOAD: {
            return {
                ...state,
                isLoading: action.payload,
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
    setIsAuth: (isAuth: boolean): AuthActionsTypes => ({type: AuthActionEnum.SET_AUTH, payload: isAuth}),
    switchIsLoading: (isLoading: boolean): AuthActionsTypes => ({type: AuthActionEnum.SWITCH_IS_LOAD, payload: isLoading}),

    login: (username: string, password: string) => async (dispatch: Dispatch) => {
        try {
            dispatch(authActionCreators.switchIsLoading(true));
            dispatch(authActionCreators.setError(''));

            setTimeout( async () => {
                const mockUser = await UserService.getUsers()
                    .then(res => res.data.find(user => user.username === username 
                                                        && user.password === password));

                    if (!mockUser){
                        dispatch(authActionCreators.setError('Entered uncorect username or password!'));
                        dispatch(authActionCreators.switchIsLoading(false));

                        return;
                    };


                    localStorage.setItem('auth', 'true');
                    localStorage.setItem('user', mockUser.username);

                    dispatch(authActionCreators.setUser(mockUser));
                    dispatch(authActionCreators.setIsAuth(true));
                    dispatch(authActionCreators.switchIsLoading(false));
           }, 1500);

        } catch (error) {
            dispatch(authActionCreators.setError('Error'));
        }
    },

    logout: () => (dispatch: Dispatch) => {
        localStorage.removeItem('auth');
        localStorage.removeItem('user');

        dispatch(authActionCreators.setIsAuth(false));
        dispatch(authActionCreators.setUser({} as UserType));
    },
};

export default authReducer;