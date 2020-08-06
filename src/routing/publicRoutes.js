import issuesPage from '../containers/IssuesPage/index'
import LabelsPage from '../containers/LabelsPage/index'
import { ISSUES_PAGE, LABELS_PAGE, ISSUE_PAGE } from './path'
import IssuePage from '../containers/issuePage/index'

const ISSUES = {
    component: issuesPage,
    path: ISSUES_PAGE
}
const LABELS = {
    component: LabelsPage,
    path: LABELS_PAGE
}
const ISSUE = {
    component: IssuePage,
    path: ISSUE_PAGE
}

export default [ISSUES, LABELS, ISSUE]