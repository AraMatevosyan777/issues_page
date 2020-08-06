import React from 'react'
import m from './index.module.css'
import { Switch, Card } from 'antd';
import IsOpenLabel from '../../components/common/IsOpenLabel'
import { Typography } from 'antd';
import PropTypes from 'prop-types';
import { issueType } from '../../types';
const { Title } = Typography;

const IssueCard = ({issue, onSwitch}) => {
    const title = (
        <div className='df'>
          <div className={m.title}>
            <Title ellipsis='true' level={3}>{issue.title}</Title>
            <Title level={3}>{'#' + issue.id}</Title>
          </div>
          <div className='df'>
            {issue.isOpen
              ? <IsOpenLabel bgc='#28a745' text='Open'/>
              : <IsOpenLabel bgc='#d73a49' text='Closed'/>
            }
            
            <Switch checked={issue.isOpen} onChange={onSwitch} />
          </div>
        </div>
    )
  return (
    <Card title={title} style={{ width: '80%' }}>
        <div style={{ width: '50%' }}>{issue.description}</div>
    </Card>
  )
}

IssueCard.propTypes = {
  issue: PropTypes.shape(issueType),
  onSwitch: PropTypes.func, 
};

export default IssueCard
