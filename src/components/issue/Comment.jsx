import React from 'react';
import { Comment as Com, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';
import { commentType } from '../../types';

const Comment = ({ comment }) => {
  return (
    <Com
      style={{ width: '80%' }}
      author={<a href={comment.id}>author: {comment.id}</a>}
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      }
      content={<p>{comment.comment}</p>}
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
  );
};

Comment.propTypes = {
  comment: PropTypes.shape(commentType),
};

export default Comment;
