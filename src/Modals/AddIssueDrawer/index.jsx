import React, { useState } from 'react';
import { Drawer } from 'antd';
import Form from '../../components/Drawer/Form';
import Success from '../../components/Drawer/Success';
import { drawerIsShow } from '../../redux/issues/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AddIssue = ({ showDrawer, drawerIsShow }) => {
  const [success, setSuccess] = useState(false);
  return (
    <Drawer
      title="Add new issue"
      placement="right"
      closable={false}
      onClose={() => drawerIsShow(false)}
      visible={showDrawer}
      width={400}
    >
      {!success ? <Form setSuccess={setSuccess} /> : <Success />}
    </Drawer>
  );
};

AddIssue.propTypes = {
  showDrawer: PropTypes.bool,
  drawerIsShow: PropTypes.func,
};

const mapStateToProps = (state) => ({
  showDrawer: state.issues.showDrawer,
});
export default connect(mapStateToProps, { drawerIsShow })(AddIssue);
