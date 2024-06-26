import React, { useEffect, useState } from "react";
import {
  StyledForm,
  StyledInput,
  StyledButton,
  RegisterContainer,
  RegisterContainerWrapper,
  FormTitle,
  ErrorText,
  SuccessText,
} from "./RegisterStyles";
import { postUser } from "../../api/FetchPatients";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      firstname,
      lastname,
      phone,
      address,
      email,
      password,
    };

    postUser(
      newUser,
      () => {
        setSuccessMessage("Account created successfully! Redirecting...");
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      },
      (error) => {
        setError(error.message);
      }
    );
  };

  const handleInputChange = (setter) => (event) => {
    if (error) {
      setError("");
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
      <RegisterContainer>
        <div
          style={{ fontSize: "100px", textAlign: "center", marginTop: "200px" }}
        >
          You are already logged in. Please go to your <a href="/">dashboard</a>{" "}
          to access your account.
        </div>
      </RegisterContainer>
    );
  }
  return (
    <RegisterContainer>
      <RegisterContainerWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <FormTitle>Create your Account</FormTitle>
          <StyledInput
            label="First name"
            type="firstname"
            variant="outlined"
            fullWidth
            required
            value={firstname}
            onChange={handleInputChange(setFirstName)}
          />
          <StyledInput
            label="Last name"
            type="lastname"
            variant="outlined"
            fullWidth
            required
            value={lastname}
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
      </RegisterContainerWrapper>
    </RegisterContainer>
  );
}