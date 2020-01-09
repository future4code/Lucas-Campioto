const initialState = {
  allProfiles: [],
}

const profiles = (state = initialState, action) => {
  switch(action.types){
    case "GET_PROFILE":
      return { ...state , allProfiles: action.payload.profiles}

      default:
        return state;

  }
 
}

export default profiles
