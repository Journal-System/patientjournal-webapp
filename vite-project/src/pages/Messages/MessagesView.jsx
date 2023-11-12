import React, { useState, useEffect } from "react";
import {
  DoctorWrapper,
  MessageContainer,
  PatientWrapper,
  SelectedUser,
  StaffWrapper,
} from "./MessagesStyles";
import { Typography } from "@mui/material";
import { useDoctorLogic } from "./MessagesLogic";

export function Messages() {
  const [selected, setSelected] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const { isLoading, doctorData, staffData, patientData, isError, error } =
    useDoctorLogic();

  const selectUser = (user) => {
    setSelected(user);
    // Add logic to handle the selected doctor/staff, e.g., start a conversation
  };

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    if (userRole === "PATIENT") {
      setIsAuthorized(true);
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (!isAuthorized) {
    return (
      <MessageContainer>
        <Typography variant="h4">Start a Message</Typography>
        <Typography variant="subtitle1" style={{ color: "red" }}>
          Click on a patient member to begin a conversation.
        </Typography>
        <div style={{ display: "flex", paddingTop: "40px" }}>
          <PatientWrapper>
            <Typography variant="h4">All patients</Typography>

            {patientData.length > 0 ? (
              patientData.map((patient, index) => (
                <div
                  key={index}
                  onClick={() => selectUser(patient)}
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
          </PatientWrapper>
        </div>
      </MessageContainer>
    );
  }

  return (
    <MessageContainer>
      <div
        style={{
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "10px",
        }}
      >
        <Typography variant="h4">Start a Message</Typography>
        <Typography variant="subtitle1" style={{ color: "red" }}>
          Click on a doctor or staff member to begin a conversation.
        </Typography>
        <div style={{ display: "flex", paddingTop: "40px" }}>
          <DoctorWrapper>
            <Typography variant="h4">All doctors</Typography>

            {doctorData.length > 0 ? (
              doctorData.map((doctor, index) => (
                <div
                  key={index}
                  onClick={() => selectUser(doctor)}
                  style={{
                    cursor: "pointer",
                    padding: "10px",
                    borderBottom: "1px solid #ccc",
                  }}
                >
                  <SelectedUser>{doctor.fullname}</SelectedUser>
                </div>
              ))
            ) : (
              <div>No doctor found</div>
            )}
          </DoctorWrapper>

          <StaffWrapper>
            <Typography variant="h4">All staffs</Typography>

            {staffData.length > 0 ? (
              staffData.map((staff, index) => (
                <div
                  key={index}
                  onClick={() => selectUser(staff)}
                  style={{
                    cursor: "pointer",
                    padding: "10px",
                    borderBottom: "1px solid #ccc",
                  }}
                >
                  <SelectedUser>{staff.fullname}</SelectedUser>
                </div>
              ))
            ) : (
              <div>No staff found</div>
            )}
          </StaffWrapper>
        </div>
      </div>
    </MessageContainer>
  );
}
