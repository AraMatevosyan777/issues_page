import React from 'react'
import m from './index.module.css'
import { Card, Popconfirm } from 'antd'
import AddLabel from './AddLabel'
import Label from '../common/Label'
import PropTypes from 'prop-types';
import { issueType } from '../../types'

const LabelsCard = ({issue, selectLabel, onLabelDelete}) => {
    return (
        <Card title='Labels' style={{ width: '20%' }}
            extra={[
                <AddLabel key={1} id={issue.id} issueLabels={issue.labels} selectLabel={selectLabel} />
            ]}
        >
            <div className={m.labelsCard}>
                {issue.labels && issue.labels.map(label =>
                    <div key={label.id} className={m.labelsCardBody}>
                        <Label label={label} />
                        <Popconfirm
                            title="Are you sure delete this label?"
                            onConfirm={() => onLabelDelete(label)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <a href="#">Delete</a>
                        </Popconfirm>
                    </div>)}
                {issue.labels && !issue.labels.length && <p>Not yet</p>}
            </div>
        </Card>
    )
}

LabelsCard.propTypes = {
    issue: PropTypes.shape(issueType),
    selectLabel: PropTypes.func,
    onLabelDelete: PropTypes.func, 
  }

export default LabelsCard
