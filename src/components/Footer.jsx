import { useDispatch, useSelector } from "react-redux";
import { colorChanged, statusChanged } from "../redux/filter/actionCreators";

const taskLeft = (num_of_todos) => {
	switch (num_of_todos) {
		case 0:
			return "No Task";
		case 1:
			return "1 Task";
		default:
			return `${num_of_todos} tasks`;
	}
};

export default function Footer() {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos);
	const filter = useSelector((state) => state.filter);

	const { status, colors } = filter;
	const remainingTodos = todos.filter((todo) => !todo.completed).length;

	const handleStatusChanged = (status) => {
		dispatch(statusChanged(status));
	};

	const handleColorChanged = (color) => {
		if (colors.includes(color)) {
			dispatch(colorChanged(color, "removed"));
		} else {
			dispatch(colorChanged(color, "added"));
		}
	};

	return (
		<div className="mt-4 flex justify-between text-xs text-gray-500">
			<p>{taskLeft(remainingTodos)} left</p>
			<ul className="flex space-x-1 items-center text-xs">
				<li
					className={`cursor-pointer ${status === "All" && "font-bold"}`}
					onClick={() => handleStatusChanged("All")}
				>
					All
				</li>
				<li>|</li>
				<li
					className={`cursor-pointer ${status === "Incomplete" && "font-bold"}`}
					onClick={() => handleStatusChanged("Incomplete")}
				>
					Incomplete
				</li>
				<li>|</li>
				<li
					className={`cursor-pointer ${status === "Complete" && "font-bold"}`}
					onClick={() => handleStatusChanged("Complete")}
				>
					Complete
				</li>
				<li></li>
				<li></li>
				<li
					onClick={() => handleColorChanged("green")}
					className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
						colors.includes("green") && "bg-green-500"
					}`}
				></li>
				<li
					onClick={() => handleColorChanged("yellow")}
					className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
						colors.includes("yellow") && "bg-yellow-500"
					}`}
				></li>
				<li
					onClick={() => handleColorChanged("red")}
					className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
						colors.includes("red") && "bg-red-500"
					}`}
				></li>
			</ul>
		</div>
	);
}
