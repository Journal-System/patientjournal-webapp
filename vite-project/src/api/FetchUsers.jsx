import axios from "axios";

export async function getAllUsers() {
  try {
    const options = {
      method: "GET",
      url: `http://localhost:8080/patient/getAllPatients`,
    };

    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log("Could not find any user");
      throw new Error("Could not find any user");
    } else {
      console.error(error.toJSON ? error.toJSON() : error);
    }
  }
}

export function postUser(newUser, onSuccess, onError) {
  fetch("http://localhost:8080/patient/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("This email is already being used");
      }
      return response.json();
    })
    .then((data) => {
      if (onSuccess) {
        onSuccess(data);
      }
    })
    .catch((error) => {
      if (onError) {
        onError(error);
      }
    });
}

export function authenticate(email, password) {
  // Construct the query parameters
  const queryParams = new URLSearchParams({ email, password });

  return fetch(
    `http://localhost:8080/authentication/login?${queryParams.toString()}`,
    {
      method: "POST",
    }
  )
    .then((response) => {
      if (response.ok) {
        return response.json(); // or response.text() if the response is not in JSON format
      } else if (response.status === 401) {
        throw new Error("Unauthorized");
      } else {
        throw new Error("An error occurred");
      }
    })
    .catch((error) => {
      throw error;
    });
}