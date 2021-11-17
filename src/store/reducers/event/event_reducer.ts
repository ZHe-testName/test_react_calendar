import { Dispatch } from "redux";
import { IEventType } from "../../../models/IEvent";
import { UserType } from "../../../models/IUser";
import UserService from "../../../services/UserService";
import { EventActionsType, EventsActionEnum, EventState } from "./types";

const initialState: EventState = {
    events: [],
    guests: [],
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

        default: {
            return state;
        }
    };
};

export const eventsActionCreators = {
    setUsers: (users: UserType[]): EventActionsType => ({type: EventsActionEnum.SET_USERS, payload: users}),
    setEvents: (events: IEventType[]): EventActionsType => ({type: EventsActionEnum.SET_EVENTS, payload: events}),

    fetchUsersThunk: () => async (dispatch: Dispatch) => {
        try {
            const responce = await UserService.getUsers();

            dispatch(eventsActionCreators.setUsers(responce.data))
        } catch (error) {
            console.log(error);
        }
    },
};

export default eventReducer;