import React from 'react';
import logo from './logo.svg';
import './App.css';
import CriarPlayList from './components/CriarPlayList/index'
import ListaPlayList from './components/ListaPlayList/index'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tela: "criarPlaylist"
    }
  }

  trocarPaginas = () =>{
    if(this.state.tela === "criarPlaylist"){
      this.setState({tela: "listaPlaylist"})
    }else{
      this.setState({tela:"criarPlaylist"})
    }
  }



  render(){
    return (
      <div className="App">

        <button onClick={this.trocarPaginas}>Trocar de pagina</button>

        {this.state.tela === "criarPlaylist" ? <CriarPlayList /> : <ListaPlayList />}
       
        
      </div>
    );
  }
}

export default App;
