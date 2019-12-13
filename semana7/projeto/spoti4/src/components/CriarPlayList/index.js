import React from 'react';
import axios from 'axios';
import Styled from 'styled-components';


const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api";

class CriarPlayList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: "",
        }
    }

    onChangeNomePlayList = (e) =>{
        this.setState({name: e.target.value})
    }

    adcPlayList = () =>{
        const novaPlayList = {
            name: this.state.name
        }

        const axiosHeader = {
            headers:{
                auth: "lucas",
            }
        }

        axios.post(`${baseURL}/playlists/createPlaylist`,novaPlayList,axiosHeader)
        
    }

    render(){
        
        return(
            <div>
                <h3>Nova PlayList</h3>
                <div>
                    <input 
                    placeholder="Nome da PlayList" 
                    value={this.state.name}
                    onChange={this.onChangeNomePlayList}/>
                </div>
                <button onClick={this.adcPlayList}>Salvar PlayList</button>
            </div>
        )
    }
   
}

export default CriarPlayList;