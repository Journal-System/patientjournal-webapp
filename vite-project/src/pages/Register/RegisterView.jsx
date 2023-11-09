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
} from "./RegisterStyles";
import { postUser } from "../../api/FetchUsers";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      address: address,
      email: email,
      password: password,
    };

    console.log("Firstname: " + firstname);
    console.log("Lastname: " + lastname);
    console.log("Phone: " + phone);
    console.log("Address: " + address);
    console.log("Email: " + email);
    console.log("Password: " + password);

    postUser(newUser)
      .then(() => {
        // Handle success, maybe clear form or show a success message
        console.log("User registered successfully");
      })
      .catch((error) => {
        // Handle errors, maybe show an error message
        console.error("Failed to register user:", error);
      });
  };

  return (
    <LoginContainer>
      <InfoText>Another text</InfoText>
      <LoginContainerWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <FormTitle>Create your Account</FormTitle>
          <StyledInput
            label="First name"
            type="firstname"
            variant="outlined"
            fullWidth
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <StyledInput
            label="Last name"
            type="lastname"
            variant="outlined"
            fullWidth
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
          <StyledInput
            label="Phone"
            type="phone"
            variant="outlined"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <StyledInput
            label="Address"
            type="address"
            variant="outlined"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <StyledInput
            label="Email"
            type="email"
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
            Register
          </StyledButton>
        </StyledForm>
      </LoginContainerWrapper>
    </LoginContainer>
  );
}
