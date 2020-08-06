import React from 'react'
import { Table } from 'antd';
import { connect } from 'react-redux';
import TableItem from './TableItem';
import PropTypes from 'prop-types';
import { labelType, issueType } from '../../types';

const LabelsTable = ({labels, issues}) => {
   

    const columns = [{title: labels.length +' labels',dataIndex: 'name'}, ];
    const data = labels.map(label=> {return{
      key: label.id, name: <TableItem label={label} issues={issues}/>}})
    
      function onChange(pagination, filters, sorter, extra) {
      }
  return (
    <Table columns={columns} dataSource={data} onChange={onChange} />
  )
}

LabelsTable.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.shape(labelType)) || [],
  issues: PropTypes.arrayOf(PropTypes.shape(issueType)),
}

const mapStateToProps = (state) => ({
  labels: state.labels.labels,
  issues: state.issues.issues,
})
export default connect(mapStateToProps, {})(LabelsTable)