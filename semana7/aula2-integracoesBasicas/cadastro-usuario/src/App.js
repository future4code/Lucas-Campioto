import React from 'react';
import logo from './logo.svg';
import './App.css';
import CadastroUsuario from './components/CadastroUsuario/index';
import ListaDeUsuarios from './components/ListaDeUsuarios/index';
import Styled from 'styled-components';
import axios from 'axios';

const Botao = Styled.button `
border:none;
border:solid 1px black;
margin-top: 10px;
padding: 5px;
width:auto;
background-color: #FF8C00;
cursor:pointer;
`

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api"
const token = "campioto"


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      trocaPagina: "cadastro"
      
    }
  }

  trocarDePagina = () =>{
    if(this.state.trocaPagina === "cadastro"){
      this.setState({ trocaPagina: "lsita" });
    }else{
      this.setState({ trocaPagina: "cadastro" })
    }
  };

 

 

  render(){
    
    const textoBotao = this.state.trocaPagina === "cadastro" ? "Ir para lista":"Ir para Cadastro";
      
    return (
      
      <div className="App">
        <Botao onClick={this.trocarDePagina}><b>{textoBotao}</b></Botao>
        {this.state.trocaPagina === "cadastro" ? <CadastroUsuario />: <ListaDeUsuarios />}
        
      </div>
     
    );
    
  }
}

export default App;
