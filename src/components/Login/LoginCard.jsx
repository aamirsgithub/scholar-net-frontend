import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Btn, FlexDiv } from "../../assets/styles/style";
import LoginLabel from "../../assets/images/mainimage.jpg";
// import LoginCardImg from "../../assets/images/Scholarnet-sm.png";
import {
  Arrow,
  Book,
  Card,
  ContinueDiv,
  ContinueText,
  CredenialsText,
  ForgotPass,
  HaveAnAccount,
  ImageDiv,
  Inputs,
  Line,
  MainImg,
  MainText,
  OR,
  SignUpText,
} from "./style";
import {
  InputWrapper,
  ToggleText,
  InputErrorLogin,
  VerifyEmailPopUpDiv,
} from "../Signup/style";
import ArrowImg from "../../assets/images/ContinueArrow.svg";
import { useMediaQuery } from "@mui/material";
import CircularProgress from "./CircularLoader";
import SnackbarAlert from "./SnackbarAlert";
import { useAuth } from "../../authentication/Auth";
import VerifyEmailPopup from "./VerifyEmailPopup";

const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarVariant, setSnackbarVariant] = useState("outlined");
  const [snackbarColor, setSnackbarColor] = useState("neutral");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitAttempted, setIsSubmitAttempted] = useState(false);
  const [isVerifyEmailPopupVisible, setIsVerifyEmailPopupVisible] = useState(false);

  const navigate = useNavigate();
  const isLaptop = useMediaQuery("(max-width:1300px)");
  const isTab = useMediaQuery("(max-width:900px)");

  const emailRegex = /\S+@\S+\.\S+/;
  const handleEmailChange = (event) => {
    const emailInput = event.target.value;
    setEmail(emailInput);
    setEmailError("");
    if (isSubmitAttempted) {
      if (!emailInput) {
        setEmailError("Email field is empty.");
      } else if (!emailRegex.test(emailInput)) {
        setEmailError("Email format incorrect.");
      } else {
        setEmailError("");
      }
    }
  };

  const handlePasswordChange = (event) => {
    const passwordInput = event.target.value;
    setPassword(passwordInput);
    setPasswordError("");
    if (isSubmitAttempted) {
      if (!passwordInput) {
        setPasswordError("Password field is empty.");
      } else {
        setPasswordError("");
      }
    }
  };

  const { login } = useAuth();

  const handleVerifyEmailPopupClose = () => {
    setIsVerifyEmailPopupVisible(false);
  };

  const handleLogin = async () => {
    setIsSubmitAttempted(true);

    let hasErrors = false;

    if (!email) {
      setEmailError("Email field is empty.");
      hasErrors = true;
    } else if (!emailRegex.test(email)) {
      setEmailError("Email format incorrect.");
      hasErrors = true;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password field is empty.");
      hasErrors = true;
    } else {
      setPasswordError("");
    }

    if (hasErrors) {
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/auth/local/login", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password,
        }),
      });
      const data = await response.json();
      console.log("login response:", data);

      if (response.status === 200) {
        console.log("Login successful", data);
        setSnackbarMessage(data.message || "Login successful");
        setSnackbarVariant("soft");
        setSnackbarColor("success");
        setSnackbarOpen(true);
        // login(data.response);
        setTimeout(() => {
          localStorage.setItem('showVerifyEmailPopup', 'true');
          login(data.user);
          navigate("/");
          // setIsVerifyEmailPopupVisible(true);
        }, 2000);
      } else {
        console.error("Login failed", data);
        setSnackbarMessage(
          data.message || "An error occurred. Please try again."
        );
        setSnackbarVariant("outlined");
        setSnackbarColor("danger");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("Login error", error);
      setSnackbarMessage("An error occurred. Please try again.");
      setSnackbarVariant("outlined");
      setSnackbarColor("danger");
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FlexDiv
      style={{
        height: "100vh",
      }}
    >
      <SnackbarAlert
        open={snackbarOpen}
        setOpen={setSnackbarOpen}
        message={snackbarMessage}
        variant={snackbarVariant}
        color={snackbarColor}
      />
      {isVerifyEmailPopupVisible && (
        <VerifyEmailPopUpDiv>
          <VerifyEmailPopup onClose={handleVerifyEmailPopupClose} />
        </VerifyEmailPopUpDiv>
      )}
      {!isTab && (
        <FlexDiv
          style={{
            background: "#ffff",
            height: "100%",
            width: isLaptop ? "50%" : "60%",
          }}
        >
          <MainImg alt="" src={LoginLabel} />
        </FlexDiv>
      )}
      <FlexDiv
        style={{
          width: isLaptop ? "40%" : "40%",
        }}
      >
        <Card>
          <MainText style={{ marginTop: "16px" }}>
            Sign in to{" "}
            <span style={{ color: "var(--clr-orange)" }}>ScholarNET</span>
          </MainText>
          <CredenialsText style={{ marginTop: "40px", marginBottom: "8px" }}>
            Email
          </CredenialsText>
          <Inputs
            placeholder="Your email address"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && (
            <InputErrorLogin style={{ marginBottom: "-15px" }}>
              {emailError}
            </InputErrorLogin>
          )}

          <FlexDiv
            style={{
              alignItems: "flex-end",
              // gap:  "195px",
              justifyContent: "space-between",
            }}
          >
            <CredenialsText style={{ marginTop: "16px" }}>
              Password
            </CredenialsText>
            {/* <ForgotPass>Forgot your password?</ForgotPass> */}
          </FlexDiv>
          <InputWrapper style={{ marginTop: "8px" }}>
            <Inputs
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
            />
            <ToggleText onClick={togglePasswordVisibility}>
              {showPassword ? "Hide" : "Show"}
            </ToggleText>
          </InputWrapper>
          {passwordError && (
            <InputErrorLogin style={{ marginBottom: "-15px" }}>
              {passwordError}
            </InputErrorLogin>
          )}

          <Btn onClick={handleLogin}>
            <ContinueDiv>
              {loading ? (
                <CircularProgress disableShrink />
              ) : (
                <FlexDiv
                  style={{
                    height: "100%",
                    gap: "4px",
                  }}
                >
                  <ContinueText>Continue</ContinueText>
                  <Arrow alt="" src={ArrowImg} />
                </FlexDiv>
              )}
            </ContinueDiv>
          </Btn>
          <FlexDiv
            style={{
              marginTop: "16px",
              gap: "8px",
              justifyContent: "center",
            }}
          >
            <Line />
            <OR>OR</OR>
            <Line />
          </FlexDiv>
          {/* <GoogleDiv>
            <FlexDiv
              style={{
                height: "100%",
                gap: "8px",
              }}
            >
              <GmailLogo alt="" src={Gmail} />
              <GoogleText>Sign in with Google</GoogleText>
            </FlexDiv>
          </GoogleDiv> */}
          <FlexDiv
            style={{
              marginTop: "20px",
              gap: "4px",
              justifyContent: "flex-start",
            }}
          >
            <HaveAnAccount>Don’t have an account?</HaveAnAccount>
            <Btn
              onClick={() => {
                navigate("/signup");
              }}
            >
              <SignUpText>Sign up</SignUpText>
            </Btn>
          </FlexDiv>
        </Card>
      </FlexDiv>
    </FlexDiv>
  );
};

export default LoginCard;
