import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import labelsReducer from './labels/reducer';
import issuesReducer from './issues/reducer';
import issueReducer from './issue/reducer';

const reducers = combineReducers({
  issues: issuesReducer,
  labels: labelsReducer,
  issue: issueReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
