import { IEventType } from "../../../models/IEvent";
import { UserType } from "../../../models/IUser";

interface IsDonePayloadType {
    isDone: boolean,
    eventId: string,
};

export interface EventState {
    guests: UserType[],
    events: IEventType[],
    selectDate: string,
};

export enum EventsActionEnum {
    SET_USERS = 'SET_USERS',
    SET_EVENTS = 'SET_EVENTS',
    SET_SELECTED_DATE = 'SET_SELECTED_DATE',
    SET_IS_DONE = 'SET_IS_DONE',
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

interface SetIsDoneActionType {
    type: EventsActionEnum.SET_IS_DONE,
    payload: IsDonePayloadType,
};

export type EventActionsType = SetUsersActionType
                            | SetEventsActionType
                            | SetSelectedDateActionType
                            | SetIsDoneActionType;