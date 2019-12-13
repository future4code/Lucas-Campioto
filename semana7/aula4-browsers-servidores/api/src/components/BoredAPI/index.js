import React, { Component } from 'react';
import Styled from 'styled-components';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';


const baseURL = "http://www.boredapi.com/api/activity/";

const Container = Styled.div`
   margin-top:30px;
   
    
`



const Botao = Styled.button`
    border:none;
    padding:15px;
    width: 200px;
    background-color: black;
    color:white;
    margin-top:10px;

`


class BoredAPI extends Component {
    constructor(props){
        super(props);

        this.state = {
            atividades: {}
        }
    }

    componentDidMount(){
        this.atividadesAleatorias();
    }

    atividadesAleatorias = async () => {
        const response = await axios.get(baseURL); 
        this.setState({ atividades: response.data })
    }

    

    render() {
        
        return(
            <div>
                <Container>
                    <Button variant="outlined" color="primary" onClick={this.atividadesAleatorias}>Nova Atividade</Button>
                    <h1>Atividade: { this.state.atividades.activity }</h1>
                    <h3>Número de Participantes: { this.state.atividades.participants }</h3>
                </Container>
            </div>
        )
    }
}

export default BoredAPI;