import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { RadiusUprightOutlined } from '@ant-design/icons';
import { notification } from 'antd';
import IssuesTable from '../../components/issues/IssuesTable';
import IssuesHeader from '../../components/issues/IssuesHeader';
import { setError } from '../../redux/issue/actions';
import { withRouter } from 'react-router-dom';
import { getIssues } from '../../redux/issues/thunk';

class IssuesPage extends Component {
  openNotification = () => {
    notification.info({
      message: this.props.error,
    });
    this.props.setError(null);
  };
  refreshIssues = () => {
    const label = this.props.match.params.label;
    this.props.getIssues(label);
  };
  componentDidMount() {
    this.refreshIssues();
    this.props.error && this.openNotification();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.label &&
      this.props.match.params.label === undefined
    ) {
      this.refreshIssues();
    }
  }

  render() {
    return (
      <>
        <IssuesHeader />
        <IssuesTable />
        <RadiusUprightOutlined />
      </>
    );
  }
}

IssuesPage.propTypes = {
  error: PropTypes.string || null,
};

const mapStateToProps = (state) => ({
  error: state.issue.error,
});

export default withRouter(
  connect(mapStateToProps, { setError, getIssues })(IssuesPage)
);
