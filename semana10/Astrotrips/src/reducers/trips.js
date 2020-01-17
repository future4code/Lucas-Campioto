const initialState = {
    allTrips: [],
    idTripSelected: "",
    candidates: [],
  }
  
  const tripsReducer = (state = initialState, action) => {
    switch(action.type){
      case "SET_TRIPS":
        const tripList =  action.payload.allTrips;
        return { ...state, allTrips: tripList }
  
      case "SET_ID_SELECTED":
        const idSelected = action.payload.idTripSelected;
        return { ...state, idTripSelected: idSelected }

      case "SET_CANDIDATES":
        return { ...state, candates: action.payload.candidates }

        default:
          return state;
  
    }
   
  }

export default tripsReducer