import React, { useState, useEffect } from "react";
import {
  DoctorWrapper,
  MessageContainer,
  PatientWrapper,
  SelectedUser,
  StaffWrapper,
} from "./UserSelectionStyles";
import { Typography } from "@mui/material";
import { useDoctorLogic } from "./UserSelectionLogic";

export function UserSelection() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const {
    isLoadingDoctors,
    isLoadingPatients,
    isLoadingStaffs,
    doctorData,
    staffData,
    patientData,
    isErrorDoctors,
    isErrorPatients,
    isErrorStaffs,
    errorDoctors,
    errorPatients,
    errorStaffs,
  } = useDoctorLogic(localStorage.getItem("access_token"));

  const selectUser = (email, id) => {
    localStorage.setItem("selectedUserEmail", email);
    localStorage.setItem("selectedUserId", id);

    window.location.href = "/Messages/";
  };

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    if (userRole === "PATIENT") {
      setIsAuthorized(true);
    }
  }, []);

  if (!isAuthorized) {
    return (
      <MessageContainer>
        {isLoadingPatients && <div>Loading...</div>}

        {isErrorPatients && (
          <div>Error: {errorPatients?.message || "Something went wrong"}</div>
        )}

        {!isLoadingPatients && (
          <>
            <Typography variant="h4">Start a Message</Typography>
            <Typography variant="subtitle1" style={{ color: "red" }}>
              Click on a patient member to begin a conversation.
            </Typography>
            <div style={{ display: "flex", paddingTop: "40px" }}>
              <PatientWrapper>
                <Typography variant="h4">All patients</Typography>

                {patientData?.length > 0 ? (
                  patientData.map((patient, index) => (
                    <div
                      key={index}
                      onClick={() => selectUser(patient.email, patient.id)}
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
          </>
        )}
      </MessageContainer>
    );
  }

  return (
    <MessageContainer>
      {isLoadingDoctors && isLoadingStaffs && <div>Loading...</div>}

      {(isErrorDoctors || isErrorStaffs) && (
        <div>
          Error:{" "}
          {errorDoctors?.message ||
            errorStaffs?.message ||
            "Something went wrong"}
        </div>
      )}

      {!isLoadingDoctors && !isLoadingStaffs && (
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

              {doctorData?.length > 0 ? (
                doctorData.map((doctor, index) => (
                  <div
                    key={index}
                    onClick={() => selectUser(doctor.email, doctor.id)}
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

              {staffData?.length > 0 ? (
                staffData.map((staff, index) => (
                  <div
                    key={index}
                    onClick={() => selectUser(staff.email, staff.id)}
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
      )}
    </MessageContainer>
  );
}
