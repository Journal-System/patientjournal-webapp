import React, { useEffect, useState } from "react";
import {
  StyledForm,
  StyledInput,
  StyledButton,
  LoginContainer,
  LoginContainerWrapper,
  FormTitle,
  FormFooter,
  InfoText,
  SuccessText,
} from "./LoginStyles";
import { authenticate } from "../../api/FetchUsers";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");

    authenticate(email, password)
      .then((data) => {
        console.log("Login successful with data:", data);
        localStorage.setItem("userEmail", email);
        setSuccessMessage("Login successful! Redirecting...");
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      })
      .catch((error) => {
        console.error("Login error: ", error.message);
        setErrorMessage("Email or password is wrong");
      });
    console.log("Login attempt with: " + email, password);
  };

  const handleInputChange = (setter) => (event) => {
    if (errorMessage) {
      setErrorMessage("");
    }
    setter(event.target.value);
  };

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      setIsLoggedIn(true);
    }
  }, []);

  if (isLoggedIn) {
    return (
      <LoginContainer>
        <div
          style={{ fontSize: "100px", textAlign: "center", marginTop: "200px" }}
        >
          You are already logged in. Please go to your <a href="/">dashboard</a>{" "}
          to access your account.
        </div>
      </LoginContainer>
    );
  }
  return (
    <LoginContainer>
      <InfoText>
        Access your medical records, appointment history, and personal health
        journal. Your privacy is paramount to us, and all information is
        securely stored and managed.
      </InfoText>
      <LoginContainerWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <FormTitle>Login to Your Account</FormTitle>
          {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
          <StyledInput
            label="Email"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={handleInputChange(setEmail)}
          />
          <StyledInput
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={password}
            onChange={handleInputChange(setPassword)}
          />
          {successMessage && <SuccessText>{successMessage}</SuccessText>}
          <StyledButton type="submit" fullWidth>
            Login
          </StyledButton>
          <FormFooter>
            Don't have an account? <a href="/Register">Register here</a>
          </FormFooter>
        </StyledForm>
      </LoginContainerWrapper>
    </LoginContainer>
  );
}
