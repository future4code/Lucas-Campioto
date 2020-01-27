import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { createTrip } from "../../actions/trips"

const createTripForm = [
  {
    name: "name",
    type: "text",
    label: "Nome",
    required: true,

  },
  {
    name: "date",
    type: "date", 
    label: "Data",
    required: true
  },
  {
    name: "description",
    type: "text",
    label: "Descrição",
    required: true,
    pattern:"[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{30,}",
  },
  {
    name: "durationInDays",
    type: "number",
    label: "Duração da Viagem",
    required: true,
    pattern: "[0-9]+$",
    min:"50"
  }
];

const Container = styled.div`
text-align:center;
margin: 100px auto;
font-family: 'Roboto', sans-serif;
`

const Input =  styled.input`
margin-bottom:10px;
`

const Botao = styled.button`
border:none;
cursor:pointer;
margin-top:20px;
width:auto;
padding:10px;
background-color: black;
color: white;
`

class CreateTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
      value: "",
      
    };
  }

  onHandleChangePlanet = (event) => {  
    this.setState({ value: event.target.value })
  }

  handleInputChange = event => {
    const { name, value } = event.target; 
    this.setState({ form: { ...this.state.form, [name]: value } });
  };

  handleOnSubmit = event => {
    
    event.preventDefault();
   
  };

  componentDidMount(){
    if (localStorage.getItem("token") === null){
     this.props.goToLoginPage()
     window.alert("Área restrita. Faça seu login")
    }
 }
 handleCreateTrip = () => {
      const { name, date, description, durationInDays } = this.state.form
      const planet = this.state.value
      
      this.props.createTrip(name, date, description, durationInDays, planet)
      console.log("testando form", this.props.createTrip)
      
}
  
  render() {
    
    return (
      <Container >
        <h2>Criar nova Viagem</h2>
      <form onSubmit={this.handleOnSubmit}>
       
        {createTripForm.map(input => (
          <div key={input.name}>
            <label htmlFor={input.name}>{input.label}: </label>
            <Input
              id={input.name}
              name={input.name}
              type={input.type}
              value={this.state.form[input.name] || ""}
              required={input.required}
              onChange={this.handleInputChange}
              pattern={input.pattern}
            />
          </div>
        ))}
        <label>Escolha o planeta: </label>
        <select onChange={this.onHandleChangePlanet} name="planet" id="paises" value={this.state.value} >
	        <option value="Mercurio" selected="selected">Mercurio</option> 
            <option value="Venus" selected="selected">Vênus</option> 
            <option value="Terra" selected="selected">Terra</option> 
            <option value="Marte" selected="selected">Marte</option> 
            <option value="Jupiter" selected="selected">Júpiter</option> 
            <option value="Saturno" selected="selected">Saturno</option> 
            <option value="Urano" selected="selected">Urano</option> 
            <option value="Netuno" selected="selected">Netuno</option>    
        </select>
        <div>
            <Botao onClick={this.handleCreateTrip} type="submit">Enviar</Botao>
        </div>
      </form>
      </Container>
    );
    
  }
  
}

function mapDispatchToProps(dispatch) {
  
  return { 
      goToLoginPage: () => dispatch(push(routes.login)),  
      createTrip: (name,date,description,durationInDays,planet) => dispatch(createTrip(name,date,description,durationInDays,planet)),
      
    }    
   
}

export default connect(null, mapDispatchToProps)(CreateTrip);

