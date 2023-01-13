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
} from "./SelectionElements";
import { Button } from "../ButtonElement";

const HouseSelection = () => {
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState("");

  const handleClick = () => {
    if (inputValue % 4 === 0) {
      setOutput("Trishul");
    } else if (inputValue % 4 === 1) {
      setOutput("Agni");
    } else if (inputValue % 4 === 2) {
      setOutput("Akash");
    } else if (inputValue % 4 === 3) {
      setOutput("Prithvi");
    }
  };

  return (
    <>
      <SelectionContainer id="House Selection">
        <SelectionWrapper>
          <InputRow>
            <Colmn1>
              <Input
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="Enter the Last 3 digits of your RegNo."
              />
            </Colmn1>
            <Colmn2>
              <InputBtn>
                <Button onClick={handleClick}> Check! </Button>
              </InputBtn>
            </Colmn2>
          </InputRow>
          <TextWrapper>
            <Subtext>Your House is: {output} </Subtext>
          </TextWrapper>
        </SelectionWrapper>
      </SelectionContainer>
    </>
  );
};

export default HouseSelection;
