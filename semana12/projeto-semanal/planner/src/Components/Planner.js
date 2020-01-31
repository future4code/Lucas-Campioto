import React from "react";
import styled from "styled-components";
import Task from './task'

const Container = styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr;
margin-top:50px;
`

function PlannerTasks(props){
    return(
        <Container>
            <div>
                <Task day='Segunda' tasks={props.tasks}></Task>
            </div>

            <div>
                <Task day='Terça' tasks={props.tasks}></Task> 
            </div>

            <div>
                <Task day='Quarta' tasks={props.tasks}></Task>
            </div>

            <div>
                <Task day='Quinta' tasks={props.tasks}></Task>
            </div>

            <div>
                <Task day='Sexta' tasks={props.tasks}></Task>
            </div>

            <div>
                <Task day='Sabádo' tasks={props.tasks}></Task>   
            </div>

            <div>
                <Task day='Domingo' tasks={props.tasks}></Task>
            </div>
        </Container>
    )
}

export default  PlannerTasks