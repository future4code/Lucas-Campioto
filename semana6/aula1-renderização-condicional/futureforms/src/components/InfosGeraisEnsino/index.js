import React from 'react';
import Styled from 'styled-components'


const SectionBotao = Styled.div`
    margin-top: 10px;
`;

function InfosGeraisEnsino(props){
    return(
        <div>    
        <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
            <div>
                <p>5. Por que você não terminou um curso de graduação?</p>
                <input type="text"></input>
            </div>
            <div>
                <p>6. Você fez algum curso complementar?</p>
                <select>
                    <option value="Nenhum">Nenhum</option>
                    <option value="Curso técnico">Curso Técnico</option>
                    <option value="Curso de inglês">Curso de inglês</option> 
                 </select> 
            </div>
            <SectionBotao>
                 <button onClick={props.function}>Próxima Etapa</button>
            </SectionBotao>
        </div>
    )
}

export default InfosGeraisEnsino