import React from "react";
import { Button, Form, Input, message } from "antd";
import "./Style/style.css";
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading())
      const res = await axios.post('/api/v1/user/register', values);
      dispatch(hideLoading())
      if (res.data.success) {
        message.success('Register Successfully!');
        navigate('/login')
      } else {
        message.error(res.data.message)
      }
    } catch (error) {
      dispatch(hideLoading())
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
          <h3>Register Form</h3>
          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input type="password" />
          </Form.Item>
          <Link to="/login">Already a user? Go to login page</Link>
          <Button className="btn btn-primary" type="primary" htmlType="submit">Register</Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
