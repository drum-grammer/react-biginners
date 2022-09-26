import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";

function Hello() {
	function hiFn() {
		console.log("hi :)")
	}
	function byeFn() {
		console.log("bye :(")
	}
	useEffect(() => {
		hiFn();
		return byeFn;
	}, []);
	return <h1>Hello</h1>;
}

function App() {
	const [counter, setValue] = useState(0);
	const [keyword, setKeyword] = useState("");
	const [showing, setShowing] = useState(false);

	const onClick = () => setValue((prev) => prev + 1);
	const onClickShowing = () => setShowing((prev) => !prev);
	const onChange = (event) => setKeyword(event.target.value);

	useEffect(() => {
		console.log("[only once] CALL THE API ......");
	}, []);
	useEffect(() => {
		console.log("counter changed: ", counter);
	}, [counter]);
	useEffect(() => {
		if (keyword !== "" && keyword.length > 1) {
			console.log("Search for ", keyword);
		}
	}, [keyword]);
	useEffect(() => {
		console.log("counter and keyword changed: ");
	}, [counter, keyword]);

	return (
		<div>
			<h1 className={styles.title}>Welcome Back!!</h1>
			<input
				value={keyword}
				onChange={onChange}
				type="text"
				placeholder="Search..."
			/>
			<Button text={"Continue"}/>
			<button onClick={onClick}>click me</button>
			<h1 className={styles.title}>{counter}</h1>
			<button onClick={onClickShowing}>{showing ? "HIDE" : "SHOW"}</button>
			{showing ? <Hello /> : null}
		</div>
	);
}

export default App;
