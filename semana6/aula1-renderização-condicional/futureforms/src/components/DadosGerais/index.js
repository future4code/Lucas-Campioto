import React from 'react';
import Styled from 'styled-components';


const SectionBotao = Styled.div`
    margin-top: 10px;
`;

function DadosGerais(props){
    return(
    <div>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <div>
            <p>1. Qual seu nome ?</p>
            <input type="text"></input>
        </div>
        <div>
            <p>2. Qual sua idade ?</p>
            <input type="text"></input>
        </div>
        <div>
            <p>3. Qual seu email ?</p>
            <input type="text"></input>
        </div>
        <div>
            <p>4. Qual sua escolaridade ?</p>
            <select>
                <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                <option value="Ensino médio completo">Ensino médio completo</option>
                <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                <option value="Ensino superior completo">Ensino superior completo</option>
            </select> 
        </div>
        <SectionBotao>
            <button onClick={props.function}>Próxima Etapa</button>
        </SectionBotao>
        
    </div>
    )
}

export default DadosGerais