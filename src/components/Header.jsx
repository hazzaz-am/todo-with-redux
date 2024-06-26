import { useState } from "react";
import { useDispatch } from "react-redux";
import doubleTick from "../assets/images/double-tick.png";
import notesImg from "../assets/images/notes.png";
import plus from "../assets/images/plus.png";
import {
	allCompleted,
	clearCompleted,
} from "../redux/todos/actionCreators";
import addTodo from "../redux/todos/thunk/addTodo";

export default function Header() {
	const [input, setInput] = useState("");
	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(addTodo(input));
		setInput("");
	};

	const completedHandler = () => {
		dispatch(allCompleted());
	};

	const clearCompletedHandler = () => {
		dispatch(clearCompleted());
	};

	return (
		<div>
			<form
				className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
				onSubmit={submitHandler}
			>
				<img src={notesImg} className="w-6 h-6" alt="Add todo" />
				<input
					type="text"
					placeholder="Type your todo"
					className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
					value={input}
					onChange={() => setInput(event.target.value)}
				/>
				<button
					type="submit"
					className={`appearance-none w-8 h-8 bg-[url('${plus}')] bg-no-repeat bg-contain`}
				></button>
			</form>

			<ul className="flex justify-between my-4 text-xs text-gray-500">
				<li
					className="flex space-x-1 cursor-pointer"
					onClick={completedHandler}
				>
					<img className="w-4 h-4" src={doubleTick} alt="Complete" />
					<span>Complete All Tasks</span>
				</li>
				<li className="cursor-pointer" onClick={clearCompletedHandler}>
					Clear completed
				</li>
			</ul>
		</div>
	);
}
