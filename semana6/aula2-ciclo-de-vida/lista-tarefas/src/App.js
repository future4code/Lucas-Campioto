import React from 'react';
import logo from './logo.svg';
import './App.css';
import Styled from 'styled-components';
import CadastroTarefa from './components/CadastroTarefa/index'
import Tarefa from './components/Tarefa/index'


const ListaDeTarefas = Styled.ul`
  height:auto;
`
class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
        inputTarefa: "",
        completa:false,
        tarefaId: Date.now(),
        arrayDeTarefas: [],
    }
  }

  controleTarefa = e =>{
    this.setState({
      inputTarefa: e.target.value
    });
  };

  addTarefa = () =>{
    const novaTarefa = {tarefa: this.state.inputTarefa, TarefaCompleta: this.state.completa, Id: this.state.id};
    const arrayDeTarefasCopy = [...this.state.arrayDeTarefas, novaTarefa];
    console.log(arrayDeTarefasCopy);
    this.setState({
      arrayDeTarefas: arrayDeTarefasCopy,
      inputTarefa: "",
      
    });
   
  }

 onClickTarefa = (tarefaClicada) => {
   tarefaClicada = this.curtidoPorMim ? console.log("true"): console.log("false")
  
 }


  render(){
    
  return (
      <div className="App">

            <CadastroTarefa
              value={this.state.inputTarefa} 
              onClick={this.addTarefa} 
              onChange={this.controleTarefa}>
            </CadastroTarefa>
           
            
            

            <ListaDeTarefas>
              {this.state.arrayDeTarefas.map(element =>{
                return(
                  <Tarefa onClickTarefa = {this.onClickTarefa} tarefaDigitada={element.tarefa}></Tarefa>
                )
              } 
                )}
             
            </ListaDeTarefas>
      </div>
    );
  }
}

export default App;
