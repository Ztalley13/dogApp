import React from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "./style.css";
import "@brainhubeu/react-carousel/lib/style.css";

function CarouselComp() {
  return (
    <div style={{ width: "100%" }}>
      <Carousel arrows>
        <img src={"https://picsum.photos/200"} />
        <img src={"https://picsum.photos/200"} />
        <img src={"https://picsum.photos/200"} />
      </Carousel>
    </div>
  );
}

export default CarouselComp;
