import React from "react";
import { Carousel } from "react-bootstrap";
import { Box } from "@chakra-ui/react";
import { Image as ArtImage } from "../d";

type ProductSliderProps = {
  images: ArtImage[];
};
function ProductSlider({ images }: ProductSliderProps) {
  return (
    <Carousel indicators={false} fade interval={null}>
      {images?.map((image) => (
        <Carousel.Item key={image?.asset_id}>
          <Box
            h={["md", "sm", "sm", "lg"]}
            backgroundImage={`url(${image?.url})`}
            backgroundSize={"cover"}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            borderRadius={"2xl"}
            w="full"
            cursor={"pointer"}
            className="d-block w-100"
          ></Box>
          {/* <Image
            className="d-block w-100"
            src={image?.url}
            alt={"art image"}
            borderRadius={"xl"}
            h={["md", "sm", "sm", "lg"]}
          /> */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProductSlider;
