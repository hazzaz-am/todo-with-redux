import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function TodoList() {
	const todos = useSelector((state) => state.todos);
	return (
		<div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
			{todos.length > 0 ? (
				todos.map((todo) => <Todo todo={todo} key={todo.id} />)
			) : (
				<h1 className="text-center font-bold mt-2 mb-2">No Todo Added</h1>
			)}
		</div>
	);
}
