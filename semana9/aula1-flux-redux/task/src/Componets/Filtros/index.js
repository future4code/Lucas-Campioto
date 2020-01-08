import React from 'react';
import styled from 'styled-components';



const Container = styled.div`
width:600px;
margin:auto;
`

const ContainerFiltros = styled.div`
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

function Filtros (props){
    return(
        <Container>
          <ContainerFiltros>
            <Filtro>Marcar todas completas</Filtro>
            <FiltroTodas>Todas</FiltroTodas>
            <Filtro>Pendentes</Filtro>
            <Filtro>Completas</Filtro>
            <Filtro>Remover completas</Filtro>
         </ContainerFiltros>
        </Container>
        
    )
}

export default Filtros