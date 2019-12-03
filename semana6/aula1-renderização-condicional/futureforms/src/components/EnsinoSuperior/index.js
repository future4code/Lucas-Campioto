import React from 'react';
import Styled from 'styled-components';


const SectionBotao = Styled.div`
    margin-top: 10px;
`;

function EnsinoSuperior(props){
    return(
        <div>
            <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
            <div>
                <p>5. Qual curso ?</p>
                <input type="text"></input>
            </div>
            <div>
                <p>6. Qual unidade de ensino?</p>
                <input type="text"></input>
            </div>
            <SectionBotao>
                <button onClick={props.function}>Próxima Etapa</button>
            </SectionBotao>
        </div>
    )
}

export default EnsinoSuperior