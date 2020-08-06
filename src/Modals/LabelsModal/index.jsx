import React, { useState } from 'react'
import m from './index.module.css'
import { Input, Alert } from 'antd'
import { CirclePicker } from 'react-color'
import Modal from 'antd/lib/modal/Modal'
import { connect } from 'react-redux'
import { addLabel } from '../../redux/labels/actions'
import PropTypes from 'prop-types';
import { labelType } from '../../types'

const LabelsModal= ({ addLabel, labels, visible, setVisible }) => {
  const [editMode, setEditMode] = useState(false)
  const [title, setTitle] = useState('')
  const [bgc, setBgc] = useState('')
  const [error, setError] = useState('')
  
  const add = () => {
    const label = {
      id: labels.length + 1,
      bgc, title
    }
    if(!title.trim() || !bgc.trim()){
      setError('Enter all fields')
      setTimeout(()=>{
        setError('')
      }, 3000)
    }
    else{
      addLabel(label)
      setVisible()
    }
  }
  const onCancel = () => {
    setVisible()
    setBgc('')
    setTitle('')
    setEditMode(false)
  }
  return (
    <Modal
      title="Add Label"
      visible={visible}
      onOk={add}
      onCancel={onCancel}
    >
        <div className={m.body}>
            <Input className={m.input}  onChange={(e)=> setTitle(e.target.value)} value={title} allowClear placeholder='enter label title' />
            <div className={m.selectColor} >
              <span className={m.span} onMouseOver={() => setEditMode(true)}>select color</span>
              {editMode && 
                <div onMouseLeave={()=> setEditMode(false)} className={m.colorPicker} >
                  <CirclePicker value={bgc} onChange={(e)=> setBgc(e.hex)}/>
                </div>
              }
            </div>
            {bgc && <div style={{backgroundColor: bgc}} className={m.selectedColor}/>}
            
        </div>
        {error && <Alert message={error} type="error" />}
    </Modal>
  )
}

LabelsModal.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.shape(labelType)) || [],
  addLabel: PropTypes.func, 
  visible: PropTypes.bool, 
  setVisible: PropTypes.func, 
}

const mapStateToProps = (state) => ({
  labels: state.labels.labels
})
export default connect(mapStateToProps, {addLabel})(LabelsModal)