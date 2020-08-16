import React from 'react';
import m from './index.module.css';
import CommentsForm from './CommentsForm';
import Comment from './Comment';
import PropTypes from 'prop-types';
import { issueType } from '../../types';

const Comments = ({ issue, addComment }) => {
  return (
    <div className={m.comments}>
      {issue &&
        issue.comments &&
        issue.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      <CommentsForm issue={issue} addComment={addComment} />
    </div>
  );
};

Comments.propTypes = {
  issue: PropTypes.shape(issueType),
  addComment: PropTypes.func,
};

export default Comments;
