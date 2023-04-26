import { CounterReducer } from "./Counterreducer";
import { combineReducers } from 'redux';
import { PostReducer } from './PostsReducer';

export const rootReducer=combineReducers({
    counter:CounterReducer,
    post:PostReducer
})