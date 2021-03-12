import React from "react";
import { Form, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

export class Login extends React.Component {
  constructor(props) {
    debugger;
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    debugger;

    const { username, password } = this.state;

    return (
      <Form>
        <h2>Login</h2>
        <Link to="/register">Register</Link>

        <Form.Group>
          <Form.Label>username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
            maxLength="10"
            onChange={this.handleChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            name="password"
            maxLength="10"
            onChange={this.handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Form>
    );
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    const { login, history } = this.props;
    const { username, password } = this.state;

    event.preventDefault();
    event.stopPropagation();

    debugger;
    login({ username, password }, history);
  };
}
