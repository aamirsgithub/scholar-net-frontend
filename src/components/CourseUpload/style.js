import styled, { css } from "styled-components";
import { Button, TextField } from "@mui/material";

export const OuterDiv = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  cursor: pointer;
  border: ${({ active, box }) =>
    active[box] ? "4px solid green" : "2px solid grey"};
  transition: transform 0.2s ease-in-out;

  ${({ active, box }) =>
    active[box] &&
    css`
      transform: scale(1.05);
    `}
`;

export const IconBox = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Icon = styled.img`
  width: 100%;
  height: auto;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Description = styled.div`
  font-size: 16px;
  text-align: center;
`;

export const OuterDiv2 = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
`;

export const Text = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin: 3rem 0;
`;

export const Boxes = styled.div`
  display: flex;
  gap: 1rem;
`;

export const TopBarContainer = styled.div`
  height: 50px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const LogoAndText = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 14%;
  margin-right: 20px;
`;

export const StepText = styled.div`
  font-size: 16px;
  color: #333;
  magin-left: 20px;
  font-weight: 600;
`;

export const ExitLink = styled.a`
  color: red;
  text-decoration: none;
  cursor: pointer;
  font-size: 25px;

  &:hover {
    text-decoration: none;
    color: red;
  }
`;

export const BottomBarContainer = styled.div`
  height: 50px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1); // Shadow directed upwards
  position: fixed; // To make it stick to the bottom
  bottom: 0; // Stick to the bottom of the page or container
`;

export const ContinueButton = styled.button`
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;


export const PageContainer = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
  padding: 50px 150px;
`;

export const FormContainer = styled.div`
  background: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledButton = styled(Button)`
  && {
    background-color: #1976d2;
    color: white;
    &:hover {
      background-color: #115293;
    }
  }
`;

export const StyledTextField = styled(TextField)`
  && .MuiOutlinedInput-root {
    fieldset {
      border-color: #9e9e9e;
    }
    &:hover fieldset {
      border-color: #1976d2;
    }
    &.Mui-focused fieldset {
      border-color: #1976d2;
    }
  }
  && .MuiInputLabel-root {
    color: #9e9e9e;
    &.Mui-focused {
      color: #1976d2;
    }
  }
`;

export const ImagePreview = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-top: 10px;
`;
