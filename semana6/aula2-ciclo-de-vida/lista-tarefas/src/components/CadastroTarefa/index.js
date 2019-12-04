import React from 'react';
import Styled from 'styled-components';


const Filtro = Styled.div`
    display:inline;
`

function CadastroTarefa(props){
    return(
        <div>
            <h3>Lista de Tarefas</h3>
            <div>
                <input value ={props.value} onChange={props.onChange} type="text"></input>
                <button onClick = {props.onClick}>Adicionar</button>
            </div>
            <div>
                <Filtro>Filtro</Filtro>
                <select>
                    <option value="Pendentes">Pendentes</option>
                    <option value="Completas">Completas</option>
                </select> 
            </div>
        </div>
    )
}

export default CadastroTarefa