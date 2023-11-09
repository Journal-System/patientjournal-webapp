import React, { useState } from "react";
import {
  StyledForm,
  StyledInput,
  StyledButton,
  LoginContainer,
  LoginContainerWrapper,
  FormTitle,
  FormFooter,
  InfoText,
} from "./LoginStyles";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the login logic here
    console.log("Login with:", email, password);
    
  };

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
          <StyledInput
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <StyledInput
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
