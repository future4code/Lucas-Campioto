import axios from 'axios';

const setTrips = (allTrips) =>({
    type: "SET_TRIPS",
    payload: {
        allTrips,
    }
})

export const getTrips = () => async (dispatch,getState) =>{
    const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/futureX/lucas/trips")
    dispatch(setTrips(response.data.trips));
}