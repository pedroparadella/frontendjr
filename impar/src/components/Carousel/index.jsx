import Carousel from "flat-carousel";
import { CarouselImg } from "./styles";
import familiaFeliz from "../../assets/familia-feliz.jpg";
import familiaFeliz2 from "../../assets/familia-feliz2.jpg";
import familiaFeliz3 from "../../assets/familia-feliz3.jpg";

const images = [{ src: familiaFeliz }, { src: familiaFeliz2 }, { src: familiaFeliz3 }];

const CarouselContainer = () => (
  <Carousel style="height: 30vh">
    {images.map((image, index) => (
      <CarouselImg src={image.src} key={index}/>
    ))}
  </Carousel>
);

export default CarouselContainer;
