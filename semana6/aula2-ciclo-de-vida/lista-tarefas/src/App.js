import React from 'react';
import logo from './logo.svg';
import './App.css';
import Styled from 'styled-components';
import CadastroTarefa from './components/CadastroTarefa/index'
import Tarefa from './components/Tarefa/index'


const ListaDeTarefas = Styled.ul`
  height:auto;
`

// const MainContainer = Styled.div`
//     text-align:center;
//     width:300px;
//     margin-top: 30px;
//     margin-bottom:50px;
// `

// const InputTarefa = Styled.input`
// height:15px;
// `

// const BotaoTarefa = Styled.button`
// height:20px;

// margin-top:5px;
// `

// const SelectFiltro = Styled.select`
// display:inline;
// `

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
        inputTarefa: "",
        completa:false,
        id: Date.now(),
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

 clicarNaTarefa = (props) =>{
   console.log("clicou")
 }


  render(){
    
  return (
      <div className="App">

            <CadastroTarefa
              value={this.state.inputTarefa} 
              onClick={this.addTarefa} 
              onChange={this.controleTarefa}>
            </CadastroTarefa>
           
            {/* <MainContainer>
              <h3>Lista de Tarefas</h3>
              <InputTarefa value={this.state.inputTarefa} onChange={this.controleTarefa }></InputTarefa>
              <BotaoTarefa onClick={this.addTarefa}>Cadastrar</BotaoTarefa>
              <p>Filtro</p>
              <SelectFiltro>
                <option value="Pendentes">Pendentes</option>
                <option value="Completas">Completas</option>
              </SelectFiltro>
            </MainContainer> */}
            

            <ListaDeTarefas>
              {this.state.arrayDeTarefas.map(element =>{
                return(
                  <Tarefa tarefaDigitada={element.tarefa}></Tarefa>
                )
              } 
                )}
             
            </ListaDeTarefas>
      </div>
    );
  }
}

export default App;
