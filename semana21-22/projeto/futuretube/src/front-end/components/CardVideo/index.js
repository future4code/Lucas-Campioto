import React from 'react';
import * as firebase from "firebase/app";
import "firebase/firestore"
import { push } from "connected-react-router";
import { routes } from "../../containers/Router/index";
import { connect } from "react-redux";
import axios from 'axios'
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';




const ContainerVideo = styled.div`
    width: 30vw;
    height:60vh;
    background-color: #fff;
    -webkit-box-shadow: 6px 6px 10px #999; 
	-moz-box-shadow: 6px 6px 10px #999;
     box-shadow: 6px 6px 10px #999;
     border-radius:15px;
            
`

const ContainerInformationVideo = styled.div`
    height:20vh;
    text-align:center;
    
`

const TitleVideo = styled.h3`
    
`

const DescriptionVideo = styled.p`
    font-size:16px;
    margin-top:-5px;
`

const ContainerActionVideo = styled.div`
    display: flex;

`
const EditVideoIcon =  styled.span`
    cursor:pointer;
`

const DeleteVideoIcon =  styled.span`
 color:red;
 margin-left:15px;
 cursor:pointer;
`

export class CardVideo extends React.Component{
    constructor(props){
        super(props)
    }

    deleteVideo = async(e) =>{
        e.preventDefault();
        try{            
            const idVideo = await firebase.firestore().collection("sendVideo").doc().get().then(doc => doc.id);
            await axios.delete(`https://us-central1-futuretube-projeto.cloudfunctions.net/futureTube/deleteVideo/${idVideo}`)
        }catch(e){
            console.log(e.message)  
        }  
    }

    render(){
        return(
            
                <ContainerVideo>
                    <ReactPlayer 
                    url={this.props.url} 
                    width='30vw'
                    height='40vh'
                    />
                    <ContainerInformationVideo>
                        <TitleVideo>{this.props.title}</TitleVideo>
                        <DescriptionVideo>{this.props.description}</DescriptionVideo>
                        <EditVideoIcon onClick={this.props.goToEditVideoPage}> <EditIcon />  </EditVideoIcon>
                        <DeleteVideoIcon> <DeleteIcon onClick={this.deleteVideo} /> </DeleteVideoIcon>
                    </ContainerInformationVideo>
                </ContainerVideo>
          
                 
        )
    }

}

const mapDispatchToProps = dispatch => ({
    goToEditVideoPage: () => dispatch(push(routes.editVideo)),
})

export default connect(
    null,
    mapDispatchToProps
)(CardVideo);
