import React from 'react';
import { EditOutlined } from '@ant-design/icons';

const EditButton = ({ onEdit }) => {
  const style = {
    marginLeft: 10,
    cursor: 'pointer',
    fontSize: 16,
    color: 'blue',
  };
  return <EditOutlined style={style} onClick={onEdit} />;
};

export default EditButton;
