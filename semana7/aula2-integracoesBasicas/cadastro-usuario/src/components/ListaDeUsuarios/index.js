import React from 'react';
import Styled from 'styled-components';

function ListaDeUsuarios (props) {
    return(
        <div>
            <button onClick={props.onClick}>Ir para página de registro</button>
            <div>
                <h3>Usuários Cadastrados</h3>
                
            </div>
           
        </div>
         
    )
    
}

export default ListaDeUsuarios