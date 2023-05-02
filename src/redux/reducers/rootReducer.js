import { CounterReducer } from "./Counterreducer";
import { combineReducers } from 'redux';
import { PostReducer } from './PostsReducer';
import { TodosReducer } from "./todoReducer";

export const rootReducer=combineReducers({
    counter:CounterReducer,
    post:PostReducer,
    todo:TodosReducer
})