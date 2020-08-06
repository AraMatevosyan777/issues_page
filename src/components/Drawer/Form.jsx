import React, { useEffect, useState } from 'react'
import m from './index.module.css'
import { Form, Input, Button } from 'antd';
import SelectLabels from './SelectLabels';
import Label from '../common/Label'
import { connect } from 'react-redux';
import {addIssue, drawerIsShow} from '../../redux/issues/actions'
import PropTypes from 'prop-types';
import { issueType } from '../../types';

const IssueForm = ({ issues, addIssue, drawerIsShow, setSuccess }) => {
    const [labelsList, setLabelsList] = useState([])

    const [form] = Form.useForm();
    const [ ,setError] = useState({})
    const onFinishFailed = (errorInfo) => {
        setError(errorInfo)
      }
    let initialValues = {
        title: '',
        description: '',
    }
    const [, forceUpdate] = useState(); // To disable submit button at the beginning.

    useEffect(() => {
        forceUpdate({});
    }, []);
   

    const onFinish = (values) => {
        const {title, description} = values
        const newIssue = {
            id: issues.length + 1,
            title, description,
            labels: [...labelsList],
            comments: [],
            isOpen: true
        }
        addIssue(newIssue)
        setSuccess(true)
        setTimeout(()=>{
            form.resetFields()
            setLabelsList([])
            drawerIsShow(false)
            setSuccess(false)
        }, 2000)
    }

    return (
        <Form layout='vertical'
            form={form}
            name="addIssue"
            onFinish={onFinish}
            initialValues={initialValues}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item name='title' label="Title" rules={[{ required: true, message: 'Please input issue title' }]}>
                <Input autoComplete='off'/>
            </Form.Item>
            <Form.Item name='description' label="Description" rules={[{ required: true, message: 'Please input issue description' }]}>
                <Input.TextArea />
            </Form.Item>
            <div className={m.selectLabels}>
                <SelectLabels labelsList={labelsList} setLabelsList={setLabelsList}/>
                {labelsList ? labelsList.map((item,index) => <Label key={index} label={item} />) : null}
            </div>
            <Form.Item shouldUpdate>
                {() => (
                    <>
                        <Button
                            style={{ marginRight: "10px" }}
                            type="primary"
                            htmlType="submit"
                            disabled={
                                !form.isFieldsTouched(true) ||
                                form.getFieldsError().filter(({ errors }) => errors.length).length
                            }>
                            Save
                        </Button>
                        <Button
                            htmlType="button"
                            onClick={() => form.resetFields() && setLabelsList([])}>
                            Reset
                        </Button>
                    </>
                )}
            </Form.Item>
        </Form>
    )
}

IssueForm.propTypes = {
    issues: PropTypes.arrayOf(PropTypes.shape(issueType)),
    addIssue: PropTypes.func, 
    drawerIsShow: PropTypes.func, 
    setSuccess: PropTypes.func, 
  };

const mapStateToProps = (state) => ({
    issues: state.issues.issues
})
export default connect(mapStateToProps, {addIssue, drawerIsShow})(IssueForm)
