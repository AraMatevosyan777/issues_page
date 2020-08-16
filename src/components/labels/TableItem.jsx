import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Label from '../common/Label';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { labelType, issueType } from '../../types';
import PropTypes from 'prop-types';
import { DeleteOutlined } from '@ant-design/icons';
import { Tooltip, Popconfirm, Input } from 'antd';
import EditButton from '../common/EditButton';
import { issuesData } from '../../data';

const TableItem = ({ label, issues, deleteLabel, editLabel }) => {
  const [filteredIssues, setFilteredIssues] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [state, setState] = useState({
    title: label.title,
    bgc: label.bgc,
  });

  useEffect(() => {
    const item = issuesData.filter((issue) => {
      const item =
        issue.labels &&
        issue.labels.some((item) => {
          if (label.id === item.id) {
            return issue;
          }
          return null;
        });
      return item;
    });
    setFilteredIssues(item);
  }, [issues, label]);

  useEffect(() => {
    setState({ ...state, title: label.title, bgc: label.bgc });
  }, [label]);
  const onSave = () => {
    const editedLabel = {
      id: label.id,
      title: state.title,
    };
    editLabel(editedLabel);
    setEditMode(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {!editMode ? (
        <div>
          <Popconfirm
            title="Are you sure delete this label?"
            onConfirm={() => deleteLabel(label.id)}
            okText="Yes"
            cancelText="No"
          >
            <Tooltip placement="topLeft" title="Delete label">
              <DeleteOutlined style={{ marginRight: 10 }} />
            </Tooltip>
          </Popconfirm>
          <Label label={state} />
          <EditButton onEdit={() => setEditMode(true)} />
        </div>
      ) : (
        <>
          <Input
            style={{ width: 100, borderColor: state.bgc }}
            value={state.title}
            autoFocus={true}
            onChange={(e) => setState({ ...state, title: e.target.value })}
            onBlur={onSave}
          />
        </>
      )}
      {filteredIssues.length > 0 && (
        <NavLink to={'/issues/' + label.id}>
          <div style={{ cursor: 'pointer' }}>
            <ExclamationCircleOutlined style={{ marginRight: '5px' }} />
            {filteredIssues.length}
          </div>
        </NavLink>
      )}
    </div>
  );
};

TableItem.propTypes = {
  issues: PropTypes.arrayOf(PropTypes.shape(issueType)),
  label: PropTypes.shape(labelType),
};

export default TableItem;
