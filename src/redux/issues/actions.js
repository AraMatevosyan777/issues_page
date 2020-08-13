export const ADD_ISSUE = 'ADD_ISSUE';
export const EDIT_ISSUE = 'EDIT_ISSUE';
export const SHOW_DRAWER = 'SHOW_DRAWER';
export const ADD_LABEL = 'issues/ADD_LABEL';
export const DELETE_LABEL = 'issues/DELETE_LABEL';
export const DELETE_ISSUE = 'issues/DELETE_ISSUE';
export const ADD_COMMENT = 'issues/ADD_COMMENT';
export const IS_OPEN = 'issues/IS_OPEN';

export const addIssue = (issue) => ({ type: ADD_ISSUE, issue });
export const editIssue = (issue) => ({ type: EDIT_ISSUE, issue });
export const drawerIsShow = (boolean) => ({ type: SHOW_DRAWER, boolean });
export const addLabel = (id, label) => ({ type: ADD_LABEL, label, id });
export const deleteIssue = (id) => ({ type: DELETE_ISSUE, id });
export const deleteLabel = (issueId, labelId) => ({
  type: DELETE_LABEL,
  issueId,
  labelId,
});
export const addComment = (id, comment) => ({ type: ADD_COMMENT, id, comment });
export const setIsopen = (id, isOpen) => ({ type: IS_OPEN, id, isOpen });
