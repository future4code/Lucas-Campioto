import React from 'react';
import styled from 'styled-components';



const Img = styled.img`
width:25px;
height:25px;
border:solid 1px #DCDCDC;
border-radius:50%;
margin-top:15px;
margin-left:10px;
cursor:pointer;
`

const NomeTarefa = styled.span`
font-size:30px;
margin-top:5px;
color:#4F4F4F;
margin-left:20px;
`
const Deletar = styled.span`
font-size:20px;
color:rgba(139,0,0,0.5);
margin-left: 400px;
cursor:pointer;
:hover{
  color:rgba(139,0,0,1);
}
`

function Tarefa (props){
    return(
    <div>
        <Img></Img>
        <NomeTarefa>Task 1 </NomeTarefa>
        <Deletar>x</Deletar>
    </div>
    )  
}

export default Tarefa