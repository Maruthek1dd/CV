import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Gauge } from "./Gauge"; // Ajusta la ruta según la ubicación real de Gauge.js

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className=" mt-8 mb-28    ">
      <h2 className="my-12 text-center text-3xl">My Skills</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        className="skill-slider"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="flex flex-col items-center justify-center">
          <Gauge percent={75} radius={50} />
          <h5 className="text-center mt-2">Ingles</h5>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Gauge percent={85} radius={50} />
          <h5 className="text-center mt-2">Adaptacion</h5>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Gauge percent={90} radius={50} />
          <h5 className="text-center mt-2">Carisma</h5>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Gauge percent={90} radius={50} />
          <h5 className="text-center mt-2">Trabajo en equipo</h5>
        </div>

        {/* Agrega más items según sea necesario */}
      </Carousel>
    </div>
  );
};
