import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case STATUSCHANGED:
			return {
				...state,
				status: action.payload,
			};

		case COLORCHANGED:
			switch (action.payload.changeType) {
				case "added":
					return {
						...state,
						colors: [...state.colors, action.payload.color],
					};

				case "remove":
					return {
						...state,
						colors: state.colors.map(
							(existingColor) => existingColor !== action.payload.color
						),
					};

				default:
					return state;
			}

		default:
			return state;
	}
};

export default reducer;
