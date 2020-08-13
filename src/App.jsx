import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import store from './redux/store';
import AddIssueDrawer from './Modals/AddIssueDrawer';
import Routing from './routing/Routing';

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout className="layout">
        <Layout.Content className="content">
          <div className="container">
            <Routing />
            <AddIssueDrawer />
          </div>
        </Layout.Content>
      </Layout>
    </Router>
  </Provider>
);

export default App;
