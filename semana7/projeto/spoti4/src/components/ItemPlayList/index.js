import React from 'react';
import axios from 'axios';
import Styled from 'styled-components';
import DetalhesPlayList from '../DetalhesPlayList/index'

const Deletar = Styled.span`
margin-left:30px;
color:red;
cursor:pointer;
`

const ItemContainer = Styled.li`
list-style-type: none;
`

const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api";

class ItemPlayList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            detalhesMusicas: [{}],
        }
    }

 deletarPlaylist = () =>{
     const url = `${baseURL}/playlists/deletePlaylist?playlistId=${this.props.playlist.id}`;

     const axiosHeader = {
         headers: {
             auth: "lucas",
         }
     };

     axios.delete(url,axiosHeader).then(()=>{
         this.props.deletarPlaylist();
     })

 }

 musicasDeUmaPlayList = (playlistId) =>{
     const url = `${baseURL}/playlists/getPlaylistMusics/${playlistId}`

     const request = axios.get(url, {
         headers: {
             auth: "lucas"
         }
     })

     request.then(response => {

        // this.setState({detalhesMusicas: response.data.result.musics})
        
        console.log(response.data.result.musics)
        
         
     })
 }


    render(){
        // console.log(this.detalhesMusicas)
        return(
        
            <ItemContainer>
                <span>{this.props.playlist.name}</span>
                <Deletar onClick ={this.deletarPlaylist}>Remover</Deletar>

                {/* {this.state.detalhesMusicas.map(detalhe => ( */}
                    <DetalhesPlayList 
                        onClick={() => this.musicasDeUmaPlayList(this.props.playlist.id)} 
                        detalhe={this.props.detalhe}>      
                    </DetalhesPlayList>
                {/* ))} */}
                
                
            </ItemContainer>
        )
    }
}

export default ItemPlayList

