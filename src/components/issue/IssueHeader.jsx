import React from 'react';
import { PageHeader, Popconfirm, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { drawerIsShow } from '../../redux/issues/actions';
import DrawerButton from '../common/DrawerButton';
import PropTypes from 'prop-types';

const IssueHeader = ({ drawerIsShow, onDelete }) => {
  const history = useHistory();

  return (
    <PageHeader
      className="site-page-header"
      onBack={() => history.push('/issues')}
      title="Issue"
      extra={[
        <Popconfirm
          key={1}
          title="Are you sure delete this issue?"
          onConfirm={onDelete}
          okText="Yes"
          cancelText="No"
        >
          <Button type="link">Delete</Button>
        </Popconfirm>,
        <DrawerButton key={2} drawerIsShow={drawerIsShow} />,
      ]}
    />
  );
};
IssueHeader.propTypes = {
  drawerIsShow: PropTypes.func,
  onDelete: PropTypes.func,
};

export default connect(null, { drawerIsShow })(IssueHeader);
