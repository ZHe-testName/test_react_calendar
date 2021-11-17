import { authActionCreators } from "./auth/auth_reducer";
import { eventsActionCreators } from "./event/event_reducer";

export const actoinCreators = {
    ...authActionCreators,
    ...eventsActionCreators
};