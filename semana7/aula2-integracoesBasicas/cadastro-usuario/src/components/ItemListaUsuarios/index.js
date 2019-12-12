import React from "react";
import axios from 'axios';
import Styled from 'styled-components';


const Deletar = Styled.span `
    margin-left:20px;
    color:red;
    cursor:pointer;
`

const ListaContainer = Styled.li `
list-style-type: none;
border:solid 1px black;
margin: auto;
margin-bottom:2px;
padding:10px;
width: 200px;
`

const baseURL = "https://us-central1-future4-users.cloudfunctions.net/api";

class ItemListaUsuarios extends React.Component{
    constructor(props){
    super(props);
        this.state={

        }
    }

    deletarUsuario = () =>{
        const url = `${baseURL}/users/deleteUser?id=${this.props.usuario.id}`;

        const axiosHeader = {
            headers: {
                "api-token":"campioto"
            }
        };

        if( window.confirm("Você deseja deletar esse usuário?")){

            axios.delete(url,axiosHeader).then(() => {
                this.props.deletaUsuario();
            })

        }else{
            window.alert("usuario não deletado")
        }
        

       

    }


    render(){
        return(
            <ListaContainer>
                {this.props.usuario.name}
                <Deletar onClick={this.deletarUsuario}> X</Deletar>
            </ListaContainer>
            
        )
        console.log(this.usuario.name)
    }
}

export default ItemListaUsuarios