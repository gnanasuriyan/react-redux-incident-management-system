import React from 'react';
import { Layout } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import LoginFormComponent from '../../components/login/login.component';
import './login.container.css';

function LoginContainer() {
  return (
    <Layout>
      <Header>
        <h3>Incident Management System</h3>
      </Header>
      <Content>
        <LoginFormComponent />
      </Content>
    </Layout>
  );
}

export default LoginContainer;
