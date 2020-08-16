import React from 'react';
import m from './common.module.css';
import PropTypes from 'prop-types';
import { labelType } from '../../types';

const Label = ({ label }) => {
  const bgc = {
    backgroundColor: label.bgc,
  };
  return (
    <span className={m.label} style={bgc}>
      {label.title}
    </span>
  );
};

Label.propTypes = {
  label: PropTypes.shape(labelType),
};

export default Label;
