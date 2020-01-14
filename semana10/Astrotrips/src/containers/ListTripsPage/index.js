import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { getTrips } from "../../actions/trips"

const Container = styled.div`
text-align:center;
margin:50px auto;
`


class ListTripsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    

    render(){
      
        console.log("testando", this.props.getToTrips)
        return(
            <Container>
                <li></li>
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
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ListTripsPage);