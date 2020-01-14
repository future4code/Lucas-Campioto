import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { push } from "connected-react-router";
import { routes } from "../Router";

const Container = styled.div`
text-align:center;
margin:50px auto;
`
const HomePage = props =>{
    return(
        <Container>
            <div>Home Page</div>
            <button onClick={props.goToLoginPage}>Login</button>
            <button onClick={props.goToAppForm}>Cadastro</button>
        </Container>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        goToAppForm: () => dispatch(push(routes.applicationForm)),
        goToLoginPage: () => dispatch(push(routes.login)),           

    }    
    
}

export default connect(null, mapDispatchToProps)(HomePage);