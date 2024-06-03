import React from "react";
import { Button, Form, Input, message } from "antd";
import "./Style/style.css";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
  const navigate = useNavigate();

  const onFinishHandler = async (values) => {
    try {
      const res = await axios.post('/api/v1/user/login', values)
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");
      }else{
        message.error(res.data.message)
      }
    } catch (error) {
      console.log(error);
      message.error('Something Went Wrong')
    }
  };

  const onFinishFailedHandler = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onFinishHandler}
          onFinishFailed={onFinishFailedHandler}
          className="card p-4"
        >
          <h3>Login Form</h3>
          <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input type="password" />
          </Form.Item>
          <Link to="/register">Not a user? Go to register page</Link>
          <Button className="btn btn-primary" type="primary" htmlType="submit">Login</Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
