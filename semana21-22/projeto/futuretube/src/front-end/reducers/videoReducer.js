const initialState = {
    allVideos:[],
}

const videosReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_VIDEOS":
            const videoList = action.payload.allVideos;
            return {...state, allVideos: videoList}   

            
            default:
            return state;
    }
}

export default videosReducer    