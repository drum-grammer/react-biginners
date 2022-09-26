import { useState } from "react";

function App() {
	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState([]);
	const onChange = (event) => setTodo(event.target.value);
	const onSubmit = (event) => {
		event.preventDefault();
		if (todo === "") {
			return;
		}
		setTodos(currentArray => [todo, ...currentArray]);
		setTodo("");
	}
	console.log("todo", todo)
	console.log("todos: ", todos)


	return (
		<div>
			<h1>My Todos: {todos.length}</h1>
			<form onSubmit={onSubmit}>
				<input
					onChange={onChange}
					value={todo}
					type="text" 
					placeholder="Write your todo ......"
				/>
			<button>Add Todo</button>
			</form>
		</div>
	);
}

export default App;
