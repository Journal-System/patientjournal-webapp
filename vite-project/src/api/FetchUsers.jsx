import axios from "axios";

export async function getUser(id) {
  try {
    const options = {
      method: "GET",
      url: `http://localhost:8080/user/get/${id}`,
    };

    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log("Could not find this user");
      throw new Error("Could not find this user");
    } else {
      console.error(error.toJSON ? error.toJSON() : error);
    }
  }
}

export async function getAllUsers() {
  try {
    const options = {
      method: "GET",
      url: `http://localhost:8080/user/getAllUsers`,
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
    fetch("http://localhost:8080/user/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("This email is already being used");
      }
      return response.json();
    })
    .then(data => {
      if (onSuccess) {
        onSuccess(data);
      }
    })
    .catch(error => {
      if (onError) {
        onError(error);
      }
    });
  }

  
  