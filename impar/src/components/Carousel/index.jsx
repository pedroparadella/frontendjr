import Carousel from 'flat-carousel';
import './styles.css'

const images = [
    { src: 'https://reactjs.org/logo-og.png' },
    { src: 'https://reactjs.org/logo-og.png' }

];

const CarouselContainer = () => (
    <Carousel>
        {images.map((image, index) => (
            <div
                key={index}
                className="demo-item"
                style={{ backgroundImage: 'url(' + image.src + ')' }}
            />
        ))}
    </Carousel>
);

export default CarouselContainer