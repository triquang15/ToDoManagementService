import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {thunk} from "redux-thunk";
import authReducer from './AuthSlice';
import TodoSlice from './TodoSlice';
import SubmissionSlice from './SubmissionSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    task: TodoSlice,
    submission: SubmissionSlice
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})