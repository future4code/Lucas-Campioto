import axios from 'axios'

export const getProfilesAction = (profiles) =>({
	type: "GET_PROFILE",
	payload:{
		profiles,
	}
})

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/clear')
}

export const getProfiles = () => async (dispatch, getState) => {
	const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucas/person")
	dispatch(getProfilesAction( response.data.profile));
}