//import PropTypes library
import PropTypes from "prop-types"

//MovieCard function component
export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div
      onClick={() => {
        onMovieClick(movie);
      }}
    >
      {movie.title}
    </div>
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