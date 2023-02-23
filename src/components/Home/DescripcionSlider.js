import Figure from 'react-bootstrap/Figure';
import rectangle from './Imagenes/Rectangle 25.png'


function DescripcionSlider() {
  return (
    <Figure>
      <Figure.Image
        src={rectangle}
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>
  );
}

export default DescripcionSlider;