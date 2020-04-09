import React from 'react';
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import { connect } from "react-redux";
import styled from 'styled-components';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LogoFuture from '../../../img/future.png';
import Passaro from '../../../img/passaro.png';

const ContainerLogin = styled.div`
    display:flex;
    justify-content:center;
    flex-direction: column;
    align-items:center;
    margin: auto;
    background-color: #ccd9ff;
    min-height: 100vh;
`

const TextLoginPage = styled.h1`
    color:black;
`

const ContainerTextField = styled.div`
   margin-bottom:15px;
`

const TextFiled = styled(TextField)`
    background-color:transparent;
    text-align:center;
    width:300px;
    border-radius:5px;
`

const LoginButton = styled(Button)`
    background-color: black;
    color: white;
    width: 125px;
    margin-top:20px;
`

const SignUpButon = styled.span`
    font-weight:bold;
    cursor:pointer;
    margin-top:8px;
`

const ImageLogo = styled.img`
    width:350px;
    height:350px;
    margin-left:30px;
    margin-top:-150px;
`


const ContainerLogo = styled.div`
    display:flex;
    justify-content:center;
    flex-direction: column;
    align-items:center;
    margin-top: -20px;
    margin-bottom:-50px;
    
`
const ContainerIllustration = styled.div`
    margin-bottom:-50px;
    margin-right:0px;
    background-color: #92e2fd;
`
const ImageIllustration = styled.img`
    position: absolute;
    width:400px;
    height:350px;
    
`



export class LoginPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:"",
            password:""
        }
    }

    handleChange = event =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubimit = event =>{

    }

    render(){
        const { goToSignUpPage } = this.props
        return(
        
                <ContainerLogin>
                    <ContainerLogo>
                        <ImageLogo src={LogoFuture} />
                    </ContainerLogo>

                    <ContainerIllustration>
                        <ImageIllustration src={Passaro} />
                    </ContainerIllustration>
                    
                    <TextLoginPage>
                        Login
                    </TextLoginPage>
                        <ContainerTextField>
                            <TextField 
                                onChange={this.handleChange}
                                color="primary-light"
                                name="email"
                                type="email"
                                label="E-mail"
                                required
                                variant="outlined" />
                        </ContainerTextField>
                        
                        <ContainerTextField>
                            <TextField 
                                onChange={this.handleChange}
                                name="password"
                                type="password"
                                label="Password"
                                required
                                variant="outlined" />
                        </ContainerTextField>
                   
                        
                        <div class="container">
                            <a class="btn btn-2">Logar</a>
                        </div>
                        <span >Não possui Cadastro?</span>
                        <SignUpButon onClick={goToSignUpPage}>Clique aqui</SignUpButon>  
                    
                    
                </ContainerLogin>
            
        )
    }
}


const mapDispatchToProps = dispatch => ({
    goToSignUpPage: () => dispatch(push(routes.signUpPage)),
})

export default connect(
    null,
    mapDispatchToProps
)(LoginPage);

