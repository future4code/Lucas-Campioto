import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


const ContainerCardVideo = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap:15px;
    justify-items: center;
    margin-top: 20px;
    margin-bottom:20px;
    
`

const ContainerVideo = styled.div`
    width: 30vw;
    height:60vh;
    background-color: #d3dbf0;
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

function CardVideo(props){
    return(
        <ContainerCardVideo>
                <ContainerVideo>
                    <ReactPlayer 
                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
                    width='30vw'
                    height='40vh'
                    />
                    <ContainerInformationVideo>
                        <TitleVideo>Sidoka - Noite fria</TitleVideo>
                        <DescriptionVideo>Video do sidoka</DescriptionVideo>
                        <EditVideoIcon> <EditIcon />  </EditVideoIcon>
                        <DeleteVideoIcon> <DeleteIcon /> </DeleteVideoIcon>
                    </ContainerInformationVideo>
                </ContainerVideo>
                <ContainerVideo>
                    <ReactPlayer 
                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
                    width='30vw'
                    height='40vh'
                    />
                    <ContainerInformationVideo>
                        <TitleVideo>Sidoka - Noite fria</TitleVideo>
                        <DescriptionVideo>Video do sidoka</DescriptionVideo>
                        <EditVideoIcon> <EditIcon />  </EditVideoIcon>
                        <DeleteVideoIcon> <DeleteIcon /> </DeleteVideoIcon>
                    </ContainerInformationVideo>
                </ContainerVideo>
                <ContainerVideo>
                    <ReactPlayer 
                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
                    width='30vw'
                    height='40vh'
                    />
                    <ContainerInformationVideo>
                        <TitleVideo>Sidoka - Noite fria</TitleVideo>
                        <DescriptionVideo>Video do sidoka</DescriptionVideo>
                        <EditVideoIcon> <EditIcon />  </EditVideoIcon>
                        <DeleteVideoIcon> <DeleteIcon /> </DeleteVideoIcon>
                    </ContainerInformationVideo>
                </ContainerVideo>
                <ContainerVideo>
                    <ReactPlayer 
                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
                    width='30vw'
                    height='40vh'
                    />
                    <ContainerInformationVideo>
                        <TitleVideo>Sidoka - Noite fria</TitleVideo>
                        <DescriptionVideo>Video do sidoka</DescriptionVideo>
                        <EditVideoIcon> <EditIcon />  </EditVideoIcon>
                        <DeleteVideoIcon> <DeleteIcon /> </DeleteVideoIcon>
                    </ContainerInformationVideo>
                </ContainerVideo>
        </ContainerCardVideo>
    )
}

export default CardVideo