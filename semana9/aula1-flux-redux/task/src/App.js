import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormTarefa from './Componets/FormTarefa/index'
import ListaTarefa from './Componets/ListaTarefa/index'
import Tarefa from './Componets/Tarefa/index'
import Filtros from './Componets/Filtros/index'
import styled from 'styled-components';
import { Provider } from 'react-redux'
import store from './store'

const Container = styled.div`
width:600px;
margin:auto;
`

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Container>
          <FormTarefa />
          <ListaTarefa>
            <Tarefa></Tarefa>
          </ListaTarefa>
          <Filtros></Filtros>
        </Container>
      </Provider>
    </div>
  );
}

export default App;
