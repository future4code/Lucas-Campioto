import React from 'react';
import Styled from 'styled-components';


const Formulario = Styled.div `
    margin-top: 30px;
    margin-left: auto;
    margin-right:auto;
    border: solid 1px black;
    padding: 20px;
    width:300px;
`

function CadastroUsuario (props){
    return(
        <div>
            <button onClick={props.onClick}>Ir para página de lista</button>
            <Formulario>
                <div>
                    <label>E-mail: </label>
                    <input type="email"></input>
                </div>
                <div>
                    <label>Nome: </label>
                    <input type="text"></input>
                </div>
                
                <button>Salvar</button>
            </Formulario>
        </div>
        
    )
}

export default CadastroUsuario