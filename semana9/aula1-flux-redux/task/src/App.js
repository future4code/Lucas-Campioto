import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

// Exercicios 1 - action creator

// function deletarTarefa(){
//   return{
//     type:'DELETAR_TAREFA',
//     payload: {

//     }
//   }
// }


// function tarefaCompleta(){
//   return{
//     type:'TAREFA_COMPLETA',
//     payload: {

//     }
//   }
// }

// function criarTarefa(){
//   return{
//     type:'CRIAR_TAREFA',
//     payload: {

//      }
//   }
// }

// function tarefaPendente(){
//   return{
//     type:'TAREFA_PENDENTE',
//     payload:{

//     }
//   }
// }

// function tarefaCompleta(){
//   return{
//     type:'TAREFA_COMPLETA',
//     payload:{

//     }
//   }
// }

// function todasTarefa(){
//   return{
//     type:'TAREFA_COMPLETA',
//     payload:{

//     }
//   }
// }

// function marcarTodasTarefa(){
//   return{
//     type:'MARCAR_TODAS_TAREFA',
//     payload:{

//     }
//   }
// }


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
const Img = styled.img`
width:25px;
height:25px;
border:solid 1px #DCDCDC;
border-radius:50%;
margin-top:15px;
margin-left:5px;
cursor:pointer;
`

const Tarefa = styled.span`
font-size:30px;
margin-left:20px;
margin-top:5px;
color:#4F4F4F;
`
const Deletar = styled.span`
font-size:20px;
color:rgba(139,0,0,0.5);
margin: 13px 400px;
cursor:pointer;
:hover{
  color:rgba(139,0,0,1);
}
`

const Filtros = styled.div`
background-color:white;

margin:auto;
height:30px;
width:100%;
border-bottom:solid 2px #C0C0C0;
display:flex;
justify-content:space-around;

`

const Filtro = styled.span`
font-size:13px;
cursor:pointer;
margin:auto;
:hover{
  text-decoration:underline;
  font-size:13px;
}
`

const FiltroTodas = styled.span`
font-size:13px;
cursor:pointer;
margin:auto;
border:solid 1px rgba(139,0,0,0.3);
border-radius:10%;
padding:2px;
width:40px;
`



function App() {
  return (
    <div className="App">
      <Container>
        <H1>4Task</H1>
        <Input placeholder="O que tem que ser feito ?"></Input>
        <Tarefas>
          <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTob7sWv8Zfk9e7nJOLZdmz7v90MqnGcV_XnhzTWT_gs664pva"/>
          <Tarefa>Tarefa1</Tarefa>
          <Deletar>x</Deletar>
        </Tarefas>
        <Tarefas>
          <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTob7sWv8Zfk9e7nJOLZdmz7v90MqnGcV_XnhzTWT_gs664pva"/>
          <Tarefa>Tarefa2</Tarefa>
          <Deletar>x</Deletar>
        </Tarefas>
        <Filtros>
          <Filtro>Marcar todas completas</Filtro>
          <FiltroTodas>Todas</FiltroTodas>
          <Filtro>Pendentes</Filtro>
          <Filtro>Completas</Filtro>
          <Filtro>Remover completas</Filtro>
        </Filtros>
      </Container>
    </div>
  );
}

export default App;
