import { setIssue, setError } from './actions';

const getIssue = (id) => (dispatch, getState) => {
  const issues = [...getState().issues.issues];
  const issue = issues.filter((item) => {
    if (item.id === parseInt(id, 10)) {
      return item;
    }
    return null;
  });
  if (issue.length > 0) {
    dispatch(setIssue(issue[0]));
  } else {
    dispatch(setError('Page is undefined'));
  }
};

export default getIssue;
