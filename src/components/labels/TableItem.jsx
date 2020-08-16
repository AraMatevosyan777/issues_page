import React, { useState, useEffect } from 'react'
import Label from '../common/Label';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { labelType, issueType } from '../../types';
import PropTypes from 'prop-types';
import { DeleteOutlined } from '@ant-design/icons';
import { Tooltip, Popconfirm } from 'antd';

const TableItem = ({ label, issues, deleteLabel }) => {
    const [filteredIssues, setFilteredIssues] = useState([])

    useEffect(() => {
        const item = issues.filter(issue => {
            const item = issue.labels && issue.labels.some(item => {
                if (label.id === item.id) {
                    return issue
                }
            })
            return item
        })
        setFilteredIssues(item)
    }, [issues, label])

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
                <Popconfirm
                    title="Are you sure delete this label?"
                    onConfirm={()=>deleteLabel(label.id)}
                    okText="Yes"
                    cancelText="No"
                >
                    <Tooltip placement="topLeft" title='Delete label'>
                        <DeleteOutlined className='deleteBtn' />
                    </Tooltip>
                </Popconfirm>
                <Label label={label} />
            </div>
            {filteredIssues.length > 0 &&
                <div style={{ cursor: 'pointer' }}>
                    <ExclamationCircleOutlined style={{ marginRight: '5px' }} />{filteredIssues.length}
                </div>}
        </div>
    )
}

TableItem.propTypes = {
    issues: PropTypes.arrayOf(PropTypes.shape(issueType)),
    label: PropTypes.shape(labelType),
    deleteLabel: PropTypes.func
}

export default TableItem
