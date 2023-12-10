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

  return (
    <ObservationContainer>
      {isLoading && <div>Loading...</div>}

      {isError && (
        <div>
          Error: {error.message}
          {/* You can add additional error handling or UI here */}
        </div>
      )}

      {!isLoading && !isError && (
        <>
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
        </>
      )}
    </ObservationContainer>
  );
}