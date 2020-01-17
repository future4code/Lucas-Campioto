import axios from 'axios';

const setTrips = (allTrips) =>({
    type: "SET_TRIPS",
    payload: {
        allTrips,
    }
});

export const getTrips = () => async (dispatch,getState) =>{
    const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/futureX/lucas/trips")
    dispatch(setTrips(response.data.trips));
}

export const tripDetails = (tripId) => async (dispatch) => { 
    const response =  await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/futureX/lucas/trip/${tripId}`)
    dispatch(tripDetails(response.data.tripId))
    
}
    
export const createTrip = (name,date,description,durationInDays,planet) => async (dispatch) =>{
    const newTrip = {
        name,
        date,
        description,
        durationInDays,
        planet,
    }

   const token = window.localStorage.getItem("token")
//    console.log("teste new trip", newTrip)
    
    try{
        await axios.post("https://us-central1-missao-newton.cloudfunctions.net/futureX/lucas/trips", newTrip, {
            headers: {
                auth: token,
            }
        })

        dispatch(getTrips())

    } catch(error) {
        window.alert("Erro ao criar viagem")
    }
    
}

const setTripSelected = (tripId) =>({
    type: "SET_ID_SELECTED",
    payload: {
        tripId
    }
})

const setCandidates = (candidates) =>({
    type: "SET_CANDIDATES",
    payload: {
        candidates
    }
})

