import {
	ADDED,
	ALLCOMPLETED,
	CLEARCOMPLETED,
	COLORSELECTED,
	DELETED,
	LOADDED,
	TOGGLED,
} from "./actionTypes";

export const loadded = (todos) => {
	return {
		type: LOADDED,
		payload: todos,
	};
};

export const added = (todoText) => {
	return {
		type: ADDED,
		payload: todoText,
	};
};

export const deleted = (todoId) => {
	return {
		type: DELETED,
		payload: todoId,
	};
};

export const allCompleted = () => {
	return {
		type: ALLCOMPLETED,
	};
};

export const clearCompleted = () => {
	return {
		type: CLEARCOMPLETED,
	};
};

export const colorSelected = (todoId, color) => {
	return {
		type: COLORSELECTED,
		payload: {
			todoId,
			color,
		},
	};
};

export const toggled = (todoId) => {
	return {
		type: TOGGLED,
		payload: todoId,
	};
};
