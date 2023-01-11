import styled from "styled-components";
import { BiDownArrow } from "react-icons/bi";
import { AiOutlineArrowDown } from "react-icons/ai";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }
  /* add before  */
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  background: #c94b4b; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #4b134f, #c94b4b); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #4b134f, #c94b4b);
`;

/*
video background 

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;
*/

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.img`
  width: 50%;
  -o-object-fit: cover;
  object-fit: cover;
  background: none;
  margin-bottom: 5rem;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 70%;
  }
  @media screen and (max-width: 576px) {
    width: 80%;
  }
`;

export const HeroH2 = styled.h2`
  color: #fff;
  font-size: 28px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
// add h2

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 18px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowDown = styled(BiDownArrow)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowBelow = styled(AiOutlineArrowDown)`
  margin-left: 8px;
  font-size: 20px;
`;
