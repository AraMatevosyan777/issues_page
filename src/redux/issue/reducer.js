import { SET_ISSUE, SET_ERROR } from './actions';

const initialState = {
  issue: {},
  error: null,
};

const issueReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ISSUE:
      return {
        ...state,
        issue: action.issue,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default issueReducer;
