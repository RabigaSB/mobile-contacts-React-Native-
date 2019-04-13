import axios from 'axios';

export const fetchData = () => {
	return (dispatch, getState) => {
		axios.get("https://rabiga-test.firebaseio.com/contacts.json")
			.then(response => response.data)
			.then(data => {
				let array = Object.keys(data).map(id => {
					return {
						id: id,
						name: data[id].name,
						phone: data[id].phone,
						email: data[id].email,
						image: data[id].image
					};
				});
				dispatch({type: 'GET_DATA', array});
			});
	}
};
