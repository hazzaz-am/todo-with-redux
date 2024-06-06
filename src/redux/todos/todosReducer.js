import {
	ADDED,
	ALLCOMPLETED,
	CLEARCOMPLETED,
	COLORSELECTED,
	DELETED,
	LOADDED,
	TOGGLED,
} from "./actionTypes";
import { initialState } from "./initialState";

// for generate todo id
const nextTodoId = (todos) => {
	const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), 0);
	return maxId + 1;
};

// reducer function
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOADDED:
			return action.payload;

		case ADDED:
			return [
				...state,
				{
					id: nextTodoId(state),
					text: action.payload,
					completed: false,
				},
			];

		case DELETED:
			return state.filter((todo) => todo.id !== action.payload);

		case ALLCOMPLETED:
			return state.map((todo) => {
				return {
					...todo,
					completed: true,
				};
			});

		case CLEARCOMPLETED:
			return state.filter((todo) => !todo.completed);

		case COLORSELECTED:
			return state.map((todo) => {
				if (todo.id === action.payload.todoId) {
					return {
						...todo,
						color: action.payload.color,
					};
				}
				return todo;
			});

		case TOGGLED:
			return state.map((todo) => {
				if (todo.id === action.payload) {
					return {
						...todo,
						completed: !todo.completed,
					};
				}
				return todo;
			});

		default:
			return state;
	}
};

export default reducer;
