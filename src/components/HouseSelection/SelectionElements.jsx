import styled from "styled-components";

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
`;
export const Colmn2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: colmn2;
`;

export const Input = styled.input`
  width: 400px;
  padding: 10px;
  font-size: 18px;
  outline: none;
  background: linear-gradient(to left top, #000, #22132e) fixed;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.5s;
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
