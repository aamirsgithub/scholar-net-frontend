import React from "react";
import {
  TopBarContainer,
  LogoAndText,
  Logo,
  StepText,
  ExitLink,
} from "./style";
import logoImage from "../../assets/images/logo-scholarnet0.png";

const TopStepsCountBar = ({ step, totalSteps }) => {
  return (
    <TopBarContainer>
      <LogoAndText>
        <Logo src={logoImage} alt="Logo" />
        <StepText>
          Step {step} of {totalSteps}
        </StepText>
      </LogoAndText>
      <ExitLink href="#">Exit</ExitLink>
    </TopBarContainer>
  );
};

export default TopStepsCountBar;
