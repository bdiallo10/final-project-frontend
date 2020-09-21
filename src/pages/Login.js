import React, { Component } from 'react';
import UserModel from '../models/user';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit')
    UserModel.login(this.state)
      .then(data => {
        console.log(data)

        if (!data.email) return false

        this.props.storeUser(data.email)
        this.props.history.push('/profile')
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="createForm">
        <h4>Login</h4>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="form-group">
            <Form.Label htmlFor="name">Email</Form.Label>
              <Form.Control 
                onChange={this.handleChange}
                type="text"
                id="email"
                name="email"
                placeholder="Please enter your username"
                value={this.state.email}
              />
            <Form.Label>Password</Form.Label>
              <Form.Control 
                onChange={this.handleChange}
                className="form-control form-control-lg"
                type="password"
                id="password"
                name="password"
                placeholder="Please enter your password"
                value={this.state.password}
              />

          <Button type="submit">Login</Button>
          </Form.Group>
        </Form>

        <div className="about">
                <h3>Login Disclaimer</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
      </div>
    );
  }
}

export default Login;