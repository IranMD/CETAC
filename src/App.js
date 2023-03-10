import './App.css';
import Slider from'./components/Home/Slider';
import Menu from './components/Home/Navbar';
import Cetac from './components/Home/SeccionCetac';
import OfertaEducativa from './components/Home/OfertaEducativa';
import Ubicacion from './components/Home/Ubicacion';
import Noticias from './components/Home/Noticias';
import CarruselNoticias from './components/Home/CarruselNoticias';
import Footer from './components/Home/Footer';



function App() {
  return (
    <>
     <Menu></Menu>
     <Slider></Slider>
     <Cetac></Cetac>
     <OfertaEducativa></OfertaEducativa>
     <Noticias></Noticias>
     <CarruselNoticias/>
     <Ubicacion></Ubicacion>
     <Footer></Footer>
    </>
   
    
    
  );
}

export default App;
