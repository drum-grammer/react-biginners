
import { useEffect, useState } from "react";
import Movie from "../components/Movie.js";

function Detail() {
	const [loading, setLoading] = useState(true)
	const [movies, setMovies] = useState([])
	const getMovies = async () => {
		const json = await (
			await fetch(
				`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5?sort_by=year`
			)
		).json();

		setMovies(json.data.movies);
		setLoading(false);
	}
	useEffect(() => {
		getMovies();
	}, []);

	console.log(movies)

	return (
		<div>
			<div>
				{loading ? (
					<h1>Loading ......</h1>
				) :(
					<div>
						{ movies.map((movie, key) => (
							<Movie 
								key={key}
								id={movie.id}
								coverImg={movie.medium_cover_image}
								title={movie.title}
								summary={movie.summary}
								genres={movie.genres}
								rating={movie.rating}
								year={movie.year}
							/>
					))}
					</div>
				)}
			</div>
		</div>
	);
}

export default Detail;