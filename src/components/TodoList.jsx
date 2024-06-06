import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function TodoList() {
	const todos = useSelector((state) => state.todos);
	const filter = useSelector((state) => state.filter);

	const filterStatus = (todo) => {
		const { status } = filter;

		switch (status) {
			case "Complete":
				return todo.completed;

			case "Incomplete":
				return !todo.completed;

			default:
				return true;
		}
	};

	const filterColor = (todo) => {
		const { colors } = filter;
		if (colors.length > 0) {
			return colors.includes(todo?.color);
		}
		return true;
	};

	return (
		<div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
			{todos.length > 0 ? (
				todos
					.filter(filterStatus)
					.filter(filterColor)
					.map((todo) => <Todo todo={todo} key={todo.id} />)
			) : (
				<h1 className="text-center font-bold mt-2 mb-2">No Todo Added</h1>
			)}
		</div>
	);
}
