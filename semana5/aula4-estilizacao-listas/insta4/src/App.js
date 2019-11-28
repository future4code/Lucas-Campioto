import React from 'react';
import logo from './logo.svg';
import './App.css';
import Formulario from './components/Formulario.js'
import Post from './components/Post/Post.js'


class App extends React.Component {
  contructor(props) {
    this.state = {
      listaDePost: [],
      nome: "",
      FotoPerfil: "",
      FotoPrincipal: ""

    }
  }



  aoMudarNome = e =>{
    this.setState({
      nome: e.target.value
    });
  };

  aoMudarFotoPerfil = e =>{
    this.setState({
      FotoPerfil: e.target.value
    });
  }

  aoMudarFotoPrincipal = e =>{
    this.setState({
      FotoPrincipal: e.target.value
    })
  }


  render(){
    return(
      <div className="App">
        <Formulario>
         
       
        
        </Formulario>
         <Post />
       </div>

      );
  }


   
  
}

export default App;
