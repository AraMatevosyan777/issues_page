import React from 'react'
import { Table } from 'antd';
import { connect } from 'react-redux';
import TableItem from './TableItem';
import { issueType } from '../../types';
import PropTypes from 'prop-types';

const IssuesTable = ({ issues }) => {

  const columns = [{ title: issues.length + ' issues', dataIndex: 'name' }];
  const data = issues.map(issue => {
    return {
      key: issue.id,
      name: <TableItem issue={issue}/>
    }
  })

  return (
    <Table columns={columns} dataSource={data}/>
  )
}

IssuesTable.propTypes = {
  issues: PropTypes.arrayOf(PropTypes.shape(issueType)),
}

const mapStateToProps = (state) => ({
  issues: state.issues.issues
})
export default connect(mapStateToProps, {})(IssuesTable)
