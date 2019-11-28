import React from "react";
import "./Post.css";




class CriaPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        imagem:"https://observatoriodocinema.bol.uol.com.br/wp-content/uploads/2019/06/cropped-iron-man-1.jpg",
        nome: "Homem de Ferro",
        imagemPost: "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/avengers-infinitywar-paulshipper-poster-frontpage-700x361.jpg",
        imagemCoracao: "https://pngimage.net/wp-content/uploads/2018/05/cora%C3%A7%C3%A3o-do-instagram-png-3.png",
        contadorCoracao: 0,
        imagemComentario: "https://image.flaticon.com/icons/svg/25/25663.svg",
        contadorComentario: 0,
        mostraInput: false,
        botaoComentario:false
        
    };
   
  }


aoClicarComentario = () =>{
    if(this.state.mostraInput){
        this.setState({
            mostraInput:false
        })
        
    }else{
        this.setState({
            mostraInput:true
        })
    }
}

aoClicarCoracao = () =>{
    if(this.state.imagemCoracao){
    this.setState({
        contadorCoracao: +1,
        imagemCoracao: "https://pngimage.net/wp-content/uploads/2018/06/icone-cora%C3%A7%C3%A3o-png-7.png"
    });

 }else{
    this.setState({
        contadorCoracao: -1,
        imagemCoracao: "https://pngimage.net/wp-content/uploads/2018/05/cora%C3%A7%C3%A3o-do-instagram-png-3.png"
    });
 }
}

aoClicarBotaoComentario = () =>{
    this.setState({

        contadorComentario: +1,
        
    })
}



  render() {
    return (
      <div class ="post">
            <div class="header">
                <img src={this.state.imagem}/>
                <p>
                    {this.state.nome}
                </p>
            </div>

            <div class="img-post">
                <img src={this.state.imagemPost}/>
            </div>
            
            <div class="footer-post">
                <div>
                    <img onClick={this.aoClicarCoracao} src={this.state.imagemCoracao}/>
                    <p>{this.state.contadorCoracao}</p>
                </div>
                <div>
                    <img  onClick={this.aoClicarComentario} src={this.state.imagemComentario}/>
                    <p>{this.state.contadorComentario}</p>
                </div>
            </div>

            <div class="comentario">
                <input type="text" placeholder="escreva um comentario"></input>
                <button onClick={this.aoClicarBotaoComentario}>
                
                    Comentar {this.state.botaoComentario}

                </button>
            </div>
      </div>
    );
  }
}

export default CriaPost;