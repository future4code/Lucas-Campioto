import React from 'react';
import axios from 'axios';
import Styled from 'styled-components';
import ItemPlayList from '../ItemPlayList/index'

const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api";

class ListaPlayList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            arrayPlayLists: [],
        }

        
    }

    componentDidMount(){
        this.pegarPlayLists();
    }

    pegarPlayLists = () =>{
        const axiosHeader ={
            headers: {
                auth: "lucas"
            }
        }

        const request = axios.get(
            `${baseURL}/playlists/getAllPlaylists`, axiosHeader
        );

        request.then(response =>{
            this.setState({arrayPlayLists: response.data.result.list})
        })

    }

    render(){
        
        return(
            <div>
                <h3>Lista De Playlist</h3>
                <ul>
                    {this.state.arrayPlayLists.map(playlist =>(
                        <ItemPlayList playlist={playlist}/>
                        
                    ))}
                </ul>
            </div>
        )
    }
}

export default ListaPlayList