import React from 'react';
import styled from 'styled-components';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const ContainerLogin = styled.div`
    display:flex;
    justify-content:center;
    flex-direction: column;
    align-items:center;
    margin-top:150px;
`

const TextLoginPage = styled.h1`
    color:black;

`

const ContainerTextField = styled.div`
   margin-bottom:15px;
`

const TextFiled = styled(TextField)`
    background-color:#fff;
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
        return(
            <div>
                <ContainerLogin>
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
                            variant="standard" />
                    </ContainerTextField>
                    
                    <ContainerTextField>
                        <TextField 
                            onChange={this.handleChange}
                            name="password"
                            type="password"
                            label="Password"
                            required
                            variant="standard" />
                    </ContainerTextField>
                   
                        
                    <LoginButton>Logar</LoginButton>
                    <span >Não possui Cadastro? <SignUpButon>Clique aqui </SignUpButon></span> 
                    
                </ContainerLogin>
            </div>
        )
    }
}

