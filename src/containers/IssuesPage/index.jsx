import React, { useEffect, Component } from 'react'
import IssuesTable from '../../components/issues/IssuesTable'
import IssuesHeader from '../../components/issues/IssuesHeader'
import { RadiusUprightOutlined } from '@ant-design/icons'
import { notification } from 'antd'
import { connect } from 'react-redux'
import { setError } from '../../redux/issue/actions'
import PropTypes from 'prop-types'

class issuesPage extends Component {

  openNotification = () => {
    notification.info({
      message: this.props.error
    })
    this.props.setError(null)
  }
  componentDidMount(){
    this.props.error && this.openNotification()
  }

  render() {
    return (
      <>
        <IssuesHeader />
        <IssuesTable />
        <RadiusUprightOutlined />
      </>
    )
  }
}

issuesPage.propTypes = {
  error: PropTypes.string || null
}

const mapStateToProps = (state) => ({
  error: state.issue.error
})

export default connect(mapStateToProps, {setError})(issuesPage)
