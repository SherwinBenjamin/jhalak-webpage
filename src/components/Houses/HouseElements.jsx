import styled from "styled-components";

export const HouseContainer = styled.div`
  color: #fff;
  background: #c94b4b; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #4b134f, #c94b4b); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #4b134f, #c94b4b);
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const HouseWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100vh;
  width: 100% auto;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const HouseRow = styled.div`
  display: grid;
  gap: 128px;
  grid-auto-columns: mixmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";
  padding-top: 80px;
  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2";
    gap: 0;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  /* From https://css.glass */
  background: rgba(160, 70, 158, 0.09);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.2px);
  -webkit-backdrop-filter: blur(2.2px);
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-bottom: 60px;
`;

export const Heading = styled.h1`
  /* margin-bottom: 24px; */
  font-size: 8rem;
  line-height: 1.1;
  font-weight: 600px;
  color: #fff;
  @media screen and (max-width: 768px) {
    margin-bottom: 12px;
  }
  @media screen and (max-width: 480px) {
    font-size: 65px;
  }
`;

export const TopLine = styled.p`
  color: #ece0dd;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  padding-top: 12px;
`;

export const ContactWrapper = styled.div`
  max-width: 555px;
  height: 100%;
  padding: 30px;
`;

export const Contact = styled.div`
  display: grid;
  grid-auto-columns: 1fr 1fr;
  align-items: center;
  grid-template-areas: "colm1 colm2";
  @media screen and (max-width: 768px) {
    grid-template-areas: "colm1" "colm2";
  }
`;

export const Colm1 = styled.div`
  margin-bottom: 15px;
  /* padding: 0 15px; */
  grid-area: colm1;
`;

export const Colm2 = styled.div`
  margin-bottom: 15px;
  /* padding: 0 15px; */
  grid-area: colm2;
`;
