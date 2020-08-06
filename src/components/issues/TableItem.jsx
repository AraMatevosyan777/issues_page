import React from 'react'
import m from './index.module.css'
import { CommentOutlined } from '@ant-design/icons';
import Label from '../common/Label';
import { NavLink } from 'react-router-dom';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { issueType } from '../../types';

const TableItem = ({issue}) => {
  return (
    <div className={m.tableItem}>
        <div className={m.tableItemInner}>
            <ExclamationCircleOutlined style={{marginRight: '5px',fontSize: '18px', color: issue.isOpen?'#28a745' : '#d73a49'}}/>
            <NavLink className={m.title} to={'/issue/' + issue.id}>{issue.title}</NavLink>
            <div style={{ display: 'flex' }}>{issue.labels.map((label, index) => <Label key={index} label={label} />)}</div>
        </div>
        {issue.comments.length > 0 && 
            <div>
                <CommentOutlined style={{marginRight: '5px'}}/>
                {issue.comments.length}
            </div>}
    </div>
  )
}

TableItem.propTypes = {
  issue: PropTypes.shape(issueType),
}

export default TableItem
