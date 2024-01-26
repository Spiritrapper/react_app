import PropTypes from "prop-types";
function Movie({coverImg, title, summary, genres}) {
    return (
    <div >
    <img src={coverImg} alt={`${title} cover`} />
    <h2>{title}</h2>
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
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;