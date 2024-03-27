import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MainContainer,
  InnerContainer,
  VerificationIcon,
  VerificationStatus,
  VerificationMessage,
  CloseIconDiv,
  VerificationButton,
} from "../Signup/style";
// import EmailVerifyIcon from "../../assets/images/verify-email-icon.svg";
// import CardCloseIcon from "../../assets/images/carbon_close-filled2.svg";
import SP from "./SupportPalestine.jpg";
const VerifyEmailPopup = ({ onClose }) => {
  const navigate = useNavigate();
  return (
    <>
      <MainContainer>
        {/* <InnerContainer> */}
          <VerificationIcon>
            <img src={SP} alt="" />
          </VerificationIcon>
          {/* <VerificationStatus>Verify your Email</VerificationStatus> */}
          {/* <VerificationMessage>We Stand With Palestine</VerificationMessage> */}
          {/* <VerificationButton onClick={() => navigate("")}>
            Donate Here
          </VerificationButton> */}
        {/* </InnerContainer> */}
        <CloseIconDiv onClick={onClose}>
          {/* <img src={CardCloseIcon} alt="" /> */}x
        </CloseIconDiv>
      </MainContainer>
    </>
  );
};

export default VerifyEmailPopup;
