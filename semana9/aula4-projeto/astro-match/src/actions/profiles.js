import axios from 'axios'

 const setProfileToSwipe = (profile) =>({
	type: "SET_PROFILE_TO_SWIPE",
	payload:{
		profile,
	}
})

const setMatch =(matches)=>({
	type: "SET_MATCHES",
	payload:{
		matches,
	}
})

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucas/clear')
}

export const fetchProfileToSwipe = () => async (dispatch) => {
	const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucas/person');
	dispatch(setProfileToSwipe( response.data.profile));
	
}

export const chooseProfile = (id,choice) => async (dispatch) =>{
	const respose = await axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucas/choose-person',{id,choice})
	dispatch(fetchProfileToSwipe())
}


export const getMatches = () => async (dispatch)=>{
	const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucas/matches');
	dispatch(setMatch(response.data.matches));
	console.log("testando matches",response.data.matches)
}

