import { UserType } from '../../../models/IUser';

export interface AuthStateType {
    isAuth: boolean,
    user: UserType,
    isLoading: boolean,
    error: string,
};

export enum AuthActionEnum {
    SET_AUTH = 'SET_AUTH',
    SET_USER = 'SET_USER',
    SWITCH_IS_LOAD = 'SWITCH_IS_LOAD',
    SET_ERROR = 'SET_ERROR',
};

export interface AuthActionType {
    type: AuthActionEnum.SET_AUTH,
    payload: boolean,
};

export interface SetUserActionType {
    type: AuthActionEnum.SET_USER,
    payload: UserType,
};

export interface LoadSwitcherActionType {
    type: AuthActionEnum.SWITCH_IS_LOAD,
    payload: boolean,
};

export interface SetErrorActionType {
    type: AuthActionEnum.SET_ERROR,
    payload: string,
};

export type AuthActionsTypes = AuthActionType
                                | SetErrorActionType
                                | SetUserActionType
                                | LoadSwitcherActionType;