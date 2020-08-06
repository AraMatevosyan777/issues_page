import {ADD_LABEL} from './actions.js'

const initialState = {
    labels:[
        {id: 1, title: 'CLA Signed', bgc: '#009900'},
        {id: 2, title: 'contributions: claimed', bgc: '#d93f0b'},
        {id: 3, title: 'contributions: up for grabs!', bgc: '#128A0C'},
        {id: 4, title: 'dependencies', bgc: '#0366d6'},
        {id: 5, title: 'difficulty: complex', bgc: '#f9d0c4'},
        {id: 6, title: 'difficulty: impossible', bgc: '#e99695'},
        {id: 7, title: 'difficulty: medium', bgc: '#fef2c0'},
        {id: 8, title: 'difficulty: starter', bgc: '#c5def5'},
        {id: 9, title: 'good first issue', bgc: '#128A0C'},
        {id: 10, title: 'hacktoberfest', bgc: '#ff625f'},
        {id: 11, title: 'issue: announcement', bgc: '#5319e7'},
        {id: 12, title: 'issue: bug report', bgc: '#f49118'},
        {id: 13, title: 'issue: bug', bgc: '#ee0701'},
        {id: 14, title: 'issue: install problem', bgc: '#e5aa4b'},
        {id: 15, title: 'issue: needs investigation', bgc: '#d106e8'},
        {id: 16, title: 'needs triage', bgc: '#b5274d'},
    ]
}
export const labelsReducer = (state=initialState, action) => {
    switch(action.type){
        
        case ADD_LABEL:
            return{
                ...state,
                labels: [...state.labels, action.label]
            }
        default: return state
    }
}

