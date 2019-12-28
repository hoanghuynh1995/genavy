import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Row, Col, Form, Input, Checkbox } from 'antd';

import LoginForm from '../../components/LoginForm';
import { login } from './actions';
import { useHistory, useLocation } from 'react-router-dom';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      remember: false,
    };
  }
  submit = values => {
    this.setState({
      email: values.email,
      password: values.password,
      remember: values.remember
    });
    this.props.login(values.email, values.password, values.remember, () => {
      // console.log('history', history, 'location', location);
      console.log('redirect after login');
      this.props.history.push('/');
    });
  }
  render() {
    return (
      <Row type="flex" justify="center">
        <Col span={8}>
          <LoginForm submit={this.submit} loggedInFailed={this.props.user.loggedInFailed}/>
          <div className="product-item">
            abcd
      </div>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    login: (email, password, remember, cb) => {
      return dispatch(login(email, password, remember, cb))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)