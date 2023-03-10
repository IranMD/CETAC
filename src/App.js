import './App.css';
import Slider from'./components/Home/Slider';
import Menu from './components/Home/Navbar';
import Cetac from './components/Home/SeccionCetac';
import OfertaEducativa from './components/Home/OfertaEducativa';
import Ubicacion from './components/Home/Ubicacion';
import Avisos from './components/Home/Avisos';
import Footer from './components/Home/Footer';



function App() {
  return (
    <>
     <Menu></Menu>
     <Slider></Slider>
     <Cetac></Cetac>
     <OfertaEducativa></OfertaEducativa>
     <Avisos/>
     <Ubicacion></Ubicacion>
     <Footer></Footer>
    </>
   
    
    
  );
}

export default App;
