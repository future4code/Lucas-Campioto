import React from 'react';
import axios from 'axios';
import Styled from 'styled-components';

const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api";

class DetalhesPlayList extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            detalhesMusicas: [],
        }
    }

    musicasDeUmaPlayList = (playlistId) =>{
        const url = `${baseURL}/playlists/getPlaylistMusics/${playlistId}`
   
        const request = axios.get(url, {
            headers: {
                auth: "lucas"
            }
        })
   
        request.then(response => {
        //    console.log(response.data.result.musics)
            
        })
    }

    render(){
       
        return(
            <div>
                <span onClick={this.props.onClick}></span>
            </div>

        )
    }

}

export default DetalhesPlayList