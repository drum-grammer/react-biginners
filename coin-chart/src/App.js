import { useEffect, useState } from "react";

function App() {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([])
	useEffect(() => {
		fetch("https://api.coinpaprika.com/v1/tickers")
			.then((response) => response.json())
			.then((json) => {
				setCoins(json);
				setLoading(false);
			}
		);
	}, [])

	return (
		<div className="App">
			<h1>The coins ({coins.length})</h1>
			{loading ? <strong>Loading ......</strong> : null}
			<ul>
				{coins.map((coin, key) => <li key={key}>{coin.name} ({coin.symbol} = {coin.quotes.USD.price} USD)</li>)}
			</ul>
			{/* {coins} */}
		</div>
	);
}

export default App;
