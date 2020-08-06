import React from 'react'
import m from './common.module.css'
import { Button } from 'antd'
import PropTypes from 'prop-types';

const DrawerButton = ({drawerIsShow}) => {
  return (
    <Button className={m.drawerButton} onClick={()=> drawerIsShow(true)} type="primary">New issue</Button>
  )
}
DrawerButton.propTypes = {
  drawerIsShow: PropTypes.func,
};
export default DrawerButton