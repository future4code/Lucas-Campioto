import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { getTrips } from "../../actions/trips";
import tripsReducer from "../../reducers/trips"

const Container = styled.div`
text-align:center;
margin:100px 30px;
font-family: 'Roboto', sans-serif;
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-row-gap:15px;
text-align:center;
`
const CardTrip =  styled.div`
width: 300px;
height: 260px;
padding:15px;
background-color:#F4A460;
box-shadow: 8px 5px 5px #FFDEAD;
`

const H1 = styled.h1`
text-align:center;
font-family: 'Roboto', sans-serif;
`

const Span = styled.span`
font-weight:bold;
`
const ContainerInputs = styled.div`
margin-top:10px;
margin-bottom:5px;
`

const Botao = styled.button`
border:none;
cursor:pointer;
margin-right:15px;
margin-top:10px;
width:auto;
padding:10px;
background-color: black;
color: white;
font-weight:bold;
:hover{
    background-color:#98FB98;
    color:black;
    font-weight:bold;
}
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

     handleGoToPageDetails = (tripId) =>{
         
        this.props.goToDetailsPage()
     }

    render(){
        return(
            <div>
            <H1>Lista de Viagens</H1>
            <Container>
            
                    {this.props.getToTrips.map(trip=>(
                        <CardTrip>
                            <ContainerInputs>
                                
                                <Span>{trip.name}</Span> 
                            </ContainerInputs>

                            <ContainerInputs>
                                <Span>Descrição: </Span>
                                <span>{trip.description}</span>
                            </ContainerInputs>
                            
                            <ContainerInputs>
                                <Span>Planeta: </Span>
                                <span>{trip.planet}</span>
                            </ContainerInputs>

                            <ContainerInputs>
                                <Span>Data: </Span>
                                <span>{trip.date}</span> 
                            </ContainerInputs>

                            <Botao onClick={()=> this.handleGoToPageDetails(trip.id)}>Detalhes</Botao>
                            
                        </CardTrip>
                          
                    ))}
               
                
            </Container>
            </div>
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
        goToDetailsPage: () => dispatch(push(routes.tripDetails))	
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ListTripsPage);