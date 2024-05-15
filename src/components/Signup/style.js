import styled from "@emotion/styled";
import { FlexDiv } from "../../assets/styles/style";
import { FormControl, MenuItem, Select } from "@mui/material";

export const MainImg = styled.img`
  width: 100%;
  // height: 120px;
`;

export const Card = styled.div`
  width: 450px;
  padding: 30px;
  border-radius: 24px;
  background: #fff;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const SignUpText = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #996cfe;
  &:hover {
    text-decoration: underline;
  }
`;

export const HaveAnAccount = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
`;

export const GoogleText = styled.div`
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;

export const GoogleDiv = styled.div`
  width: 390px;
  height: 40px;
  border-radius: 5px;
  background: #eee;
  box-shadow: 0px 0px 0px 0px #00062e32;
  margin-top: 24px;
  @media (max-width: 500px) {
    width: 326px;
  }
`;

export const OR = styled.div`
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.05999999865889549px;
  text-align: left;
  color: #0007149f;
`;

export const Line = styled.div`
  width: 100px;
  height: 1px;
  top: 383px;
  left: 221px;
  background: #00002f26;
  // @media (max-width: 500px) {
  //   width: 145px;
  // }
`;

export const ContinueDiv = styled.div`
width: 390px;
  height: 40px;
  border-radius: 5px;
  background: #996cfe;
  margin-top: 24px;
      display: flex;
    align-items; center;
    justify-content: center;
  @media (max-width: 500px) {
    width: 326px;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const ContinueText = styled.div`
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: -0.009em;
  text-align: left;
  color: #fff;
`;

export const Arrow = styled.img`
  width: 16px;
  height: 16px;
`;

export const MainText = styled.div`
  color: #2b333b;
  font-family: Inter;
  font-size: 28px;
  font-weight: 700;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 16px;
  margin-bottom: 48px;
`;

export const CredenialsText = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
`;

export const ForgotPass = styled.div`
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: right;
  color: #996cfe;
`;

export const ConstraintsText = styled.div`
  color: rgba(0, 0, 0, 0.5);
  leading-trim: both;
  text-edge: cap;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 160% */
  white-space: nowrap;
  // width: 180px;

  width: 230px;
  display: flex;
  justify-content: flex-start;
  align-self: flex-start;
`;

export const WeakText = styled.div`
  color: #e8352b;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; /* 150% */
  white-space: nowrap;
  margin-right: 10px;
  // width: 160px;
`;

export const TermsCondText = styled.div`
  color: rgba(0, 0, 0, 0.3);
  leading-trim: both;
  text-edge: cap;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 160% */
  width: 342px;
  margin-left: 15px;
  span {
    color: #996cfe;
  }
  @media (max-width: 500px) {
    width: 294px;
  }
`;

export const InputWrapper = styled.div`
  // width: 100%;
  width: 390px;
  position: relative;
  display: flex;
  align-items: center;
`;

export const Inputs = styled.input`
  width: 390px;
  // width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px;
  border: 1px solid #f2f3f7;
  box-shadow: 0px 0px 0px 0px #0009321f;
  color: #9a9aaf;
  padding: 0px 16px;
  @media (max-width: 500px) {
    width: 294px;
  }
`;

export const ToggleText = styled.span`
  position: absolute;
  right: 10px;
  color: #9a9aaf;
  cursor: pointer;
  user-select: none;
  font-family: Inter;
  leading-trim: both;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  @media (max-width: 500px) {
    font-size: 13px;
  }
`;

export const ImageDiv = styled.div`
  border-radius: 14.5px;
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 3px 0px #00000026, 0px 0.5px 2px 0px #00000033;
  padding: 8px;
`;

export const Book = styled.img`
  width: 38.12px;
  height: 38.12px;
  padding: 3.18px, 1.59px, 1.59px, 4.76px;
`;

export const GmailLogo = styled.img`
  width: 16px;
  height: 16px;
`;

export const OuterFlexDiv = styled(FlexDiv)`
  height: 110vh;
  // @media (max-height: 815px) {
  //   height: 120vh;
  // }
  // @media (max-height: 680px) {
  //   height: 135vh;
  // }
`;

export const MainContainer = styled.div`
  width: 400px;
  height: 400px;
  // padding: 105px 96px;
  // padding: 2%;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: #fefefe;
  position: absolute;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10001;
  @media (max-width: 815px) {
    width: 400px;
    height: 360px;
  }
  @media (max-width: 500px) {
    width: 330px;
    height: 290px;
  }
  @media (max-width: 360px) {
    width: 300px;
    height: 270px;
  }
`;

export const RelativeContainer = styled.div`
  position: relative;
`;

export const InnerContainer = styled.div`
  width: 309px;
  height: 128px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  @media (max-width: 815px) {
    width: 290px;
    height: 130px;
  }
  @media (max-width: 500px) {
    width: 300px;
    height: 160px;
  }
  @media (max-width: 360px) {
    width: 280px;
    height: 150px;
  }
`;

export const VerificationIcon = styled.div`
  width: 350px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const VerificationStatus = styled.div`
  color: #000;
  font-family: "Noto Sans";
  font-size: 18px;
  font-weight: 600;
  line-height: 16px;
  @media (max-width: 815px) {
    font-size: 17px;
  }
  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

export const VerificationMessage = styled.div`
  color: #7e7e8f;
  font-family: "Noto Sans";
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  @media (max-width: 815px) {
    font-size: 13px;
  }
  @media (max-width: 500px) {
    font-size: 11px;
  }
`;

export const VerificationButton = styled.button`
  display: flex;
  padding: 10px 22px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background: #996cfe;
  color: white; /* Assuming the text color is white */
  border: none; /* Remove button border */
  cursor: pointer; /* Change cursor to pointer */
  font-family: "Noto Sans";
  font-size: 14px;
  margin-top: 12px;
  @media (max-width: 815px) {
    padding: 9px 20px;
  }
  @media (max-width: 500px) {
    padding: 7px 16px;
  }
`;

export const CloseIconDiv = styled.div`
  position: absolute;
  top: 9px;
  right: 5px;
  font-size: 30px;
  cursor: pointer;
  &:hover {
  }
`;

export const VerifyEmailPopUpDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  // transition: background 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const IconBg = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%; /* To make it a circle */
  background: lightgray 50% / cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputError = styled.div`
  font-family: "Noto Sans";
  color: red;
  width: 100%;
  font-size: 12px;
  margin: -20px 0px;
  text-align: left !important;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute:
  left: 0px;
`;

export const InputErrorLogin = styled.div`
  font-family: "Noto Sans";
  color: red;
  width: 100%;
  font-size: 12px;
  // margin: -20px 0px;
  text-align: left !important;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute:
  left: 0px;
`;

export const TextProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RRBFormControl = styled(FormControl)`
  margin-top: 15px;
  margin-left: 1px;
  margin-right: 1px;
  min-width: 388px;
  vertical-align: middle;
`;

export const RRBSelect = styled(Select)`
  width: 388px;
  font-size: 22px;
  line-height: 0.75 rem;
  text-align: center;
  font-family: "Noto Sans";
  color: #9a9aaf;
  border-bottom: 2px solid #996cfe;
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;

  & .MuiSelect-select {
    padding: 0;
    &:focus {
      background-color: transparent;
    }
  }

  & .MuiSvgIcon-root {
    font-size: 25px;
  }

  & .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  // &:hover {
  //   border-bottom: 2px solid #996cfe;
  // }
`;

export const RRBMenuItem = styled(MenuItem)`
  font-family: "Noto Sans";
`;
