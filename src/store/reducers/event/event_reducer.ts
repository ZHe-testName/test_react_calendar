import { Dispatch } from "redux";
import { IEventType } from "../../../models/IEvent";
import { UserType } from "../../../models/IUser";
import UserService from "../../../services/UserService";
import { EventActionsType, EventsActionEnum, EventState } from "./types";

const initialState: EventState = {
    events: [],
    guests: [],
    selectDate: '',
};

const eventReducer = (state: EventState = initialState, action: EventActionsType): EventState => {
    switch (action.type){
        case EventsActionEnum.SET_USERS: {
            return {
                ...state,
                guests: action.payload,
            };
        }

        case EventsActionEnum.SET_EVENTS: {
            return {
                ...state,
                events: action.payload,
            };
        }

        case EventsActionEnum.SET_SELECTED_DATE: {
            return {
                ...state,
                selectDate: action.payload,
            };
        }

        // case EventsActionEnum.SET_IS_DONE: {
        //     return {
        //         ...state,
        //         events: state.events.map(event => event.id === action.payload.eventId
        //                                                                             ? {...event, isDone: action.payload.isDone}
        //                                                                             : event),
        //     };
        // }

        default: {
            return state;
        }
    };
};

export const eventsActionCreators = {
    setUsers: (users: UserType[]): EventActionsType => ({type: EventsActionEnum.SET_USERS, payload: users}),
    setEvents: (events: IEventType[]): EventActionsType => ({type: EventsActionEnum.SET_EVENTS, payload: events}),
    setSelectedDate: (date: string): EventActionsType => ({type: EventsActionEnum.SET_SELECTED_DATE, payload: date}),
    // setIsDone: (isDone: boolean, eventId: string): EventActionsType => ({
    //                                                                         type: EventsActionEnum.SET_IS_DONE, 
    //                                                                         payload: {isDone, eventId}
    //                                                                     }),

    fetchUsersThunk: () => async (dispatch: Dispatch) => {
        try {
            const responce = await UserService.getUsers();

            dispatch(eventsActionCreators.setUsers(responce.data))
        } catch (error) {
            console.log(error);
        }
    },

    createEventThunk: (event: IEventType, username: string) => async (dispatch: Dispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]';

            const json = JSON.parse(events) as IEventType[];
            json.push(event);

            const currentUserEventsArr = json.filter(event => event.guest === username);

            dispatch(eventsActionCreators.setEvents(currentUserEventsArr));

            localStorage.setItem('events', JSON.stringify(json));
        } catch (error) {
            console.log(error);
        }
    },

    fetchEventThunk: (username: string) => (dispatch: Dispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]';

            const json = JSON.parse(events) as IEventType[];

            const currentUserEventsArr = json.filter(event => event.guest === username);

            dispatch(eventsActionCreators.setEvents(currentUserEventsArr));
        } catch (error) {
            console.log(error);
        }
    },

    fetchIsDoneThunk: (isDone: boolean, eventId: string, username: string) => (dispatch: Dispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]';

            const json = JSON.parse(events) as IEventType[];

            const newEvents = json.map(event => event.id === eventId
                                                                    ? {...event, isDone: isDone}
                                                                    : event);

            localStorage.setItem('events', JSON.stringify(newEvents));                                                      

            dispatch(eventsActionCreators.setEvents(newEvents.filter(event => event.guest === username)));
        } catch (error) {
            console.log(error);
        }
    },
};

export default eventReducer;