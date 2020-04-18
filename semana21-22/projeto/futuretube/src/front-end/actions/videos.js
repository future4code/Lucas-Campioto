import axios from 'axios';

const baseURL = "https://us-central1-futuretube-projeto.cloudfunctions.net/futureTube"

export const setVideos = (allVideos) => ({
    type: "SET_VIDEOS",
    payload: {
        allVideos,
    }
})

export const getVideos = () => async (dispatch) => {
    
    try {
        const response = await axios.get(`${baseURL}/getVideos`)
        dispatch(setVideos(response.data.videos.videos));

    } catch (error) {
        window.alert("erro")
    }
}

export const sendVideos = (url,title,description) => async (dispatch) => {
    const videoInformation = {
        url,
        title,
        description
    }

    try{
        await axios.post(`${baseURL}/sendVideos`, videoInformation)
        dispatch(getVideos())
    }catch (err){
        window.alert("erro ao enviar videos")
    }
}