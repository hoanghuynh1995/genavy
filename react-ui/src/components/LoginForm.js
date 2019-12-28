import React, { Component } from 'react'
import { Form, Input, Checkbox, Button } from 'antd';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      remember: false
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      this.props.submit(values);
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(<Input
            placeholder="Email"
          />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(<Input type="password"
            placeholder="Password"
          />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
        {this.props.loggedInFailed ? <p style={{ color: 'red' }}>Invalid username or password!</p> : ''}
      </Form>
    )
  }
}

export default Form.create({ name: 'normal_login' })(LoginForm);
