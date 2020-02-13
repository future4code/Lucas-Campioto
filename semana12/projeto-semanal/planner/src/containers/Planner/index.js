import React from "react";
import { connect } from "react-redux";
import { getAllTasks, createTask } from '../../actions/planners'
import styled from "styled-components";
import  PlannerTasks from '../../Components/Planner.js'


const CreateTaskForm = [
  {
      name: "text",
      type: "text",
      label: "Tarefa",
      required: true, 
  }
]

const Container = styled.div`
text-align:center;
`

const ContainerTask = styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr;
margin-top:50px;
`

const ContainerSelect = styled.div`
margin-top:5px;
margin-bottom: 20px;
`

export class Planner extends React.Component {
  constructor (props) {
    super( props );
    this.state = {
      form: {},
    }
  }

  componentDidMount(){
    this.props.getAllTasks()
  }

  handleInputOnChange = event => {
    const { name, value } = event.target;
    this.setState ({ form: { ...this.state.form, [name]: value }});
  }

  handleOnSubmit = event => {
    event.preventDefault();

    const { text, day } = this.state.form;
    this.props.createTask(text, day)

    this.setState({form: {}})
  };


  render() {
    return (
      <div>
        
        <Container>  
        <h3>Tarefas</h3>
        <form onSubmit={this.handleCreateTask}>
            {CreateTaskForm.map (input => (
                      <div key = {input.name}>
                          <input
                              id = {input.id}
                              name = {input.name}
                              type = {input.type}
                              label = {input.label}
                              value = {this.state.form[input.name] || ""}
                              required = {input.required}
                              onChange = {this.handleInputOnChange}
                              pattern = {input.pattern}
                          />
                      </div>
                  ))}

                  <ContainerSelect>
                    <select name="day" onChange={this.handleInputOnChange} value={this.state.form.day} required>
                      <option value="" disabled selected>Dia da Semana</option>
                      <option value="segunda">Segunda-feira</option>
                      <option value="terca">Terça-feira</option>
                      <option value="quarta">Quarta-feira</option>
                      <option value="quinta">Quinta-feira</option>
                      <option value="sexta">Sexta-feira</option>
                      <option value="sabado">Sábado</option>
                      <option value="domingo">Domingo</option>
                    </select>
                  </ContainerSelect>
                  
                
                <button type="submit" onClick={this.handleOnSubmit}>Criar Tarefa</button>
            </form>              
                <PlannerTasks tasks={this.props.tasks}/> 
        </Container>
        
      </div>
    );
  }
}


const mapStateToProps = state =>({
  tasks: state.plannersReducer.allTasks
})  

const mapDispatchToProps = (dispatch) => ({
    getAllTasks: () => dispatch(getAllTasks()),
    createTask: (text, day) => dispatch(createTask(text, day)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Planner);
