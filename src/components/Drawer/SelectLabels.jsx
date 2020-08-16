import React from 'react';
import { Menu, Dropdown, message, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import Label from '../common/Label';
import PropTypes from 'prop-types';
import { labelType } from '../../types';

const SelectLabels = ({ labels, labelsList, setLabelsList }) => {
  const onSelect = (e) => {
    const selectedItem = labels.filter((label) => {
      if (label.id === parseInt(e.key)) {
        return label;
      }
      return null;
    });
    if (selectedItem.length) {
      const filterItems = labelsList.filter((item) => {
        if (item.id === selectedItem[0].id) {
          return item;
        }
        return null;
      });
      if (!filterItems.length) {
        setLabelsList([...labelsList, selectedItem[0]]);
      } else {
        message.info('Label already added');
      }
    }
  };
  const menu = (
    <Menu>
      {labels.map((label) => (
        <Menu.Item key={label.id} onClick={onSelect}>
          <Label label={label} />
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <Button
        type="link"
        className="ant-dropdown-link"
        onClick={(e) => e.preventDefault()}
      >
        Select labels <DownOutlined />
      </Button>
    </Dropdown>
  );
};

SelectLabels.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.shape(labelType)) || [],
  labelsList: PropTypes.arrayOf(PropTypes.shape(labelType)) || [],
  setLabelsList: PropTypes.func,
};

const mapStateToProps = (state) => ({
  labels: state.labels.labels,
});
export default connect(mapStateToProps, {})(SelectLabels);
