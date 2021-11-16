import { FC } from "react";
import {
  ImagesStylesDesktop,
  ImagesStylesMobile,
  SliderText,
  SliderTextColor,
} from "./slider.styled";
import Image from "next/image";
import IndicatorDots from "./IndicatorDots";

const Carousel = require("re-carousel");

interface ImageProps {
  images: {
    id: number;
    image: {
      url: string;
    };
    subtitle: string;
    description: string;
    color: boolean;
  }[];
}

const Slider: FC<ImageProps> = ({ images }) => {
  return (
    <>
      <ImagesStylesDesktop>
        <Carousel auto loop interval={7000} widgets={[IndicatorDots]}>
          {images.map((img) => (
            <div key={img.id}>
              <Image
                layout="fill"
                objectFit="cover"
                objectPosition="top center"
                src={`${img.image.url}`}
                alt="Cirugía Facial"
              />
              {img.color === true ? (
                <SliderTextColor>
                  <h1>{img.subtitle}</h1>
                  <h1>{img.description}</h1>
                </SliderTextColor>
              ) : (
                //first Slide
                <SliderText>
                  <h1>{img.subtitle}</h1>
                  <h1>{img.description}</h1>
                </SliderText>
              )}
            </div>
          ))}
        </Carousel>
      </ImagesStylesDesktop>
      <ImagesStylesMobile>
        <Carousel auto loop interval={7000} widgets={[IndicatorDots]}>
          {images.map((img) => (
            <div key={img.id}>
              <Image
                layout="fill"
                objectFit="cover"
                objectPosition="top center"
                src={`${img.image.url}`}
                alt="Experto en Cirugía Facial"
              />
              {img.color === true ? (
                <SliderTextColor>
                  <h1>{img.subtitle}</h1>
                  <h1>{img.description}</h1>
                </SliderTextColor>
              ) : (
                //first Slide
                <SliderText>
                  <h1>{img.subtitle}</h1>
                  <h1>{img.description}</h1>
                </SliderText>
              )}
            </div>
          ))}
        </Carousel>
      </ImagesStylesMobile>
    </>
  );
};

export default Slider;
