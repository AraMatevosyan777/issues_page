import {
  ADD_ISSUE,
  SHOW_DRAWER,
  ADD_LABEL,
  DELETE_LABEL,
  ADD_COMMENT,
  IS_OPEN,
  EDIT_ISSUE,
  DELETE_ISSUE,
  SET_ISSUES,
} from './actions';

const initialState = {
  issues: [],
  showDrawer: false,
};
const issuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ISSUES:
      return {
        ...state,
        issues: action.issues,
      };
    case ADD_ISSUE:
      return {
        ...state,
        issues: [...state.issues, action.issue],
      };
    case SHOW_DRAWER:
      return {
        ...state,
        showDrawer: action.boolean,
      };
    case ADD_LABEL:
      return {
        ...state,
        issues: state.issues.map((issue) => {
          if (issue.id === action.id) {
            return { ...issue, labels: [...issue.labels, action.label] };
          }
          return issue;
        }),
      };
    case DELETE_LABEL:
      return {
        ...state,
        issues: state.issues.map((issue) => {
          if (issue.id === action.issueId) {
            return {
              ...issue,
              labels: issue.labels.filter((label) => {
                if (label.id !== action.labelId) {
                  return label;
                }
                return null;
              }),
            };
          }
          return issue;
        }),
      };
    case ADD_COMMENT:
      return {
        ...state,
        issues: state.issues.map((issue) => {
          if (issue.id === action.id) {
            return {
              ...issue,
              comments: [...issue.comments, action.comment],
            };
          }
          return issue;
        }),
      };
    case IS_OPEN:
      return {
        ...state,
        issues: state.issues.map((issue) => {
          if (issue.id === action.id) {
            return {
              ...issue,
              isOpen: !action.isOpen,
            };
          }
          return issue;
        }),
      };
    case DELETE_ISSUE:
      return {
        ...state,
        issues: state.issues.filter((issue) => issue.id !== action.id),
      };
    case EDIT_ISSUE:
      return {
        ...state,
        issues: state.issues.map((issue) => {
          if (issue.id === action.issue.id) {
            return {
              ...issue,
              title: action.issue.title,
              description: action.issue.description,
            };
          }
          return issue;
        }),
      };
    default:
      return state;
  }
};

export default issuesReducer;
