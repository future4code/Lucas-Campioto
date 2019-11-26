import React from 'react';
import './App.css';



function App() {
  return (
    <div className="App">
      <header>
        <h3>FutureTube</h3>
        <input type="search" placeholder="Busca"></input>
      </header>

      <div className="menu">
        <div>
          <p>Inicio</p>
          <p>Incrições</p>
          <p>Em alta</p>
          <p>Originais</p>
          <p>Empreendedorismo</p>
          <p>Tecnologia</p>
        </div>
      </div>

      <section>
        <div>
          <img src="https://picsum.photos/id/866/200/300" alt=""></img>
          <p>Media 1</p>
        </div>
        
        <div>
          <img src="https://picsum.photos/id/132/200/300?blur=5" alt=""></img>
          <p>Media 2</p>
        </div>

        <div>
          <img src="https://picsum.photos/id/1011/5472/3648" alt=""></img>
          <p>Media 3</p>
        </div>

        <div>
          <img src="https://picsum.photos/id/1014/6016/4000" alt=""></img>
          <p>Media 4</p>
        </div>

        <div>
          <img src="https://picsum.photos/id/1025/4951/3301" alt=""></img>
          <p>Media 5</p>
        </div>

        <div>
          <img src="https://picsum.photos/id/1022/6000/3376" alt=""></img>
          <p>Media 6</p>
        </div>

        <div>
          <img src="https://picsum.photos/id/1019/5472/3648" alt=""></img>
          <p>Media 7</p>
        </div>

        <div>
          <img src="https://picsum.photos/id/1039/6945/4635" alt=""></img>
          <p>Media 8</p>
        </div>
        </section>
        <footer></footer>
    </div>
  );
}

export default App;
