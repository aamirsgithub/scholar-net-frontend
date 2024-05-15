import React, { useState } from "react";
import { Btn, FlexDiv } from "../../assets/styles/style";
import LoginLabel from "../../assets/images/mainimage2.jpg";
import {
  Card,
  ContinueDiv,
  ContinueText,
  GmailLogo,
  GoogleDiv,
  GoogleText,
  HaveAnAccount,
  Inputs,
  Line,
  MainImg,
  MainText,
  OR,
  SignUpText,
  InputWrapper,
  ToggleText,
  ConstraintsText,
  TextProgressContainer,
  WeakText,
  TermsCondText,
  OuterFlexDiv,
  VerifyEmailPopUpDiv,
  InputError,
  RRBFormControl,
  RRBSelect,
  RRBMenuItem,
} from "./style";
import Gmail from "../../assets/images/GMail.svg";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "../Login/CircularLoader";
import SnackbarAlert from "../Login/SnackbarAlert";
import { InputLabel } from "@mui/material";

const calculatePasswordStrength = (password) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[@#$%^&*()_+[\]{}|~]/.test(password);

  let strength = -1;
  if (password.length >= minLength) {
    strength++;
  }

  if (hasUpperCase) strength++;
  if (hasLowerCase) strength++;
  if (hasNumber) strength++;
  if (hasSymbol) strength++;

  return strength;
};

