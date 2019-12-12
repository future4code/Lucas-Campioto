import React from 'react';
import Styled from 'styled-components';
import axios from 'axios';
import ItemListaUsuarios from '../ItemListaUsuarios/index';


const ContainerLista = Styled.div `

`

const baseURL = "https://us-central1-future4-users.cloudfunctions.net/api";

class ListaDeUsuarios extends React.Component {
   constructor(props){
       super(props)
       this.state = {
        arrayUsuarios: []
       }
   };

   componentDidMount(){
     this.pegarTodosOsUsuarios();
   }

   pegarTodosOsUsuarios = () =>{
       const axiosHeader = {
           headers: {
               "api-token": "campioto"
           }  
       };

       const pegarTodosOsUsuariosRequest = axios.get(
           `${baseURL}/users/getAllUsers`,
           axiosHeader
       );

       pegarTodosOsUsuariosRequest.then(response =>     {
           this.setState({arrayUsuarios: response.data.result});
       });

   }

   render(){
        return(
            

            <ContainerLista>
                <h3>Usuários Cadastrados</h3>

                {this.state.arrayUsuarios.map(usuario =>(
                <ItemListaUsuarios usuario={usuario} deletaUsuario={this.pegarTodosOsUsuarios} />
                
                ))} 
                
            </ContainerLista>
        );

        
   }
   
}

export default ListaDeUsuarios