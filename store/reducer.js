
const initialState = {
	contacts: [],
};

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case "GET_DATA":
			// console.log(action.array);
			return {...state, contacts: action.array};
		default:
			return state;
	}
};

export default reducer;
