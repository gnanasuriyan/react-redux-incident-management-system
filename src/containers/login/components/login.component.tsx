import { Form, Input, Button, Checkbox } from 'antd';
import { useState } from 'react';

const LoginFormComponent = () => {
  const [loading, setLoading] = useState(false);
  const [loginForm] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    setLoading(false);
    console.log('Failed:', errorInfo);
  };

  const onSubmitCapture = () => {
    setLoading(true);
  }

  return (
    <Form
      name="login-form"
      form={loginForm}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onSubmitCapture={onSubmitCapture}
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
        <Button type="primary" htmlType="submit" loading={loading}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginFormComponent;

