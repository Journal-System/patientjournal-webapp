export function getMessagesBySenderAndReceiver(senderId, receiverId) {
  const url = `https://message-service.app.cloud.cbh.kth.se/message/getMessagesBySenderAndReceiver?senderId=${senderId}&receiverId=${receiverId}`;

  return fetch(url, {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 404) {
        return [];
      } else {
        throw new Error("An error occurred");
      }
    })
    .catch((error) => {
      console.error("An error occurred", error);
    });
}

export function getMessagesByReceiverAndSender(receiverId, senderId) {
  const url = `https://message-service.app.cloud.cbh.kth.se/message/getMessagesBySenderAndReceiver?senderId=${receiverId}&receiverId=${senderId}`;

  return fetch(url, {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 404) {
        return [];
      } else {
        throw new Error("An error occurred");
      }
    })
    .catch((error) => {
      console.error("An error occurred", error);
    });
}

export function addMessage(newMessage) {
  fetch("https://message-service.app.cloud.cbh.kth.se/message/addMessage", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newMessage),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("This message could not be sent");
    }
    return response.json();
  });
}