import React, { useState } from "react";
import {
  SelectionContainer,
  SelectionWrapper,
  InputBtn,
  Input,
  TextWrapper,
  Subtext,
  InputRow,
  Colmn1,
  Colmn2,
  houseText,
  Table,
  Colm1,
  Colm2,
  // otherBox,
  // otherText,
} from "./SelectionElements";
// import { tableData } from "./tableData";
// import Table from "../Table";
import { Button } from "../ButtonElement";

const HouseSelection = ({ tableData }) => {
  const [inputValue, setInputValue] = useState("");
  const [sum, setSum] = useState(0);
  const [result, setResult] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    const digits = inputValue
      .split("")
      .map((char) => parseInt(char))
      .filter((num) => !isNaN(num));
    if (digits.length === 3) {
      const newSum = digits.reduce((acc, curr) => acc + curr);
      setSum(newSum);
      if (newSum % 4 === 0) {
        setResult("Trishul");
      } else if (newSum % 4 === 1) {
        setResult("Agni");
      } else if (newSum % 4 === 2) {
        setResult("Akash");
      } else if (newSum % 4 === 3) {
        setResult("Prithvi");
      }
    }
  };
  return (
    <>
      {/* <HouseText>
        {/* <Table data={tableData} /> }
        <houseH2>Law / Science and Humanities : Astra</houseH2>
        <houseH2>B.Ba/ M.Ba / M.Tech : Bhramos</houseH2>
        <houseH2>Hotel Management/ B.Arch : Nag</houseH2>
        <houseH2>Medical / Paramedical : Shaurya</houseH2>
        <otherBox>
          <otherText>
            If you are from Engineering and Technology , use the form below to know your house!
          </otherText>
        </otherBox>
  </HouseText> */}

      <SelectionContainer id="House Selection">
        <SelectionWrapper>
          <InputRow>
            <Colmn1>
              <Input
                type="text"
                onChange={handleInputChange}
                value={inputValue}
                placeholder="Enter the Last 3 digits of your RegNo."
              />
            </Colmn1>
            <Colmn2>
              <InputBtn>
                <Button onClick={handleButtonClick}> Check! </Button>
              </InputBtn>
            </Colmn2>
          </InputRow>
          <TextWrapper>
            <Subtext>Your House is: {result} </Subtext>
            <houseText>
              Note: This is only for Engineering and Technonlogy, the other departments will follow
              the below distribution:
            </houseText>
            <Table>
              <Colm1>Law and School of Humanities</Colm1>
              <Colm2>: Astra</Colm2>
            </Table>
            <Table>
              <Colm1>B.Ba / M.Ba/ M.Tech </Colm1>
              <Colm2>: Bhramos</Colm2>
            </Table>
            <Table>
              <Colm1>Hotel Management / B.Arch </Colm1>
              <Colm2>: Nag</Colm2>
            </Table>
            <Table>
              <Colm1>Medical / Paramedical</Colm1>
              <Colm2>: Shaurya</Colm2>
            </Table>
          </TextWrapper>
        </SelectionWrapper>
      </SelectionContainer>
    </>
  );
};

export default HouseSelection;
