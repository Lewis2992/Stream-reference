import streams from '../apis/streams';

export const handleSignIn = (userObject) => {
	// console.log(userObject);
	return {
		type: 'SIGN_IN',
		payload: userObject
	};
};

export const handleSignOut = () => {
	return {
		type: 'SIGN_OUT'
	};
};

export const storeForm = (formData) => {
	return async (dispatch, getState) => {
		const userId = getState().auth.user.sub
		const res = await streams.post('/streams', {...formData, userId});

		dispatch({
			type: 'CREATE_STREAM',
			payload: res.data
		});
	};
};

export const fetchStreams = () => {
	return async (dispatch) => {
		const res = await streams.get('/streams');
		dispatch({
			type: 'FETCH_STREAMS',
			payload: res.data
		});
	};
};

export const fetchStream = (id) => {
	return async (dispatch) => {
		const res = await streams.get(`/streams/${id}`)

		dispatch({
			type: 'FETCH_STREAM',
			payload: res.data
		})
	}
};

export const editStream = (id, formData) => {
	return async(dispatch) => {
		const res = await streams.put(`/streams/${id}`, formData);

		dispatch({
			type: 'EDIT_STREAM',
			payload: res.data
		});
	};
};

export const deleteStream = (id) => {
	return async(dispatch) => {
		await streams.delete(`/streams${id}`);

		dispatch({
			type: 'DELETE_STREAM',
			payload: id
		});
	};
};