const SignupCard = () => {
  const isLaptop = useMediaQuery("(max-width:1300px)");
  const isTab = useMediaQuery("(max-width:900px)");
  const isMobile = useMediaQuery("(max-width:500px)");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarVariant, setSnackbarVariant] = useState("outlined");
  const [snackbarColor, setSnackbarColor] = useState("neutral");
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });
  const [nameError, SetNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [passwordConditions, setPasswordConditions] = useState({
    minLength: false,
    upperCase: false,
    lowerCase: false,
    digit: false,
    symbol: false,
  });
  const [isSubmitAttempted, setIsSubmitAttempted] = useState(false);
  const navigate = useNavigate();
  //here we are seting role of the user who is signing up
  const [role, setRole] = useState("");

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
    const inputPassword = event.target.value;
    setPassword(inputPassword);

    setPasswordConditions({
      minLength: inputPassword.length >= 8,
      upperCase: /[A-Z]/.test(inputPassword),
      lowerCase: /[a-z]/.test(inputPassword),
      digit: /[0-9]/.test(inputPassword),
      symbol: /[@#$%^&*()_+[\]{}|~]/.test(inputPassword),
    });

    if (isSubmitAttempted) {
      const strength = calculatePasswordStrength(inputPassword);
      if (strength < 4) {
        setPasswordError(
          "Password not strong enough. Ensure it meets all criteria for a very strong password."
        );
      } else {
        setPasswordError("");
      }

      if (confirmPassword && confirmPassword !== inputPassword) {
        setConfirmPasswordError("Passwords do not match.");
      } else {
        setConfirmPasswordError("");
      }
    }
  };

  const handleConfirmPasswordChange = (event) => {
    const inputConfirmPassword = event.target.value;
    setConfirmPassword(inputConfirmPassword);
    if (isSubmitAttempted) {
      if (!inputConfirmPassword) {
        setConfirmPasswordError("Confirm Password field is empty.");
      } else if (inputConfirmPassword !== password) {
        setConfirmPasswordError("Passwords do not match.");
      } else {
        setConfirmPasswordError("");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // const handleVerifyEmailPopupClose = () => {
  //   setIsVerifyEmailPopupVisible(false);
  // };

  const passwordStrength = calculatePasswordStrength(password);
  const progressValue = (passwordStrength / 4) * 100;
  const getProgressColor = (strength) => {
    switch (strength) {
      case 4:
        return "#4CAF50"; // Very Strong (Green)
      case 3:
        return "#4CAF50";
      case 2:
        return "#0000FF";
      default:
        return "#F44336"; // Weak (Red)
    }
  };

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    if (isSubmitAttempted) {
      if (!newName) {
        setFormErrors((prev) => ({ ...prev, name: "Name field is empty." }));
      } else if (!/^[a-zA-Z\s,.'-]+$/.test(newName)) {
        setFormErrors((prev) => ({
          ...prev,
          name: "Invalid name. Only alphabets are allowed.",
        }));
      } else {
        setFormErrors((prev) => ({ ...prev, name: false }));
      }
    }
  };

  console.log("role", role);
  const handleSignUp = async () => {
    setIsSubmitAttempted(true);
    setLoading(true);

    let hasError = false;

    const evaluatedPasswordStrength = calculatePasswordStrength(password);

    const newFormErrors = {
      name: !name,
      email: !email || !emailRegex.test(email),
      password: !password || evaluatedPasswordStrength < 4,
      confirmPassword: !confirmPassword || confirmPassword !== password,
      role: !role,
    };

    if (newFormErrors.password) {
      setPasswordError("Password is too weak. Ensure it meets all criteria.");
      hasError = true;
    }

    if (!name) {
      setFormErrors("Name field is empty.");
      hasError = true;
    } else {
      setFormErrors("");
    }

    if (!email) {
      setEmailError("Email field is empty.");
      hasError = true;
    } else if (!emailRegex.test(email)) {
      setEmailError("Email format incorrect.");
      hasError = true;
    } else {
      setEmailError("");
    }

    if (!role) {
      setSnackbarMessage("Role must be defined.");
      setSnackbarVariant("filled");
      setSnackbarColor("error");
      setSnackbarOpen(true);
      hasError = true;
      setLoading(false);
      return;
    }

    if (!password) {
      setPasswordError("Password field is empty.");
      hasError = true;
    } else {
      setPasswordError("");
    }

    if (!confirmPassword) {
      setConfirmPasswordError("Confirm Password field is empty.");
      hasError = true;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match.");
      hasError = true;
    } else {
      setConfirmPasswordError("");
    }

    setFormErrors(newFormErrors);
    if (Object.values(newFormErrors).some((error) => error) || hasError) {
      setLoading(false);
      return;
    }

    if (
      emailError ||
      passwordError ||
      confirmPasswordError ||
      formErrors.name
    ) {
      // Prevent form submission and show an error message.
      setSnackbarMessage("Please correct the errors before submitting.");
      setSnackbarVariant("filled");
      setSnackbarColor("error");
      setSnackbarOpen(true);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/simple-signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          displayName: name,
          email,
          password,
          role,
        }),
      });
      const data = await response.json();
      if (response.status === 201) {
        setSnackbarMessage("Signup successful, Login to continue");
        setSnackbarVariant("soft");
        setSnackbarColor("success");
        setSnackbarOpen(true);
        setTimeout(() => {
          // login(data.response);
          navigate("/login");
        }, 2000);
        // setIsVerifyEmailPopupVisible(true);
      } else {
        setSnackbarMessage(
          data.message || "An error occurred. Please try again."
        );
        setSnackbarVariant("filled");
        setSnackbarColor("error");
        setSnackbarOpen(true);
      }
    } catch (error) {
      setSnackbarMessage("An error occurred. Please try again.");
      setSnackbarVariant("filled");
      setSnackbarColor("error");
      setSnackbarOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <OuterFlexDiv>
      <SnackbarAlert
        open={snackbarOpen}
        setOpen={setSnackbarOpen}
        message={snackbarMessage}
        variant={snackbarVariant}
        color={snackbarColor}
      />
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
          width: isLaptop ? "50%" : "40%",
        }}
      >
        <Card>
          <MainText>
            Sign up to{" "}
            <span style={{ color: "var(--clr-orange)" }}>ScholarNET</span>
          </MainText>
          <FlexDiv
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              textAlign: "left",
              gap: isMobile ? "24px" : "24px",
              position: "relative",
            }}
          >
            <Inputs
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
            />
            {formErrors.name && <InputError>{formErrors.name}</InputError>}
            {nameError && <InputError>{nameError}</InputError>}

            <Inputs
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <InputError>{emailError}</InputError>}
            <InputWrapper>
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
            {passwordError && <InputError>{passwordError}</InputError>}
            <InputWrapper>
              <Inputs
                placeholder="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              <ToggleText
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </ToggleText>
            </InputWrapper>
            {confirmPasswordError && (
              <InputError>{confirmPasswordError}</InputError>
            )}
          </FlexDiv>

          {/* Selecting role of user */}
          <RRBFormControl
            sx={{ ml: 1, mr: 1, minWidth: 120, verticalAlign: "middle" }}
          >
            <RRBSelect
              value={role}
              onChange={(e) => setRole(e.target.value)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              renderValue={(selected) => {
                if (!selected) {
                  return <RRBMenuItem>Select Role</RRBMenuItem>;
                }
                return <RRBMenuItem>{selected}</RRBMenuItem>;
              }}
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
                getContentAnchorEl: null,
              }}
            >
              {/* <RRBMenuItem value="">
                <em>None</em>
              </RRBMenuItem> */}
              <RRBMenuItem value="Student">Student</RRBMenuItem>
              <RRBMenuItem value="Instructor">Instructor</RRBMenuItem>
              {/* <RRBMenuItem value="Admin">Admin</RRBMenuItem> */}
            </RRBSelect>
          </RRBFormControl>

          <FlexDiv
            style={{
              alignItems: "flex-start",
              justifyContent: "space-between",
              marginTop: "15px",
              width: "390px",
            }}
          >
            <ConstraintsText>
              {/* <ul
                style={{
                  padding: "0",
                  marginLeft: "20px",
                }}
              >
                <li>8 characters minimum</li>
                <li>Upper & lower case letters</li>
                <li>A digit & a symbol</li>
              </ul> */}

              <ul style={{ padding: "0", marginLeft: "20px" }}>
                <li
                  style={{
                    color: passwordConditions.minLength ? "green" : "inherit",
                  }}
                >
                  8 characters minimum
                </li>
                <li>
                  <span
                    style={{
                      color: passwordConditions.upperCase ? "green" : "inherit",
                    }}
                  >
                    Upper case letter
                  </span>
                  <br />
                  <span
                    style={{
                      color: passwordConditions.lowerCase ? "green" : "inherit",
                    }}
                  >
                    {" "}
                    lower case letter
                  </span>
                </li>
                <li>
                  <span
                    style={{
                      color: passwordConditions.digit ? "green" : "inherit",
                    }}
                  >
                    A digit
                  </span>{" "}
                  &amp;
                  <span
                    style={{
                      color: passwordConditions.symbol ? "green" : "inherit",
                    }}
                  >
                    {" "}
                    a symbol
                  </span>
                </li>
              </ul>
            </ConstraintsText>

            <TextProgressContainer style={{ marginTop: "15px" }}>
              <WeakText style={{ color: getProgressColor(passwordStrength) }}>
                {passwordStrength === 4
                  ? "Very Strong"
                  : passwordStrength === 3
                  ? "Strong"
                  : passwordStrength === 2
                  ? "Medium"
                  : "Weak"}
              </WeakText>
              <LinearProgress
                variant="determinate"
                value={progressValue}
                sx={{
                  width: "116px",
                  borderRadius: "5px",
                  height: "10px",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: getProgressColor(passwordStrength),
                  },
                  "@media (max-width: 500px)": {
                    width: "75px",
                  },
                  // "@media (max-width: 1440px)": {
                  //   width: "75px",
                  // },
                }}
              />
            </TextProgressContainer>
          </FlexDiv>

          {/* <FlexDiv
            style={{
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <input
              type={"checkbox"}
              name="agree"
              value={"agree"}
              style={{ marginTop: "5px" }}
            />
            <TermsCondText>
              By clicking Sign Up, you are agreeing to the{" "}
              <span>ScholarNet T&Cs</span> and <span>Privacy Policy</span>
            </TermsCondText>
          </FlexDiv> */}
          <Btn onClick={handleSignUp}>
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
                  <ContinueText>Sign up</ContinueText>
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
            <HaveAnAccount>Already have an account?</HaveAnAccount>
            <Btn
              onClick={() => {
                navigate("/login");
              }}
            >
              <SignUpText>Login</SignUpText>
            </Btn>
          </FlexDiv>
        </Card>
      </FlexDiv>
      {/* {isVerifyEmailPopupVisible && (
        <VerifyEmailPopUpDiv>
          <VerifyEmailPopup onClose={handleVerifyEmailPopupClose} />
        </VerifyEmailPopUpDiv>
      )} */}
    </OuterFlexDiv>
  );
};

export default SignupCard;
