import React from 'react';
import styled from 'styled-components';
import LogoFuture from '../../../img/future.png';
import Icon from '@material-ui/core/Icon';
import PublishIcon from '@material-ui/icons/Publish';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EditIcon from '@material-ui/icons/Edit';
import Avatar from '@material-ui/core/Avatar';


const ContainerHeader = styled.div`
background-color:#2b0045;
width:100%;
height:100px;
font-family: 'Roboto', sans-serif;
`

const ImageLogo = styled.img`
    width:200px;
    height:200px;
    position:absolute;
    top:-52px;
    left:45px;
`


const ContainerLogo = styled.div`
    display:flex;
    justify-content:left;
    flex-direction: row;
    
`
const Items =  styled.p`
    font-size:17px;
    color:white;
    font-weight:bold;
    cursor:pointer;
    margin-right:30px;
    margin-top:35px;
`

const ItemsHeader = styled.div`
    display:flex;
    justify-content:center;
    margin-left:750px;
`

const ContainerAvatar = styled.div`
    display:flex;
    justify-content:center;
    margin-left:1150px;  
    margin-top:-55px;
    cursor: pointer;
`


function Header(props){
    return(
        <ContainerHeader>
            <ContainerLogo>
                <ImageLogo src={LogoFuture} />
            </ContainerLogo>

            
            <ItemsHeader>
                <Items> <PublishIcon/> </Items>
                <Items> <ExitToAppIcon /> </Items>
            </ItemsHeader>
            <ContainerAvatar>
                    <Avatar alt="Usuário" src="https://spinoff.com.br/wp-content/uploads/homem-de-ferro-1216-1400x800.jpg" />
            </ContainerAvatar>
           
            
        </ContainerHeader>
    )
}

export default Header