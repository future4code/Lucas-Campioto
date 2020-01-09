import React from 'react';
import styled from 'styled-components';
import Tarefa from '../Tarefa/index';

const ListaTarefas = styled.div`
background-color:white;
height:60px;
width:100%;
border-bottom:solid 2px #C0C0C0;
display:flex;
`

class ListaTarefa extends React.Component{

    render(){
        return(
            <ListaTarefa>
                <Tarefa></Tarefa>
            </ListaTarefa>
        )
    }
}

export default ListaTarefa