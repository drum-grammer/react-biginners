import { useEffect, useState } from "react";
import Movie from "../components/Movie.js";
import { useParams } from "react-router-dom";

function Detail() {
	const { movieId } = useParams()
	console.log(movieId)
	const [loading, setLoading] = useState(true)
	const [movie, setMovie] = useState([])
	const getMovie = async () => {
		const json = await (
			await fetch(
				`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`
			)
		).json();
		setMovie(json.data.movie);
		setLoading(false);
	};

	useEffect(() => {
		getMovie();
	}, []);

	// return <h1>Detail</h1>

	return (
		<div>
			<div>
				{loading ? (
					<h1>Loading ......</h1>
				) :(
					<div>
						<Movie
							id={movie.id}
							coverImg={movie.medium_cover_image}
							title={movie.title}
							summary={movie.description_full}
							genres={movie.genres}
							rating={movie.rating}
							year={movie.year}
						/>
					</div>
				)}
			</div>
		</div>
	);
}

export default Detail;
