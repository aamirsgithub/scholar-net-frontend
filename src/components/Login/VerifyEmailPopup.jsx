import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MainContainer,
  VerificationIcon,
  CloseIconDiv,
} from "../Signup/style";
import CardCloseIcon from "../../assets/images/carbon_close-filled2.svg";
import SP from "./SupportPalestine.jpg";
const VerifyEmailPopup = ({ onClose }) => {
  const navigate = useNavigate();
  return (
    <>
      <MainContainer>
        <VerificationIcon>
          <img src={SP} alt="" />
        </VerificationIcon>
        <CloseIconDiv onClick={onClose}>
          <img src={CardCloseIcon} alt="" />
        </CloseIconDiv>
      </MainContainer>
    </>
  );
};

export default VerifyEmailPopup;
