import './App.css';
import Slider from'./components/Home/Slider';
import Menu from './components/Home/Navbar';
import Cetac from './components/Home/SeccionCetac';
import OfertaEducativa from './components/Home/OfertaEducativa';
import Ubicacion from './components/Home/Ubicacion';
import Noticias from './components/Home/Noticias';



function App() {
  return (
    <>
     <Menu></Menu>
     <Slider></Slider>
     <Cetac></Cetac>
     <OfertaEducativa></OfertaEducativa>
     <Ubicacion></Ubicacion>
     <Noticias></Noticias>
    </>
   
    
    
  );
}

export default App;
