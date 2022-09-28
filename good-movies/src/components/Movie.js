import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres, rating, year }) {
	return (
		<div key={id}>
			<h2>
				<Link to="/movie">{title} ({year}) </Link>
			</h2>
			<button>{rating}</button>
			{genres.map((g, i) => (
				<button key={i}>{g}</button>
			))}
			<p>{summary}</p>
			<img src={coverImg} alt="not found"></img>
		</div>
	)
}

Movie.propTypes = {
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;