import { IEventType } from "../../../models/IEvent";
import { UserType } from "../../../models/IUser";

export interface EventState {
    guests: UserType[],
    events: IEventType[],
    selectDate: string,
};

export enum EventsActionEnum {
    SET_USERS = 'SET_USERS',
    SET_EVENTS = 'SET_EVENTS',
    SET_SELECTED_DATE = 'SET_SELECTED_DATE',
};

interface SetUsersActionType {
    type: EventsActionEnum.SET_USERS,
    payload: UserType[],
};


interface SetEventsActionType {
    type: EventsActionEnum.SET_EVENTS,
    payload: IEventType[],
};

interface SetSelectedDateActionType {
    type: EventsActionEnum.SET_SELECTED_DATE,
    payload: string,
};

export type EventActionsType = SetUsersActionType
                            | SetEventsActionType
                            | SetSelectedDateActionType;