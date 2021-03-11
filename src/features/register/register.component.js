import React from "react";
import { Form, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const { username, password } = this.state;

    return (
      <Form>
        <h2>Register</h2>
        <Link to="/login">login</Link>
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

        <Button
          variant="primary"
          type="submit"
          disabled={username.length <= 0 || password.length <= 0}
          onClick={this.handleSubmit}
        >
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
    const { createUser, history } = this.props;
    const { username, password } = this.state;

    event.preventDefault();
    event.stopPropagation();

    createUser({ username, password }, history);
  };
}
