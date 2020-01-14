import React, { Component } from "react";

const loginForm = [
  {
    name: "username",
    type: "text",
    label: "Nome",
    required: true,
    pattern: "{A-Za-z}{5,}",
  },
  {
    name: "date",
    type: "date",
    label: "Data",
    // required: true
  },
  {
    name: "description",
    type: "text",
    label: "Descrição",
    // required: true
  },
  {
    name: "durationDays",
    type: "number",
    label: "Duração da Viagem",
    // required: true
  }
];

class CreateTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {} 
    };
  }

  handleInputChange = event => {
   
    const { name, value } = event.target; 
    this.setState({ form: { ...this.state.form, [name]: value } });
  };

  handleOnSubmit = event => {
    
    event.preventDefault();
    console.log(this.state.form);
   
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
       
        {loginForm.map(input => (
          <div key={input.name}>
            <label htmlFor={input.name}>{input.label}: </label>
            <input
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
        <select name="paises" id="paises">
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
            <button type="submit">Enviar</button>
        </div>
      </form>
    );
  }
}

export default CreateTrip;