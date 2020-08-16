import { ISSUES_PAGE, LABELS_PAGE, ISSUE_PAGE } from './path';
import IssuePage from '../containers/issuePage/index';
import IssuesPage from '../containers/IssuesPage/index';
import LabelsPage from '../containers/LabelsPage/index';

const ISSUES = {
  component: IssuesPage,
  path: ISSUES_PAGE,
};
const LABELS = {
  component: LabelsPage,
  path: LABELS_PAGE,
};
const ISSUE = {
  component: IssuePage,
  path: ISSUE_PAGE,
};

export default [ISSUES, LABELS, ISSUE];
