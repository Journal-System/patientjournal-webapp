import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { ProfileContainer, ProfileWrapper } from "./ProfileStyles";
import { useProfileLogic } from "./ProfileLogic";
import { useParams } from "react-router-dom";

export function Profile() {
  const { index } = useParams();
  const userRole = localStorage.getItem("userRole");
  let realUserId = localStorage.getItem("userId");
  console.log("This index in profile: " + index);

  if (userRole === "PATIENT") {
    realUserId = index;
  } else if (index != null) {
    console.log("This index: " + index)
    realUserId = index;
  }

  const {
    isPatientLoading,
    patientData,
    isPatientError,
    patientError,
    isConditionLoading,
    isConditionError,
    conditionError,
    conditionData,
    isEncounterLoading,
    isEncounterError,
    encounterError,
    encounterData,
    isObservationLoading,
    isObservationError,
    observationError,
    observationData,
  } = useProfileLogic(realUserId);

  if (
    isPatientLoading ||
    isConditionLoading ||
    isEncounterLoading ||
    isObservationLoading
  ) {
    return <div>Loading...</div>;
  }

  if (isPatientError && patientError) {
    return <div>Error: {patientError.message}</div>;
  }

  if (isConditionError && conditionError) {
    return <div>Error: {conditionError.message}</div>;
  }

  if (isEncounterError && encounterError) {
    return <div>Error: {encounterError.message}</div>;
  }

  if (isObservationError && observationError) {
    return <div>Error: {observationError.message}</div>;
  }

  return (
    <ProfileContainer>
      <Typography variant="h4">Name: {patientData.fullname}</Typography>
      <Typography variant="body1">Phone: {patientData.phone}</Typography>
      <Typography variant="body1">Email: {patientData.email}</Typography>
      <Typography variant="body1">Address: {patientData.address}</Typography>
      <Typography variant="body1">Type: {patientData.userRole}</Typography>
      <div
        style={{
          display: "flex",
          paddingTop: "10px",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5" style={{ paddingLeft: "190px" }}>
          Conditions
        </Typography>
        <Typography variant="h5">Encounter</Typography>
        <Typography variant="h5" style={{ paddingRight: "130px" }}>
          Observation
        </Typography>
      </div>
      <div style={{ display: "flex", paddingTop: "40px" }}>
        <ProfileWrapper>
          {conditionData.length > 0 ? (
            conditionData.map((condition, index) => (
              <div
                key={index}
                style={{
                  cursor: "pointer",
                  padding: "10px",
                  borderBottom: "1px solid #ccc",
                }}
              >
                <Typography variant="body1" style={{ color: "red" }}>
                  Condition
                </Typography>
                <Typography variant="body1">{condition.condition}</Typography>
                <Typography variant="body1" style={{ color: "red" }}>
                  Description
                </Typography>
                <Typography variant="body1">{condition.description}</Typography>
              </div>
            ))
          ) : (
            <Typography variant="body1">
              No conditions for this patient
            </Typography>
          )}
        </ProfileWrapper>
        <ProfileWrapper>
          {encounterData.length > 0 ? (
            encounterData.map((encounter, index) => (
              <div
                key={index}
                style={{
                  cursor: "pointer",
                  padding: "10px",
                  borderBottom: "1px solid #ccc",
                }}
              >
                <Typography variant="body1" style={{ color: "red" }}>
                  Reason
                </Typography>
                <Typography variant="body1">{encounter.reason}</Typography>
                <Typography variant="body1" style={{ color: "red" }}>
                  Time
                </Typography>
                <Typography variant="body1">{encounter.timestamp}</Typography>
                <Typography variant="body1" style={{ color: "red" }}>
                  Doctor
                </Typography>
                <Typography variant="body1">{encounter.doctorName}</Typography>
                <Typography variant="body1" style={{ color: "red" }}>
                  Observation
                </Typography>
                <Typography variant="body1">{encounter.observation}</Typography>
              </div>
            ))
          ) : (
            <Typography variant="body1">
              No encounters for this patient
            </Typography>
          )}
        </ProfileWrapper>
        <ProfileWrapper>
        {observationData.length > 0 ? (
            observationData.map((observation, index) => (
              <div
                key={index}
                style={{
                  cursor: "pointer",
                  padding: "10px",
                  borderBottom: "1px solid #ccc",
                }}
              >
                <Typography variant="body1" style={{ color: "red" }}>
                  Observation
                </Typography>
                <Typography variant="body1">{observation.observation}</Typography>
                <Typography variant="body1" style={{ color: "red" }}>
                  Time
                </Typography>
                <Typography variant="body1">{observation.timestamp}</Typography>
                <Typography variant="body1" style={{ color: "red" }}>
                  Doctor
                </Typography>
                <Typography variant="body1">{observation.doctorOrStaffName}</Typography>
              </div>
            ))
          ) : (
            <Typography variant="body1">
              No observation for this patient
            </Typography>
          )}
        </ProfileWrapper>
      </div>
    </ProfileContainer>
  );
}
