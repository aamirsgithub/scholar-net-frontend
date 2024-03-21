import React from "react";
import { BottomBarContainer, ContinueButton } from "./style";

const BottomBarContinue = ({ onContinue }) => {
  return (
    <BottomBarContainer>
      <div>Course upload in progress...</div>
      <ContinueButton onClick={onContinue}>Continue</ContinueButton>
    </BottomBarContainer>
  );
};

export default BottomBarContinue;
