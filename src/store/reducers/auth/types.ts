export interface AuthStateType {
    isAuth: boolean,
};

export enum AuthActionEnum {
    SET_AUTH = 'SET_AUTH',
};

export interface AuthActionType {
    type: AuthActionEnum.SET_AUTH,
    payload: boolean,
};

export type AuthActionsTypes = AuthActionType;