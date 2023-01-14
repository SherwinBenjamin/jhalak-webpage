import styled from "styled-components";

// export const HouseText = styled.div`
//   height: 100%;
//   width: 100%;
//   color: #fff;
//   background: #c94b4b; /* fallback for old browsers */
//   background: -webkit-linear-gradient(to right, #4b134f, #c94b4b); /* Chrome 10-25, Safari 5.1-6 */
//   background: linear-gradient(to right, #4b134f, #c94b4b);
//   display: flex;
//   /* flex-wrap: wrap; */
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
// `;
// export const houseH2 = styled.div`
//   width: 30%;
//   display: block;
//   text-align: center;
//   margin: 0;
//   margin-bottom: 10px;
// `;

// export const otherBox = styled.div`
//   padding-top: 20px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
// export const otherText = styled.p`
//   padding-top: 20px;
//   color: #fff;
//   background: #c94b4b; /* fallback for old browsers */
//   background: -webkit-linear-gradient(to right, #4b134f, #c94b4b); /* Chrome 10-25, Safari 5.1-6 */
//   background: linear-gradient(to right, #4b134f, #c94b4b);
//   text-align: center;
// `;

export const SelectionContainer = styled.div`
  color: #fff;
  background: #c94b4b; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #4b134f, #c94b4b); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #4b134f, #c94b4b);
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const SelectionWrapper = styled.div`
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

export const InputRow = styled.div`
  display: grid;
  /* gap: 128px; */
  grid-auto-columns: 1fr 1fr;
  align-items: center;
  grid-template-areas: "colmn1 colmn2";
  padding-top: 80px;
  @media screen and (max-width: 768px) {
    grid-template-areas: "colmn1" "colmn2";
    gap: 0;
  }
`;

export const Colmn1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: colmn1;
  justify-content: center;
  @media screen and (max-width: 768) {
    padding-right: -15px;
  }
`;
export const Colmn2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: colmn2;
`;

export const Input = styled.input`
  width: 90%;
  padding: 10px;
  font-size: 18px;
  outline: none;
  background: linear-gradient(to left top, #000, #22132e) fixed;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.5s;
  @media screen and (max-width: 768px) {
    width: 95%;
    font-size: 12px;
  }
  overflow: hidden;
`;
export const InputBtn = styled.div`
  margin: auto;
  margin-left: 200px;
  width: 40%;
  @media screen and (max-width: 768px) {
    margin-left: auto;
  }
`;
export const TextWrapper = styled.div`
  justify-content: center;
  align-items: center;
`;
export const Subtext = styled.p`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  color: #fff;
  font-size: 28px;
  /* text-align: center; */

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Pwrapper = styled.div`
  justify-content: center;
`;

export const NoteP = styled.p`
  display: flex;
  justify-content: center;
  font-weight: 100;
  text-align: center;
  color: #fff;
  font-size: 28px;
  margin-bottom: 30px;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
    /* padding: 20px; */
    width: 80%;
  }
  overflow: hidden;
`;

export const Table = styled.div`
  display: grid;
  margin-top: 20px;
  grid-auto-columns: 1fr 1fr;
  align-items: center;

  grid-template-areas: "colm1 colm2";
  @media screen and (max-width: 768px) {
    grid-template-areas: "colm1" "colm2";
    justify-items: center;
  }

  @media screen and (max-width: 350px) {
    grid-auto-columns: minmax(auto, auto);
    margin-left: 20px;
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
