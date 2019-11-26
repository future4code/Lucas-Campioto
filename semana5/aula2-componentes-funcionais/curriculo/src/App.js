import React from 'react';
import logo from './logo.svg';
import foto from './foto.png';
import './App.css';
import BigCard from './components/BigCard/BigCard.js'
import SmallCard from './components/SmallCard/SmallCard.js'
import ImageButton from './components/ImageButton/ImageButton.js'
import PageSection from './components/PageSection/PageSection.js'

function App() {
  return (
    
      <div className="App">
      <PageSection>

          <h3>Dados Pessoais</h3>

          <BigCard titulo="Lucas Campioto" 
            imagem={require('./foto.png')}
            texto="Olá, sou o Lucas, tenho 25 anos. Formado em Análise e Desenvolvimento de Sistemas na universidade Anhembi Morumbi">
          </BigCard>

          <SmallCard  imagem="https://png.pngtree.com/element_our/png/20181213/inbox-vector-icon-png_267453.jpg"
                      label="E-mail: "
                      texto="l_campioto@hotmail.com">
           
          </SmallCard>

           <SmallCard  imagem="https://multarte.com.br/wp-content/uploads/2018/10/logo-whatsapp-png-transparente8.png"
                      label="whatsApp: "
                      texto="98877-6655">
           
          </SmallCard>

          <h3>Redes Sociais</h3>

          <ImageButton imagem="https://images.vexels.com/media/users/3/137253/isolated/preview/90dd9f12fdd1eefb8c8976903944c026-logotipo-do---cone-do-facebook-by-vexels.png"
                       texto="Faceebok">
            
          </ImageButton>

          <ImageButton imagem="https://multarte.com.br/wp-content/uploads/2019/03/logo-instagram-png-fundo-transparente13.png"
                       texto="Instagram">
            
          </ImageButton>

          <h3>Experiências Profissionais </h3>

          <BigCard titulo="Bradesco S/A" 
            imagem="https://banco.bradesco/portal/layout/imagens/geral/logo.png"
            texto="5 anos de Experiência ">
          </BigCard>
          
           <h3>Formação Academica</h3>

           <BigCard titulo="Anhembi Morrumbi" 
            imagem="https://lh3.googleusercontent.com/axvydf8fT4tsKcQ8ZVY44cYf_P6s2LCpt93qNfhiDREECA-1IauE7TTFTYB8tIc4qvw=s180"
            texto=" Formado na universidade Anhembi Morumbi em Analise e Desenvolvimento de Sistemas ">
          </BigCard>


      </PageSection>
    </div>
  );
}

export default App;
