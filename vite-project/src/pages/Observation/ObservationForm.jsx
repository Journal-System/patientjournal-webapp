import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { addOneObservation } from "../../api/FetchObservation";
import {
  ObservationContainer,
  ObservationWrapper,
} from "./ObservationListStyles";
import {
  StyledButton,
  StyledForm,
  StyledInput,
  SuccessText,
} from "../Login/LoginStyles";

export function ObservationForm() {
  const [observation, setObservation] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const selectedUserId = localStorage.getItem("selectedUserId");
    const userId = localStorage.getItem("userId");
    addOneObservation(observation, selectedUserId, userId)
      .then(() => {
        setSuccessMessage("Observation submitted successfully! Redirecting...");
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      })
      .catch((error) => {
        console.error("Error submitting observation:", error.message);
      });
  };

  return (
    <ObservationContainer>
      <ObservationWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <Typography variant="h6">Add Observation</Typography>
          <StyledInput
            label="Observation"
            variant="outlined"
            value={observation}
            onChange={(e) => setObservation(e.target.value)}
            required
          />
          {successMessage && <SuccessText>{successMessage}</SuccessText>}
          <StyledButton type="submit" variant="contained" color="primary">
            Submit
          </StyledButton>
        </StyledForm>
      </ObservationWrapper>
    </ObservationContainer>
  );
}