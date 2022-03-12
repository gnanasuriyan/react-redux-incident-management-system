import { Layout } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import React from 'react';
import LoginFormComponent from './components/login.component';
import './login.container.css';

function LoginContainer() {
  return (
    <Layout>
      <Header>
        <h3 className='header'>Incident Management System</h3>
      </Header>
      <Content>
        <LoginFormComponent />
      </Content>
    </Layout>
  );
}

export default LoginContainer;
