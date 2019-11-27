import React from 'react';
import './SmallCard.css'

function SmallCard(props){
	return(
		<article class="SmallCard">
			<img alt="imagem" src={props.imagem}></img>
			<label><b>{props.label}</b></label>
			<p>{props.texto}</p>
		</article>
		)
}

export default SmallCard;