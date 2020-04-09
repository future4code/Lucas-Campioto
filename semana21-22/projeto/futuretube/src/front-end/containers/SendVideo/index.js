import React from 'react';
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import { connect } from "react-redux";
import styled from 'styled-components';
import TextField from "@material-ui/core/TextField";
import '../../style/index.css'
import Header from "../../components/Header";

const CadastroForm = [
    {
        name: 'url',
        type: 'text',
        label: 'URL ',
        placeholder: 'URL do video',
        required: true,
        variant: "outlined",
     },
     {
        name: 'title',
        type: 'text',
        label: 'Titulo',
        placeholder: 'Titulo do video',
        required: true,
        variant: "outlined",
    },
    {
        name: 'description',
        type: 'text',
        label: 'Descrição',
        placeholder: 'Descrição do video',
        required: true,
        variant: "outlined",
     },
     
]

const ContainerSendVideo = styled.div`
    font-family: 'Roboto', sans-serif;
`
const Title = styled.h1`
    font-size:30px;
    color:black;

`
 const SignupWrapper = styled.form`
  width: 100%;
  margin-top:100px;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
  margin-bottom:20px;
`;

 const TextFiled = styled(TextField)`
    background-color:transparent;
    text-align:center;
    width:300px;
    border-radius:5px;
    
`


export class SendVideo extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            <ContainerSendVideo>
                <Header/>

                <SignupWrapper>
                    <Title>Envie seu video</Title>
                    {CadastroForm.map(input => (
                        <TextFiled
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
                </SignupWrapper>

                <div class="container">
                    <a onClick={this.goToLoginPage} class="btn btn-2" type="submit">Enviar video</a>
                </div>
            </ContainerSendVideo>


        )
    }
}