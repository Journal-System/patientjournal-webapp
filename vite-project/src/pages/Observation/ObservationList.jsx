import React from "react";
import {
  ObservationContainer,
  ObservationWrapper,
  SelectedUser,
} from "./ObservationListStyles";
import { Typography } from "@mui/material";
import { useDoctorLogic } from "../UserSelection/UserSelectionLogic";

export function ObservationList() {
  const { isLoading, patientData, isError, error } = useDoctorLogic();

  const selectPatient = (id) => {
    localStorage.setItem("selectedUserId", id);
    window.location.href = "/ObservationForm";
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ObservationContainer>
      <Typography variant="h4">Start an Observation</Typography>
      <Typography variant="subtitle1" style={{ color: "red" }}>
        Click on a patient to do an observation.
      </Typography>
      <div style={{ display: "flex", paddingTop: "40px" }}>
        <ObservationWrapper>
          <Typography variant="h4">All patients</Typography>

          {patientData.length > 0 ? (
            patientData.map((patient, index) => (
              <div
                key={index}
                onClick={() => selectPatient(patient.id)}
                style={{
                  cursor: "pointer",
                  padding: "10px",
                  borderBottom: "1px solid #ccc",
                }}
              >
                <SelectedUser>{patient.fullname}</SelectedUser>
              </div>
            ))
          ) : (
            <div>No patient found</div>
          )}
        </ObservationWrapper>
      </div>
    </ObservationContainer>
  );
}