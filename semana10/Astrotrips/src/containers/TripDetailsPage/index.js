import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { login } from '../../actions/login'

const Container = styled.div`
text-align:center;
margin: 100px auto;
`

class TripDetails extends Component {
    constructor(props) {
      super(props);
      this.state = {
        form: {} 
      };
    }
  
  
    componentDidMount(){
      if (localStorage.getItem("token") === null){
       this.props.goToLoginPage()
       window.alert("Área restrita. Faça seu login")
      }
   }
  
    render() {
      return (
        <Container >
          <h2>Detalhes das Viagens</h2>
        </Container>
      );
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return { 
        goToLoginPage: () => dispatch(push(routes.login)),           
    }    
    
  }
  
  export default connect(null, mapDispatchToProps)(TripDetails);
  