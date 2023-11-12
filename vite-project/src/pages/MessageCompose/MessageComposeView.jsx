import React, { useEffect, useState } from "react";
import { MessagesContainer, MessagesWrapper } from "./MessageComposeStyles";
import { Typography } from "@mui/material";

export function Messages() {
  const sentToEmail = localStorage.getItem("selectedUserEmail");
  const sentToId = localStorage.getItem("selectedUserId");
  const senderEmail = localStorage.getItem("userEmail");
  const senderId = localStorage.getItem("userId");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      setIsLoggedIn(true);
    }
  }, []);

  if (!isLoggedIn) {
    return (
      <MessagesContainer>
        <div
          style={{ fontSize: "100px", textAlign: "center", marginTop: "200px" }}
        >
          Access denied. You are currently logged out.
        </div>
      </MessagesContainer>
    );
  }

  return (
    <MessagesContainer>
      <Typography variant="h4" style={{ padding: "20px" }}>
        Messages
      </Typography>
      <MessagesWrapper>
        <p>Sending To email: {sentToEmail}</p>
        <p>Sending To id: {sentToId}</p>
        <p>Sender email: {senderEmail}</p>
        <p>Sender id: {senderId} </p>
      </MessagesWrapper>
    </MessagesContainer>
  );
}
