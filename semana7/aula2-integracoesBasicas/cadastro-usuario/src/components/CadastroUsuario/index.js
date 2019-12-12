import React from 'react';
import Styled from 'styled-components';
import axios from 'axios';


const ContainerFormulario = Styled.div `
   
`
const Form = Styled.form`
    margin: 10px auto;
    padding: 10px;
    border: solid 1px black;
    width: 300px;
    
`

const Label = Styled.label `

`
const Input = Styled.input `

`

const Botao = Styled.button `
border:none;
border:solid 1px black;
margin-top: 10px;
padding: 5px;
width:70px;
background-color: #98FB98;
cursor:pointer;
`


const baseURL = "https://us-central1-future4-users.cloudfunctions.net/api";

class CadastroUsuario extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
        };
    }

    onChangeName = event =>{
        this.setState({name: event.target.value});
    }

    onChangeEmail = event =>{
        this.setState({email: event.target.value});
    }

    criaUsuario = () =>{
        const usuarioCriado = {
            name: this.state.name,
            email: this.state.email,
        }

        const axiosHeader = {
            headers: {
                "api-token":"campioto",
            }
        }

        axios.post(`${baseURL}/users/createUser`, usuarioCriado, axiosHeader)
        window.alert("Usuario Criado com sucesso!")
    }
 
    render(){
    return(
            <ContainerFormulario>
                <Form>
                    <div>
                        <Label>Nome: </Label>
                        <Input type="text" 
                        onChange={this.onChangeName}
                        value={this.state.name}>
                        </Input>
                    </div>
                    <div>
                        <Label>E-mail: </Label>
                        <Input type="email" 
                        onChange={this.onChangeEmail}
                        value={this.state.email}>
                        </Input>
                    </div>
                    
                    <Botao onClick={this.criaUsuario}><b>Salvar</b></Botao>
                </Form>
            </ContainerFormulario>
        );
    }
}

export default CadastroUsuario