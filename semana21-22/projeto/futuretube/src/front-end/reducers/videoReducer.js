const initialState = {
    allVideos:[],
}

const videosReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_VIDEOS":
            const videoList = action.payload.allVideos;
            return {...state, allVideos: videoList}   

        case "REMOVE_VIDEO":
             return state;

            default:
            return state;
    }
}

export default videosReducer    