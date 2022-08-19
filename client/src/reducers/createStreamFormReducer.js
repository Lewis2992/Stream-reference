const createStreamFormReducer = (state = {}, action) => {
	switch (action.type) {
		case 'CREATE_STREAM':
			return {...state, [action.payload.id]: action.payload};
		case 'FETCH_STREAM':
			return {...state, [action.payload.id]: action.payload};
		case 'FETCH_STREAMS':
			const streams = action.payload.map((cur, i) => {
				return Object.assign({}, {[cur.id]: cur});
			});

			return {...state, ...streams};

		case 'EDIT_STREAM':
			return {...state, [action.payload.id]: action.payload};
		case 'DELETE_STREAM':
			const stream = {...state};
			return null;
		default:
			return state;
	}
};

export default createStreamFormReducer;