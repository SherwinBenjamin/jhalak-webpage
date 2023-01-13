import React, { useState } from "react";
import { Button } from "../ButtonElement";
// import Video from "../../assets/videos/video.mp4";
import Type from "../../assets/images/type.svg";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroH2,
  HeroBtnWrapper,
  HeroP,
  ArrowDown,
  ArrowBelow,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="Home">
      <HeroBg>{/* <VideoBg autoPlay loop muted src={Video} type="video/mp4" /> */}</HeroBg>
      <HeroContent>
        <HeroH1 src={Type} type="image/svg" />

        <HeroH2>Inter College Competition</HeroH2>
        <HeroP>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab delectus laboriosam minus
          dolorum aliquam reprehenderit sunt, quos vel facilis cupiditate voluptas beatae nesciunt,
        </HeroP>
        <HeroBtnWrapper>
          <Button to="House-selection" onMouseEnter={onHover} onMouseLeave={onHover}>
            Know your House {hover ? <ArrowDown /> : <ArrowBelow />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
