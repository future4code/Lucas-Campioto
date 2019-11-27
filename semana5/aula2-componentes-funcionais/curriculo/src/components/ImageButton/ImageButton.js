import React from 'react';
import './ImageButton.css'

function ImageButton(props){
	return(
		<article class="redes-sociais">
			<img alt="imagem" src={props.imagem}></img>
			<p>{props.texto}</p>
			
		</article>
		)
}

export default ImageButton;