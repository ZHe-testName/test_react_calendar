import { IEventType } from "../../../models/IEvent";
import { UserType } from "../../../models/IUser";

export interface EventState {
    guests: UserType[],
    events: IEventType[],
};

export enum EventsActionEnum {
    SET_USERS = 'SET_USERS',
    SET_EVENTS = 'SET_EVENTS',
};

interface SetUsersActionType {
    type: EventsActionEnum.SET_USERS,
    payload: UserType[],
};


interface SetEventsActionType {
    type: EventsActionEnum.SET_EVENTS,
    payload: IEventType[],
};

export type EventActionsType = SetUsersActionType
                            | SetEventsActionType;