import React from 'react';
import { Button, PageHeader } from 'antd';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const LabelsHeader = ({ setVisible }) => {
  const history = useHistory();

  return (
    <PageHeader
      className="site-page-header"
      onBack={() => history.push('/issues')}
      title="Labels"
      extra={[
        <Button key={1} onClick={setVisible} type="primary" size="large">
          Add label +
        </Button>,
      ]}
    />
  );
};

LabelsHeader.propTypes = {
  setVisible: PropTypes.func,
};

export default LabelsHeader;
