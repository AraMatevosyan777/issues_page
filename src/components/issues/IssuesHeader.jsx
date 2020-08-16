import React from 'react';
import m from './index.module.css';
import { Button, PageHeader } from 'antd';
import { useHistory } from 'react-router-dom';
import { TagOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { drawerIsShow } from '../../redux/issues/actions';
import DrawerButton from '../common/DrawerButton';
import PropTypes from 'prop-types';
import { labelType } from '../../types';

const IssuesHeader = ({ labels, drawerIsShow }) => {
  const history = useHistory();

  return (
    <PageHeader
      className="site-page-header"
      title="Issues"
      extra={[
        <Button
          key={1}
          onClick={() => history.push('/labels')}
          className={m.toLabelsPage}
          icon={<TagOutlined />}
        >
          Labels
          <span className={m.labelsCount}>{labels.length}</span>
        </Button>,
        <DrawerButton key={2} drawerIsShow={drawerIsShow} />,
      ]}
    ></PageHeader>
  );
};

IssuesHeader.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.shape(labelType)) || [],
  drawerIsShow: PropTypes.func,
};

const mapStateToProps = (state) => ({
  showDrawer: state.issues.showDrawer,
  labels: state.labels.labels,
});
export default connect(mapStateToProps, { drawerIsShow })(IssuesHeader);
