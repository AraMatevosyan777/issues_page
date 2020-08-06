import PropTypes from 'prop-types';

export const labelType = {
    id: PropTypes.number,
    title: PropTypes.string,
    bgc: PropTypes.string
}
export const commentType = {
    id: PropTypes.number,
    comment: PropTypes.string,
}
export const issueType = {
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    labels: PropTypes.arrayOf(PropTypes.shape(labelType)) || [],
    comments: PropTypes.arrayOf(PropTypes.shape(commentType)) || [],
    isOpen: PropTypes.bool
}

