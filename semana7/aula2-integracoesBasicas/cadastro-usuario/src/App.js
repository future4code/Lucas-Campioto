import React from 'react';
import logo from './logo.svg';
import './App.css';
import CadastroUsuario from './components/CadastroUsuario/index'
import ListaDeUsuarios from './components/ListaDeUsuarios/index'


const usuario = [
  {
    email: "l_campioto@hotmail.com",
    nome: "Lucas Campioto"
  }
]




class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      tela: "cadastro"
    }
  }

  clickPaginaCadastro = () => {
    this.setState({tela: "cadastro" });
  }

  clickPaginaLista = () => {
    this.setState({tela: "lista" });
  }


  render(){
    let tela;
      switch (this.state.tela){ 
        case "cadastro":
          tela =(
            <CadastroUsuario onClick={this.clickPaginaLista}>

            </CadastroUsuario>
          );
          break;

          case "lista":
            tela =(
              <ListaDeUsuarios listaUsuarios={usuario} onClick={this.clickPaginaCadastro}>
                
              </ListaDeUsuarios>
             
            );
            break;      
    }
    return (
      
      <div className="App">
        {tela}
      </div>
    );
    
  }
}

export default App;
