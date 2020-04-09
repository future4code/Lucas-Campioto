import React from 'react';
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import { connect } from "react-redux";
import Header from "../../components/Header";
import CardVideo from "../../components/CardVideo"


export class FeedPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            <div>
                <Header></Header>
                <CardVideo></CardVideo>
            </div>
        )
    }
}