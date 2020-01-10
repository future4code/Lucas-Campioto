import axios from 'axios'

 const setProfileToSwipe = (profile) =>({
	type: "SET_PROFILE_TO_SWIPE",
	payload:{
		profile,
	}
})

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucas/clear')
}

export const fetchProfileToSwipe = () => async (dispatch) => {
	const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucas/person');
	dispatch(setProfileToSwipe( response.data.profile));
	console.log("testando",response.data.profile)
}

