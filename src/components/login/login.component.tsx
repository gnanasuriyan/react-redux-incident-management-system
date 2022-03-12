import { Form, Input, Button, Checkbox } from 'antd';
import { useEffect, useState } from 'react';

const LoginFormComponent = ({
  isLoading,
  error,
  doLogin
}: any) => {
  const [loginForm] = Form.useForm();
  const onFinish = (values: any) => {
    doLogin(values);
  };

  return (
    <Form
      name="login-form"
      form={loginForm}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

     <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Login
        </Button>
      </Form.Item>
      {
        error && (
          <Form.Item wrapperCol={{ offset: 8, span: 16 }} >
              <span className='error-message'>{error}</span>
          </Form.Item>
        )
      }
    </Form>
  );
};

export default LoginFormComponent;

