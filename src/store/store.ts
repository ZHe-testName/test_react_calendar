import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//create common root reducer 4 redux
const rootReducer = combineReducers({});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;