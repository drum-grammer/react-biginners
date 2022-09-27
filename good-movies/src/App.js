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
					<li>Test ......</li>
				)}
			</div>
		</div>
	);
}

export default App;
