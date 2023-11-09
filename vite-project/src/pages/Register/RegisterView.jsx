import React, { useState } from "react";
import {
  StyledForm,
  StyledInput,
  StyledButton,
  LoginContainer,
  LoginContainerWrapper,
  FormTitle,
  ErrorText,
  SuccessText
} from "./RegisterStyles";
import { postUser } from "../../api/FetchUsers";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      fname, lname, phone,
      address, email, password
    };

    postUser(newUser, 
      () => {
        setSuccessMessage("Account created successfully! Redirecting...");
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      },
      (error) => {
        setError(error.message); // Set the error state
      }
    );
  };

  const handleInputChange = (setter) => (event) => {
    if (error) {
      setError(""); // Clear the error when the user starts typing
    }
    setter(event.target.value); // Use the setter for the specific state
  };

  return (
    <LoginContainer>
      <LoginContainerWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <FormTitle>Create your Account</FormTitle>
          <StyledInput
            label="First name"
            type="firstname"
            variant="outlined"
            fullWidth
            required
            value={fname}
            onChange={handleInputChange(setFirstName)}
          />
          <StyledInput
            label="Last name"
            type="lastname"
            variant="outlined"
            fullWidth
            required
            value={lname}
            onChange={handleInputChange(setLastName)}
          />
          <StyledInput
            label="Phone"
            type="phone"
            variant="outlined"
            fullWidth
            required
            value={phone}
            onChange={handleInputChange(setPhone)}
          />
          <StyledInput
            label="Address"
            type="address"
            variant="outlined"
            fullWidth
            required
            value={address}
            onChange={handleInputChange(setAddress)}
          />
          <StyledInput
            label="Email"
            type="email"
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
          {error && <ErrorText>{error}</ErrorText>}
          {successMessage && <SuccessText>{successMessage}</SuccessText>}
          <StyledButton type="submit" fullWidth>
            Register
          </StyledButton>
        </StyledForm>
      </LoginContainerWrapper>
    </LoginContainer>
  );
}
