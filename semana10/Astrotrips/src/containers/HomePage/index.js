import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { login } from '../../actions/login'

const Container = styled.div`
text-align:center;
margin:100px auto;
font-family: 'Roboto', sans-serif;
`
const Botao = styled.button`
border:none;
cursor:pointer;
margin-right:15px;
width:auto;
padding:10px;
background-color: black;
color: white;
font-weight:bold;
:hover{
    background-color:#98FB98;
    color:black;
    font-weight:bold;
}
`
const H1 = styled.h1`
font-size:45px;
`

const P = styled.p`
font-weight:bold;
color:	#FF4500;
margin-bottom:30px;
`



class HomePage extends React.Component{
    constructor(props){
        super(props)

        this.state ={

        }
    }


    render(){
        return(
            <Container>
                <H1>Seja Bem-Vindo!</H1>
                <P>Escolha o que deseja fazer</P>
                <Botao onClick={this.props.goToLoginPage}>Login</Botao>
                <Botao onClick={this.props.goToAppForm}>Cadastro</Botao>
                <Botao onClick={this.props.goToCreateTrip}>Criar Nova Viagem</Botao>
                <Botao onClick={this.props.goToTripDetails}>Detalhes das Viagens</Botao>
                <Botao onClick={this.props.goToTriList}>Lista de Viagens</Botao>
            </Container>
        );
    }
};

function mapDispatchToProps(dispatch) {
    return {
        goToAppForm: () => dispatch(push(routes.applicationForm)),
        goToLoginPage: () => dispatch(push(routes.login)),           
        goToCreateTrip: () => dispatch(push(routes.createNewTrips)),
        goToTripDetails: () => dispatch(push(routes.tripDetails)),
        goToTriList: () => dispatch(push(routes.tripList)),
    }    
    
}

export default connect(null, mapDispatchToProps)(HomePage);