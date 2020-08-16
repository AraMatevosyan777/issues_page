import React, { useState } from 'react'
import { Table, Button } from 'antd'
import { connect } from 'react-redux'
import TableItem from './TableItem'
import PropTypes from 'prop-types'
import { labelType, issueType } from '../../types'
import { deleteLabel } from '../../redux/labels/actions'
import Search from '../common/search'

const LabelsTable = ({ labels, issues, deleteLabel }) => {

  const [searchValue, setSearchValue] = useState('')

  const searchingFor = (searchValue) => {
    return (label) => {
      return label.title.toLowerCase().includes(searchValue.toLowerCase()) || !searchValue
    }
  }

  const columns = [{
    title: <div style={{ display: 'flex', alignItems: 'center' }}>
      <p style={{ marginRight: '10px' }}>{labels.length + ' labels'}</p>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} placeholder='Search all labels'/>
      {searchValue.length > 0 &&
        <Button onClick={() => setSearchValue('')}>
          Reset
        </Button>
      }
    </div>,
    dataIndex: 'label'
  }];

  const data = labels.sort((a, b) => a.id < b.id ? 1 : -1).filter(searchingFor(searchValue)).map(label => {
    return {
      key: label.id, label: <TableItem deleteLabel={deleteLabel} label={label} issues={issues} />
    }
  })



  return (
    <Table columns={columns} dataSource={data} />
  )
}


LabelsTable.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.shape(labelType)) || [],
  issues: PropTypes.arrayOf(PropTypes.shape(issueType)),
  deleteLabel: PropTypes.func
}

const mapStateToProps = (state) => ({
  labels: state.labels.labels,
  issues: state.issues.issues,
})
export default connect(mapStateToProps, { deleteLabel })(LabelsTable)