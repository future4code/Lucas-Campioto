const initialState = {
    allTrips: [],
  }
  
  const tripsReducer = (state = initialState, action) => {
    switch(action.type){
      case "SET_TRIPS":
        const tripList =  action.payload.allTrips;
        return { ...state, allTrips: tripList }
  
        default:
          return state;
  
    }
   
  }

export default tripsReducer