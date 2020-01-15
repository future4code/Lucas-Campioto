import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { getTrips } from "../../actions/trips";
import tripsReducer from "../../reducers/trips"

const Container = styled.div`
text-align:center;
margin:100px auto;
font-family: 'Roboto', sans-serif;
`


class ListTripsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        if (localStorage.getItem("token") === null){
         this.props.goToLoginPage()
         window.alert("Área restrita. Faça seu login")
        }
        this.props.getTrips();
     }

    render(){
        return(
            <Container>
                <h1>Lista de Viagens</h1>
                    {this.props.getToTrips.map(trip=>(
                        <p>{trip.name}</p>    
                    ))}
               
                
            </Container>
            
        );
    }
};



const mapStateToProps = (state) => ({
    getToTrips: state.trips.allTrips,
    
})

const mapDispatchToProps = (dispatch) => {
	return {
        getTrips: () => dispatch(getTrips()),
        goToLoginPage: () => dispatch(push(routes.login)),	
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ListTripsPage);