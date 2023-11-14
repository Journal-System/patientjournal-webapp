export function getMessagesBySenderAndReceiver(senderId, receiverId) {
  const url = `http://localhost:8080/message/getMessagesBySenderAndReceiver?senderId=${senderId}&receiverId=${receiverId}`;

  return fetch(url, {
    method: "GET",
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 404) {
        return [];
      } else {
        throw new Error("An error occurred");
      }
    })
    .catch(error => {
      console.error("Error 1", error);
    });
}

export function getMessagesByReceiverAndSender(receiverId, senderId) {
  const url = `http://localhost:8080/message/getMessagesBySenderAndReceiver?senderId=${receiverId}&receiverId=${senderId}`;

  return fetch(url, {
    method: "GET",
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 404) {
        return [];
      } else {
        throw new Error("An error occurred");
      }
    })
    .catch(error => {
      console.error("Error 2", error);
    });
}


export function addMessage(newMessage) {
  fetch("http://localhost:8080/message/addMessage", {
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