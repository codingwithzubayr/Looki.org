import Carousel from "./Carusel/Carusel";
import HeroBack1 from "../../assets/hero-back.webp";
import HeroBack2 from "../../assets/hero-back2.webp";
import HeroBack3 from "../../assets/hero-back3.webp";

function Hero() {
  const images = [HeroBack1, HeroBack2, HeroBack3];
  return (
    <>
      <Carousel images={images} />
    </>
  );
}
export default Hero;
