import styled from "@emotion/styled";

export const MainImg = styled.img`
  width: 100%;
  // height: 120px;
`;

export const Card = styled.div`
  width: 406px;
//   height: 490px;
//   padding: 48px;
  border-radius: 24px;
  background: #fff;
//   @media (max-width: 1050px) {
//     padding: 48px 36px;
//   }
//   @media (max-width: 990px) {
//     padding: 48px 18px;
//   }
//   @media (max-width: 380px) {
//     padding: 48px 8px;
//   }
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
  // width: 408px;
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
  @media (max-width: 500px) {
    width: 145px;
  }
`;

export const ContinueDiv = styled.div`
    // width: 404px;
    width: 390px;
    height: 40px;
    border-radius: 5px;
    background: #996CFE;
    margin-top:24px;
    display: flex;
    align-items; center;
    justify-content: center;
    @media (max-width: 500px) {
        width:326px;
    }        
    &:hover{
        opacity: 0.7;
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

export const Inputs = styled.input`
  width: 390px;
  height: 40px;
  border-radius: 5px;
  border: 1px;
  border: 1px solid #f2f3f7;
  box-shadow: 0px 0px 0px 0px #0009321f;
  color: #9a9aaf;
  font-size: 1rem;
  padding: 0px 16px;
  @media (max-width: 500px) {
    width: 294px;
  }
`;

export const ImageDiv = styled.div`
  // border-radius: 14.5px;
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 3px 0px #00000026, 0px 0.5px 2px 0px #00000033;
  padding: 8px;
`;

export const Book = styled.img`
  width: 100px;
  // height: 38.12px;
  // padding: 3.18px, 1.59px, 1.59px, 4.76px;
`;

export const GmailLogo = styled.img`
  width: 16px;
  height: 16px;
`;
