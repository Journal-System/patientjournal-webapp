import React, { useEffect, useState } from "react";
import { MessagesContainer, MessagesWrapper } from "./MessageComposeStyles";
import { Typography, TextField, Button } from "@mui/material";
import {
  getMessagesBySenderAndReceiver,
  getMessagesByReceiverAndSender,
  addMessage,
} from "../../api/FetchMessages";

export function Messages() {
  const sentToEmail = localStorage.getItem("selectedUserEmail");
  const sentToId = localStorage.getItem("selectedUserId");
  const senderEmail = localStorage.getItem("userEmail");
  const senderId = localStorage.getItem("userId");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [allMessages, setAllMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      setIsLoggedIn(true);

      // Fetch messages for sender and receiver
      Promise.all([
        getMessagesBySenderAndReceiver(senderId, sentToId),
        getMessagesByReceiverAndSender(sentToId, senderId),
      ])
        .then(([senderMessages, receiverMessages]) => {
          // Ensure both senderMessages and receiverMessages are arrays

          const combinedMessages = [
            ...(Array.isArray(senderMessages) ? senderMessages : []),
            ...(Array.isArray(receiverMessages) ? receiverMessages : []),
          ];

          const sortedMessages = combinedMessages.sort(
            (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
          );
          setAllMessages(sortedMessages);
        })
        .catch((error) => {
          if (error.message === "No messages found") {
            console.error("No messages found");
          } else {
            console.error("Error fetching messages d:", error.message);
          }
        });
    }
  }, [senderEmail, sentToEmail]);

  const handleSendMessage = () => {
    const newMessageObject = {
      receiverID: sentToId,
      senderID: senderId,
      content: newMessage,
    };

    addMessage(newMessageObject);

    setAllMessages([...allMessages, newMessageObject]);
    setNewMessage("");
  };

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
        <ul>
          {allMessages.map((message, index) => {
            return (
              <li key={index}>
                {message.senderID == senderId ? (
                  <span style={{ marginLeft: "1000px" }}>
                    {message.content}
                  </span>
                ) : (
                  <span style={{ marginRight: "1000px" }}>
                    {message.content}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
        <div style={{ marginTop: "20px" }}>
          <TextField
            label="Type your message"
            variant="outlined"
            multiline
            rows={3}
            fullWidth
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendMessage}
          >
            Send
          </Button>
        </div>
      </MessagesWrapper>
    </MessagesContainer>
  );
}
