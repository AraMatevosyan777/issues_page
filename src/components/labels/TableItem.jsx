import React, { useState, useEffect } from 'react'
import Label from '../common/Label';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { labelType, issueType } from '../../types';
import PropTypes from 'prop-types';

const TableItem = ({label, issues}) => {
    const [filteredIssues, setFilteredIssues] = useState([])
  
    useEffect(()=>{
        const item = issues.filter(issue=> {
         const item = issue.labels && issue.labels.some(item=>{
                if(label.id === item.id) {
                    return issue
                }
            })
            return item
        })
        setFilteredIssues(item)
    }, [issues, label])
  
    return (
      <div style={{display:'flex', justifyContent: 'space-between'}}>
        <Label label={label}/>
        {filteredIssues.length > 0 && 
            <div style={{cursor: 'pointer'}}>
                <ExclamationCircleOutlined style={{marginRight: '5px'}}/>{filteredIssues.length} 
            </div>}
      </div>
    )
}
  
TableItem.propTypes = {
    issues: PropTypes.arrayOf(PropTypes.shape(issueType)),
    label: PropTypes.shape(labelType),
}

export default TableItem
