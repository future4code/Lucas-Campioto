import React from 'react';
import Styled from 'styled-components';


const Filtro = Styled.div`
    display:inline;
`
const TarefaLista = Styled.li`

`

function Tarefa(props){
    return(
        <div>
            <TarefaLista onClick={props.clicarNaTarefa}>{props.tarefaDigitada}</TarefaLista>
        </div>
    )
}

export default Tarefa