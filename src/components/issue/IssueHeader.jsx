import React from 'react'
import { PageHeader } from 'antd'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { drawerIsShow } from '../../redux/issues/actions'
import DrawerButton from '../common/DrawerButton'
import PropTypes from 'prop-types'

const IssueHeader = ({drawerIsShow}) => {
    const history = useHistory()

  return (
    <PageHeader
        className="site-page-header"
        onBack={() => history.push('/issues')}
        title="Issue"
        extra={[
          <DrawerButton key={1} drawerIsShow={drawerIsShow}/>
        ]}
      />
  )
}
IssueHeader.propTypes = {
  drawerIsShow: PropTypes.func
}

export default connect(null, {drawerIsShow})(IssueHeader)
