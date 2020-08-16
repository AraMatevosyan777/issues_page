export const ADD_LABEL = 'labels/ADD_LABEL'
export const DELETE_LABEL = 'labels/DELETE_LABEL'

export const addLabel = (label) => ({type: ADD_LABEL, label})
export const deleteLabel = (id) => ({type: DELETE_LABEL, id})