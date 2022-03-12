import React from 'react';
import { Layout } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';

function IncidentListContainer() {
  return (
    <Layout>
      <Header>
        <h3>Incident Management System</h3>
      </Header>
      <Content>
        <h3>Incident list page</h3>
      </Content>
    </Layout>
  );
}

export default IncidentListContainer;
