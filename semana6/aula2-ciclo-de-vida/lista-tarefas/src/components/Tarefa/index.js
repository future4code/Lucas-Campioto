import React from 'react';
import Styled from 'styled-components';



const TarefaLista = Styled.li`

`
const TarefaListaRiscada = Styled.li`
text-decoration: underline;
`

function Tarefa(props){
   
    return(
        
        <div>
            <TarefaLista onClick={props.onClickTarefa}>{props.tarefaDigitada}</TarefaLista>
        </div>
    )
}

export default Tarefa