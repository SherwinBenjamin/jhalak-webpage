import React from "react";
import { Title } from "./TitleElements";

const SectionTitle = ({ sectionTitle, id }) => {
  return (
    <>
      <Title id={id}>{sectionTitle}</Title>
    </>
  );
};

export default SectionTitle;
