import React from 'react';
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import { connect } from "react-redux";
import styled from 'styled-components';
import TextField from "@material-ui/core/TextField";
import Ilustracao from '../../../img/ilustracao.png';
import '../../containers/LoginPage/index.css'
import LogoFuture from '../../../img/future.png';

const CadastroForm = [
    {
        name: 'name',
        type: 'text',
        label: 'Nome ',
        placeholder: 'Nome e Sobrenome',
        required: true,
        pattern: "[A-Za-z]",
        variant: "outlined",
     },
     {
        name: 'email',
        type: 'email',
        label: 'E-mail: ',
        placeholder: 'email@email.com',
        required: true,
        pattern: "[A-Za-^([a-zA-Z0-9_-.]+)@([a-zA-Z0-9_-.]+).([a-zA-Z]{2,5})$]{3,}",
        variant: "outlined",
    },
     {
        name: 'password',
        type: 'password',
        label: 'Senha',
        placeholder: 'Mínimo 6 caracteres',
        required: true,
        variant: "outlined",
    },
    {
        name: 'confirmPassword',
        type: 'password',
        label: 'Confirmar',
        placeholder: 'Confirme a senha anterior',
        required: true,
        variant: "outlined",
    },
]

export const ContainerSignUp = styled.div`
    font-family: 'Roboto', sans-serif;
    background-color: #e8c2ff;
    min-height: 100vh;
`

export const SignupWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
  background-color: #e8c2ff;
  
`;

export const TextFiled = styled(TextField)`
    background-color:transparent;
    text-align:center;
    width:300px;
    border-radius:5px;
`

const ImageLogo = styled.img`
    position: absolute;
    width:250px;
    height:250px;
    left:565px;
    top:-50px;
  
    
`

const ContainerIllustration = styled.div`
    margin-top:0px;
    background-color: #92e2fd;
`
const ImageIllustration = styled.img`
    position: absolute;
    width:400px;
    height:350px;
    margin-top:200px;
    margin-left:700px;
`

export class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            form:{}
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, email,password } = this.state
        this.props.signup(name, email, password)
    }

    render(){
        return(
            <ContainerSignUp>
                    <ImageLogo src={LogoFuture} />
                 <ContainerIllustration>
                    <ImageIllustration src={Ilustracao} />
                </ContainerIllustration>

                <SignupWrapper>
                <h3>Cadastre-se</h3>
                    {CadastroForm.map(input => (
                        <TextField
                            onChange={this.handleChange}
                            name={input.name}
                            type={input.type}
                            label={input.label}
                            required={input.required}
                            placeholder={input.placeholder}
                            pattern={input.pattern}
                            variant={input.variant}
                        />
                    ))}
                    <div class="container">
                            <a onClick={this.goToLoginPage} class="btn btn-2" type="submit">Cadastrar</a>
                        </div>
                </SignupWrapper>
            </ContainerSignUp>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    goToLoginPage: () => dispatch(push(routes.loginPage)),
})

export default connect(
    null,
    mapDispatchToProps
)(SignUp);