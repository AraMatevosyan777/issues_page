import React, { Component } from 'react'
import m from './index.module.css'
import {message } from 'antd'
import IssueHeader from '../../components/issue/IssueHeader'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getIssue } from '../../redux/issue/thunk'
import { addLabel, deleteLabel, addComment, setIsopen } from '../../redux/issues/actions'
import Comments from '../../components/issue/Comments'
import IssueCard from '../../components/issue/IssueCard'
import LabelsCard from '../../components/issue/LabelsCard'
import PropTypes from 'prop-types';
import { issueType } from '../../types'

class IssuePage extends Component {
  
  refreshPage = () => {
    const id = this.props.match.params.id
    if (!id) {
      this.props.history.push('./issues')
    }
    this.props.getIssue(id)
  }

  componentDidMount() {
    this.refreshPage()
  }
  
  selectLabel = (id, label) => {
    this.props.addLabel(id, label)
    this.refreshPage()
  }
  addComment = (id, comment) => {
    this.props.addComment(id, comment)
    this.refreshPage()
  }

  onLabelDelete = (label) => {
    this.props.deleteLabel(this.props.issue.id, label.id)
    this.refreshPage()
    message.info('Label deleted')
  }
  onSwitch = () => {
    this.props.setIsopen(this.props.issue.id, this.props.issue.isOpen)
    this.refreshPage()
  }
  render() {
    if(this.props.error){
      this.props.history.push('/issues')
    }
    const { issue } = this.props
    
    return (
      <div>
        <IssueHeader />
        <div className={m.body}>
          <IssueCard onSwitch={this.onSwitch} issue={issue}/>
          <LabelsCard issue={issue} onLabelDelete={this.onLabelDelete} selectLabel={this.selectLabel}/>
          <Comments issue={issue} addComment={this.addComment} />
        </div>
      </div>
    )
  }
}

IssuePage.propTypes = {
  issue: PropTypes.shape(issueType),
  error: PropTypes.string,
  getIssue: PropTypes.func,
  addLabel: PropTypes.func, 
  deleteLabel: PropTypes.func, 
  addComment: PropTypes.func, 
  setIsope: PropTypes.func, 
}

const mapStateToProps = (state) => ({
  issue: state.issue.issue,
  error: state.issue.error,
})

export default withRouter(connect(mapStateToProps, { getIssue, addLabel, deleteLabel, addComment, setIsopen })(IssuePage))
