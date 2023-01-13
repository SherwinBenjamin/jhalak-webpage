import React from "react";
import {
  HouseContainer,
  HouseWrapper,
  HouseRow,
  TextWrapper,
  Heading,
  TopLine,
  Column1,
  Column2,
  Contact,
  Colm1,
  Colm2,
  ContactWrapper,
} from "./HouseElements";

const Houses = ({ headline, topline, contactName1, contactName2, contactNo1, contactNo2 }) => {
  return (
    <>
      <HouseContainer>
        <HouseWrapper>
          <HouseRow>
            <Column1>
              <TextWrapper>
                <Heading>{headline}</Heading>
              </TextWrapper>
            </Column1>
            <Column2>
              <TopLine>{topline}</TopLine>
              <ContactWrapper>
                <Contact>
                  <Colm1>{contactName1}</Colm1>
                  <Colm2>{contactNo1}</Colm2>
                </Contact>
                <Contact>
                  <Colm1>{contactName2}</Colm1>
                  <Colm2>{contactNo2}</Colm2>
                </Contact>
              </ContactWrapper>
            </Column2>
          </HouseRow>
        </HouseWrapper>
      </HouseContainer>
    </>
  );
};

export default Houses;
