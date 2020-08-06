import React from 'react'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import m from './common.module.css'
import PropTypes from 'prop-types';

const IsOpenLabel = ({bgc, text}) => {
  return (
    <div className={m.isOpen} style={{backgroundColor: bgc}}>
        <ExclamationCircleOutlined style={{marginRight: '5px',fontSize: '18px'}}/>{text}
    </div>
  )
}

IsOpenLabel.propTypes = {
  bgc: PropTypes.string,
  text: PropTypes.string 
}

export default IsOpenLabel
