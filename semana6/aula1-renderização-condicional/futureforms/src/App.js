import React from 'react';
import logo from './logo.svg';
import Styled from 'styled-components';
import './App.css';
import DadosGerais from './components/DadosGerais/index'
import EnsinoSuperior from './components/EnsinoSuperior/index'
import InfosGeraisEnsino from './components/InfosGeraisEnsino/index'




class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      tela: "inicial"
    }
  }

  clickPaginaInicial = () => {
    this.setState({tela: "inicial" });
  }

  clickPaginaInfosEnsino = () =>{
    this.setState({tela: "infosSuperior"});
  }

  clickPaginaInfosGerais = () =>{
    this.setState({tela: "infosGerais"});
  }

  clickFinal = () =>{
    this.setState({tela: "final"})
  }


  render (){
    let tela;
      switch (this.state.tela){
        case "inicial":
          tela =(
          <DadosGerais function={this.clickPaginaInfosEnsino}> 
            
          </DadosGerais> 
          
          );
          break;

        case "infosSuperior":
          tela = (
            <EnsinoSuperior function={this.clickPaginaInfosGerais}> 
              
            </EnsinoSuperior>
            
          );
                
            break;

        case "infosGerais":
          tela = (
            <InfosGeraisEnsino function={this.clickFinal}> 
              
            </InfosGeraisEnsino>
          );
            break;

        default:
          tela = (
          <div>
            <h3>O FORMULÁRIO ACABOU</h3>
            <p>Muito obrigado por participar! Entraremos em contato!</p>
          </div>
          )
      }
      
      return(
        <div className="App">
          {tela}
      </div>
      )
      
 
    
  }
}

export default App;
