import React from "react";
import styled from "styled-components";


const FormularioContainer = styled.div `
	display: flex;
	flex-direction: column;
	width:500px;
	margin-top: 10px;
	margin-left: 350px;
	
`


class Formulario extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			Nome: "",
			FotoPerfil: "",
			FotoPrincipal:""
		}
	}

	aoMudarNome = e =>{
		this.setState({
			nome: e.target.value
		});
	};

	aoMudarFotoPerfil = e =>{
		this.setState({
			FotoPerfil: e.target.value
		});
	}

	aoMudarFotoPrincipal = e =>{
		this.setState({
			FotoPrincipal: e.target.value
		})
	}


	render(){
		return(
			<FormularioContainer>
				<input type="text" placeholder="Digite seu nome" value={this.state.Nome} />
				<input type="text" placeholder="Digite a URL da foto do seu Perfil" value={this.state.FotoPerfil}  />
				<input type="text" placeholder="Digite a URL da foto do seu Post" value={this.state.FotoPrincipal} />
				<button>Criar Post</button>
			</FormularioContainer>
		);
	}
}

export default Formulario;