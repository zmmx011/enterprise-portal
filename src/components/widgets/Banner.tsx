import * as React from "react";
import { WidgetGrid } from "./WidgetGrid";
import Carousel from "react-material-ui-carousel";
import banner1 from "../../assets/images/banner/banner1.jpeg";
import banner2 from "../../assets/images/banner/banner2.jpeg";

export default function Banner() {
  return (
    <WidgetGrid size={1}>
      <Carousel>
        <img src={banner1} alt="banner1" loading="lazy" height="240" />
        <img src={banner2} alt="banner2" loading="lazy" height="240" />
      </Carousel>
    </WidgetGrid>
  );
}
