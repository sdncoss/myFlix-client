import React from "react";
import { Form, Button, Row } from "react-bootstrap";
import PropTypes from "prop-types";

export const UpdateUser = ({ data, handleUpdate, handleSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    // this prevents the default behavior of the form which is to reload the entire page
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
    };

    fetch(`https://my-flix-db-975de3fb6719.herokuapp.com/users/${storedUser.UserName}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authroization: `Bearer ${token}`
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Update response: ", data);
        if (data.user) {
          handleUpdate(data.user, data.token);
        } else {
          alert("Update failed");
        }
      })
      .catch((e) => {
        alert("Somthing went wrong");
      });
  };


  return (
    <Row>
      <Form onSubmit={handleSubmit}>
        <h2>Update Profile Information</h2>
        <Form.Group controlId="formUsername">
          <Form.Label>New Username:</Form.Label>
          <Form.Control
            type="text"
            placeholder="New Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            minLength={5}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>New Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={8}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>New Email:</Form.Label>
          <Form.Control
            type="email"
            placeholder="New Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBirthday">
          <Form.Label>New Birthday:</Form.Label>
          <Form.Control
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">Submit Changes</Button>
      </Form>
    </Row>
  );
};
UpdateUser.propTypes = {
  formData: PropTypes.object.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};