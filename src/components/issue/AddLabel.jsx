import React, { useEffect, useState } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Label from '../common/Label';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { labelType } from '../../types';

const AddLabel = ({ labels, issueLabels, selectLabel, id }) => {
  const [filteredLabels, setFilteredLabels] = useState([]);
  const onSelect = (value) => {
    const selectedLabel = filteredLabels.filter((item) => {
      if (item.id === parseInt(value.key)) return item;
      return null;
    });
    selectLabel(id, selectedLabel[0]);
  };
  useEffect(() => {
    const item = labels.filter((label) => {
      const item =
        issueLabels &&
        issueLabels.every((item) => {
          if (label.id !== item.id) {
            return label;
          }
          return null;
        });
      return item;
    });
    setFilteredLabels(item);
  }, [issueLabels, labels]);
  const menu = (
    <Menu>
      {filteredLabels.length ? (
        filteredLabels.map((label) => (
          <Menu.Item key={label.id} onClick={onSelect}>
            <Label label={label} />
          </Menu.Item>
        ))
      ) : (
        <Menu.Item>all labels are added</Menu.Item>
      )}
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <Button
        type="link"
        className="ant-dropdown-link"
        onClick={(e) => e.preventDefault()}
      >
        Add Label <DownOutlined />
      </Button>
    </Dropdown>
  );
};

AddLabel.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.shape(labelType)) || [],
  issueLabels: PropTypes.arrayOf(PropTypes.shape(labelType)) || [],
  selectLabel: PropTypes.func,
  id: PropTypes.number,
};

const mapStateToProps = (state) => ({
  labels: state.labels.labels,
});
export default connect(mapStateToProps, {})(AddLabel);
