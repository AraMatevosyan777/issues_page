import React, { useState } from 'react'
import { Form, Input } from 'antd'
import { Button } from 'antd'
import PropTypes from 'prop-types';
import { issueType } from '../../types';

const CommentsForm = ({issue, addComment}) => {
    const [submitting, setSubmitting] = useState(false)
    const [value, setValue] = useState('')
    const onSubmit = () => {
        if(value.trim()){
            const comment = {
                id: issue.comments.length + 1,
                comment: value
            }
            setSubmitting(true)
            setTimeout(()=>{
                addComment(issue.id,comment)
                setValue('')
                setSubmitting(false)
            }, 2000)    
        }
    }

    return (
        <div style={{ width: '80%' }}>
            <Form.Item>
                <Input.TextArea rows={4} onChange={(e) => setValue(e.target.value)} value={value} />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                    Add Comment
                    </Button>
            </Form.Item>
        </div>
    )
}

CommentsForm.propTypes = {
    issue: PropTypes.shape(issueType),
    addComment: PropTypes.func, 
  }

export default CommentsForm
