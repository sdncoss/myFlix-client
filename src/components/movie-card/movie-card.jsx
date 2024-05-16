import React from "react";
//import PropTypes library
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

//MovieCard function component
export const MovieCard = ({ movie }) => {
  return (
    <Card>
      <Card.Img varian="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.director}</Card.Text>
        <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
          <Button variant="link">Open</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};


//This defines all props constraints 
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    director: PropTypes.shape({
      name: PropTypes.string,
      bio: PropTypes.string
    }),
    description: PropTypes.string.isRequired,
    genre: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string
    }),
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};