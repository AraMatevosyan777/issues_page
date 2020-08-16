import React, { useState } from 'react';
import { Table, Button } from 'antd';
import { connect } from 'react-redux';
import TableItem from './TableItem';
import { issueType } from '../../types';
import PropTypes from 'prop-types';
import Search from '../common/search';
import { useParams, NavLink } from 'react-router-dom';
import { CloseOutlined } from '@ant-design/icons';

const IssuesTable = ({ issues }) => {
  const [searchValue, setSearchValue] = useState('');
  const params = useParams();

  const searchingFor = (searchValue) => {
    return (issue) => {
      return (
        issue.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        !searchValue
      );
    };
  };

  const columns = [
    {
      title: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ marginRight: '10px' }}>{issues.length + ' issues'}</p>
          <Search
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            placeholder="Search all issues"
          />
          {searchValue.length > 0 && (
            <Button onClick={() => setSearchValue('')}>Reset</Button>
          )}
          {params.label && (
            <div>
              <NavLink to="/issues">
                <CloseOutlined
                  // onClick={() => getIssues()}
                  style={{
                    color: 'white',
                    backgroundColor: '#585858',
                    padding: '3px',
                    borderRadius: 5,
                    cursor: 'pointer',
                    marginRight: 5,
                  }}
                />
              </NavLink>
              clear labels filter
            </div>
          )}
        </div>
      ),
      dataIndex: 'name',
    },
  ];

  const data = issues
    .sort((a, b) => (a.id < b.id ? 1 : -1))
    .filter(searchingFor(searchValue))
    .map((issue) => {
      return {
        key: issue.id,
        name: <TableItem issue={issue} />,
      };
    });

  return <Table columns={columns} dataSource={data} />;
};

IssuesTable.propTypes = {
  issues: PropTypes.arrayOf(PropTypes.shape(issueType)),
};

const mapStateToProps = (state) => ({
  issues: state.issues.issues,
});
export default connect(mapStateToProps, {})(IssuesTable);
