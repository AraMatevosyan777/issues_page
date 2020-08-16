import React, { Component } from 'react';
import { message } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getIssue from '../../redux/issue/thunk';
import {
  addLabel,
  deleteLabel,
  addComment,
  setIsopen,
  deleteIssue,
  editIssue,
} from '../../redux/issues/actions';
import Comments from '../../components/issue/Comments';
import IssueCard from '../../components/issue/IssueCard';
import LabelsCard from '../../components/issue/LabelsCard';
import { issueType } from '../../types';
import IssueHeader from '../../components/issue/IssueHeader';
import m from './index.module.css';

class IssuePage extends Component {
  componentDidMount() {
    this.refreshPage();
  }

  refreshPage = () => {
    const { id } = this.props.match.params;
    if (!id) {
      this.props.history.push('./issues');
    }
    this.props.getIssue(id);
  };

  selectLabel = (id, label) => {
    this.props.addLabel(id, label);
    this.refreshPage();
  };

  addComment = (id, comment) => {
    this.props.addComment(id, comment);
    this.refreshPage();
  };

  onLabelDelete = (label) => {
    this.props.deleteLabel(this.props.issue.id, label.id);
    this.refreshPage();
    message.info('Label deleted');
  };

  onSwitch = () => {
    this.props.setIsopen(this.props.issue.id, this.props.issue.isOpen);
    this.refreshPage();
  };

  onDelete = () => {
    this.props.deleteIssue(this.props.issue.id);
    this.props.history.push('/issues');
  };

  onEdit = (issue) => {
    this.props.editIssue(issue);
  };

  render() {
    if (this.props.error) {
      this.props.history.push('/issues');
    }
    const { issue } = this.props;

    return (
      <div>
        <IssueHeader onDelete={this.onDelete} />
        <div className={m.body}>
          <IssueCard
            onSwitch={this.onSwitch}
            issue={issue}
            onEdit={this.onEdit}
          />
          <LabelsCard
            issue={issue}
            onLabelDelete={this.onLabelDelete}
            selectLabel={this.selectLabel}
          />
          <Comments issue={issue} addComment={this.addComment} />
        </div>
      </div>
    );
  }
}

IssuePage.propTypes = {
  issue: PropTypes.shape(issueType),
  error: PropTypes.string,
  getIssue: PropTypes.func,
  addLabel: PropTypes.func,
  deleteLabel: PropTypes.func,
  deleteIssue: PropTypes.func,
  editIssue: PropTypes.func,
  addComment: PropTypes.func,
  setIsopen: PropTypes.func,
  id: PropTypes.string,
};

const mapStateToProps = (state) => ({
  issue: state.issue.issue,
  error: state.issue.error,
});

export default withRouter(
  connect(mapStateToProps, {
    getIssue,
    addLabel,
    deleteLabel,
    addComment,
    setIsopen,
    deleteIssue,
    editIssue,
  })(IssuePage)
);
