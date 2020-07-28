import React from 'react';
import Menu from './components/menu'
import dadosIniciais from './data/dados_iniciais.json'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ background: "#141414" }}>
     <Menu/>

     <BannerMain
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription={"Sofia é uma jovem de 18 anos que trabalha na chapelaria de seu pai. Em uma de suas raras idas à cidade ela conhece Hauru, um mágico bastante sedutor mas de caráter duvidoso. Ao confundir a relação existente entre eles, uma feiticeira lança sobre Sofia uma maldição que faz com que ela tenha 90 anos. Desesperada, Sofia foge e termina por encontrar o Castelo Animado de Hauru. Escondendo sua identidade, ela consegue ser contratada para realizar serviços domésticos no local, se envolvendo com os demais moradores do castelo."}
     />

     <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
     />

      <Carousel
        
        category={dadosIniciais.categorias[1]}
     />


      <Carousel
        
        category={dadosIniciais.categorias[2]}
     />


     <Carousel
        
        category={dadosIniciais.categorias[3]}
     />

      <Carousel
        
        category={dadosIniciais.categorias[4]}
     />


      <Carousel
      
        category={dadosIniciais.categorias[5]}
     />

     <Footer/>

    </div>
  );
}

export default App;
