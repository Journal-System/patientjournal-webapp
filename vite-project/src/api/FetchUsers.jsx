import axios from "axios";

export function authenticate(email, password) {
  // Construct the query parameters
  const queryParams = new URLSearchParams({ email, password });

  return fetch(
    `https://user-service.app.cloud.cbh.kth.se/authentication/login?${queryParams.toString()}`,
    {
      method: "POST",
    }
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
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