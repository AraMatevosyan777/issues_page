import React from 'react';
import m from './index.module.css';
import { Switch, Card, Input, Button } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import IsOpenLabel from '../../components/common/IsOpenLabel';
import { Typography } from 'antd';
import PropTypes from 'prop-types';
import { issueType } from '../../types';
import EditButton from '../common/EditButton';
import { useState } from 'react';
import { useEffect } from 'react';
const { Title } = Typography;

const IssueCard = ({ issue, onSwitch, onEdit }) => {
  const [editMode, setEditMode] = useState(false);
  const [data, setData] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    setData({ ...data, title: issue.title, description: issue.description });
  }, [issue]);
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onSave = () => {
    const editedIssue = {
      id: issue.id,
      ...data,
    };
    onEdit(editedIssue);
    setEditMode(false);
  };
  const title = (
    <div className="df">
      <div className={m.title}>
        {!editMode ? (
          <>
            <Title ellipsis="true" level={3}>
              {data.title}
            </Title>
            <Title level={3} className={m.titleId}>
              {'#' + issue.id}
            </Title>
          </>
        ) : (
          <Input
            onChange={changeHandler}
            name="title"
            style={{ width: '50%' }}
            value={data.title}
          />
        )}
      </div>
      <div className="df">
        {issue.isOpen ? (
          <IsOpenLabel bgc="#28a745" text="Open" />
        ) : (
          <IsOpenLabel bgc="#d73a49" text="Closed" />
        )}

        <Switch checked={issue.isOpen} onChange={onSwitch} />
      </div>
    </div>
  );
  return (
    <Card title={title} style={{ width: '80%' }}>
      {!editMode ? (
        <div style={{ width: '50%' }}>
          {data.description}
          <EditButton onEdit={() => setEditMode(true)} />
        </div>
      ) : (
        <>
          <Input.TextArea
            style={{ width: '50%', resize: 'none', marginRight: 10 }}
            onChange={changeHandler}
            name="description"
            value={data.description}
            autoSize={true}
          />
          <Button icon={<CheckOutlined />} type="primary" onClick={onSave}>
            Save
          </Button>
        </>
      )}
    </Card>
  );
};

IssueCard.propTypes = {
  issue: PropTypes.shape(issueType),
  onSwitch: PropTypes.func,
};

export default IssueCard;
