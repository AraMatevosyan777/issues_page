import {createStore, combineReducers, applyMiddleware} from 'redux'
import { labelsReducer } from './labels/reducer'
import { issuesReducer } from "./issues/reducer"
import { issueReducer } from "./issue/reducer"
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    issues: issuesReducer,
    labels: labelsReducer,
    issue: issueReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store