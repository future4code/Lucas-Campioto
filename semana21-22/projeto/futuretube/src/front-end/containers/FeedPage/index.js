import React from 'react';
import * as firebase from "firebase/app";
import "firebase/firestore"
import axios from 'axios'
import { push } from "connected-react-router";
import { routes } from "../Router/index";
import { connect } from "react-redux";
import { getVideos } from '../../actions/videos'
import styled from 'styled-components';
import Header from "../../components/Header";
import CardVideo from "../../components/CardVideo"

const ContainerCardVideo = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap:15px;
    justify-items: center;
    margin-top: 20px;
    margin-bottom:20px;
    
`

export class FeedPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            videos:[],
        }
    }

    componentDidMount(){
       this.props.getVideos()
    }

    getVideos = async() =>{
            firebase.firestore().collection('sendVideo').onSnapshot(querySnapshot => {
            const videos = querySnapshot.docs.map(doc => doc.data());
            this.setState({ videos: videos})
        })
    }

    

    render(){
       console.log('teste: ', this.props.getToVideos)
        return(
             
            <div>
                <Header></Header>
                <ContainerCardVideo>
                    {this.props.getToVideos.map((video) =>(
                        <CardVideo
                            url={video.url}
                            title={video.title}
                            description={video.description}
                            />
                    ))}

                </ContainerCardVideo>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    getToVideos: state.videos.allVideos
})

const mapDispatchToProps = (dispatch) => {
    return {
        getVideos: () => dispatch(getVideos()), 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);