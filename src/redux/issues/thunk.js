import { issuesData } from '../../data';
import { setIssues } from './actions';

export const getIssues = (label) => (dispatch) => {
  if (label) {
    const issues = issuesData.filter((issue) => {
      const item =
        issue.labels &&
        issue.labels.some((item) => {
          if (parseInt(label, 10) === item.id) {
            return issue;
          }
          return null;
        });
      return item;
    });
    dispatch(setIssues(issues));
  } else {
    dispatch(setIssues(issuesData));
  }
};
