import { InitialState } from './types';
import { ACTION_TYPE } from './constants';

const initialState: InitialState = {
	requestedLevel: 1,
	currentLevel: 1,
	map: '',
	result: null,
	helper: [],
};

const reducer = (state = initialState, action: any) => {
	switch (action.type) {
		case ACTION_TYPE.SELECT_LEVEL:
			return {
				...state,
				requestedLevel: action.payload,
				result: null,
			};
		case ACTION_TYPE.GET_MAP:
			return {
				...state,
				currentLevel: state.requestedLevel,
				map: action.payload,
			};
		case ACTION_TYPE.GET_RESULT:
			return {
				...state,
				result: action.payload,
			};
		case ACTION_TYPE.GET_HELPER:
			return {
				...state,
				helper: [...state.helper, action.payload],
			};
		case ACTION_TYPE.RESET_HELPER:
			return {
				...state,
				helper: [],
			};
		default:
			return state;
	}
};

export default reducer;
