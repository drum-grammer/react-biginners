import Button from "./Button";
import styles from "./App.module.css";
import {useState} from "react";

function App() {
	const [counter, setValue] = useState(0);
	const onClick = () => setValue((prev) => prev + 1);
	console.log("call an api")
  return (
    <div>
		<h1 className={styles.title}>Welcome Back!!</h1>
		<Button text={"Continue"}/>
		<button onClick={onClick}>click me</button>
		<h1 className={styles.title}>{counter}</h1>
    </div>
  );
}

export default App;
