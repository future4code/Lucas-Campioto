import React from 'react';
import './BigCard.css'

function BigCard(props){
	return(
		<article class="BigCard">
			<h4>{props.titulo}</h4>
			<img alt="imagem" src={props.imagem}></img>
			<p>{props.texto}</p>
		</article>
		)
}

export default BigCard;