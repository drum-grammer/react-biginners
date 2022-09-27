import { useEffect, useState } from "react";
function App() {
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
						{movies.map((movie, key) => (
						<div key={movie.id}>
							<h2>{movie.title} ({movie.year})</h2>
							<button>{movie.rating}</button>
							{movie.genres.map((g, i) => (
								<button>{g}</button>
							))}
							<p>{movie.summary}</p>
							<img src={movie.medium_cover_image} alt="not found"></img>
						</div>)
					)}
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
