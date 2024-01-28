import PropTypes from "prop-types";
import {Link } from "react-router-dom";


function Movie({id, coverImg, title, summary, genres}) {
    return (
    <div >
    <img src={coverImg} alt={title} />
    
    <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
    <p>{summary}</p>
    <ui>
      {genres.map((g) => (
        <li key={g}>{g}</li>
      ))}
    </ui>
    </div>
    );
}

Movie.propTypes = {
    id:PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;