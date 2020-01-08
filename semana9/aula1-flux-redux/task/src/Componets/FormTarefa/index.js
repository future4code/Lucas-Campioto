import React from 'react';
import styled from 'styled-components';
import Tarefa from '../Tarefa/index';
import { connect } from "react-redux";
import { adicionarTarefa } from '../../actions/tarefa'

const Container = styled.div`
width:600px;
margin:auto;
`

const H1 = styled.h1`
color:#b83f45;
font-size:70px;
text-shadow: 2px 6px 2px rgba(0,0,0,0.2);
`

const Input = styled.input`
border:none;
height:60px;
width:100%;
border-bottom:solid 2px #C0C0C0;
::-webkit-input-placeholder  { 
  padding-left:40px;
  font-size:20px;
  font-style:italic;
}
`

const Tarefas = styled.div`
background-color:white;
height:60px;
width:100%;
border-bottom:solid 2px #C0C0C0;
display:flex;
`

class Header extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            textoInput: "",
            
        }
    }

    onChangeTarefa =(e)=>{
        this.setState({ textoInput: e.target.value})
    }

    onCreateTarefa = () =>{
        const newTarefa = {
            text: this.state.textoInput
        }
        this.props.novaTarefa(newTarefa)
    }

    render(){
        
    return(
        <Container>
            <H1>4Task</H1>
            <Input 
            value={this.state.textoInput} 
            onChange={this.onChangeTarefa} 
            placeholder="O que tem que ser feito ?"
            >
            </Input>
            <button>Enviar</button>
        </Container> 
         
    )
    }
}

const mapDispatchToProps = (dispatch) => ({
    novaTarefa: (tarefa) => dispatch(adicionarTarefa(tarefa)),
});
   



export default connect(null, mapDispatchToProps)(Header)