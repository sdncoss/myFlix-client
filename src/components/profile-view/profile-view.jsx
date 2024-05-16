import React from "react";
import { useEffect, useState } from "react";
import { Row, Button, Col, Card, Image } from "react-bootstrap";
import { UpdateUser } from "./update-user";

export const ProfileView = ({ user, token, movies, onSubmit }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [username, setUsername] = useState(user.UserName);
  const [email, setEmail] = useState(user.Email);
  const [birthdate, setBirthdate] = useState(user.Birthdate);
  const [password, setPassword] = useState("");

  const favoriteMovies = movies.filter(m => user.FavoriteMovies.includes(m.title));

  const data = {
    UserName: username,
    Email: email,
    Password: password
  };


  const handleDeleteAccount = (id) => {
    fetch(`https://my-flix-db-975de3fb6719.herokuapp.com/users/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }).then((response) => {
      if (response.ok) {
        alert("The account has been successfully deleted.");
        localStorage.clear();
        window.location.reload();
      } else {
        alert("Something went wrong.");
      }
    });
  };

  return (
    <>
      <Row>
        <Card >
          <Card.Body>
            <Col
            >
            </Col>
            <Card.Title><h2> Hello {username}! </h2></Card.Title>
            <Row className="justify-content-center">
              <FavoriteMovies user={user} favoriteMovies={favoriteMovies} />
            </Row>
            <Button onClick={() => handleDeleteAccount(storedUser._id)}
              className="button-delete mt-3"
              type="submit" variant="outline-secondary">
              Delete account</Button>
          </Card.Body>
        </Card>
        <Col>
          <UpdateUser
            data={data}
            handleUpdate={handleUpdate}
            handleSubmit={handleSubmit}
          />
        </Col>
        <br />
      </Row>
      <hr />

    </>
  );
}