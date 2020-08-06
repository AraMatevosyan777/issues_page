import { setIssue, setError } from "./actions"

export const getIssue = (id) => (dispatch, getState) => {
    const issues = getState().issues.issues
    const issue = issues.filter(item => {
        if(item.id == id){
            return item
        }
    })
    if(issue.length > 0){
        dispatch(setIssue(issue[0]))
    }else{
        dispatch(setError('Page is undefined'))
    }
    
}