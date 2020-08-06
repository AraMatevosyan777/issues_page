export const SET_ISSUE = 'SET_ISSUE'
export const SET_ERROR = 'SET_ERROR'

export const setIssue = (issue) => ({type: SET_ISSUE, issue})
export const setError = (error) => ({type: SET_ERROR, error})