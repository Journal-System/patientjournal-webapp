import axios from "axios";

export async function getAllObservationsForPatient(id) {
  try {
    const options = {
      method: "GET",
      url: `https://eoc-service.app.cloud.cbh.kth.se/observation/getAll/${id}`,
    };

    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log("Could not find any doctor");
      throw new Error("Could not find any doctor");
    } else {
      console.error(error.toJSON ? error.toJSON() : error);
    }
  }
}

export function addOneObservation(observation, patientId, staffOrDoctorId) {
  const queryParams = new URLSearchParams({
    observation: observation,
    patientId: patientId.toString(),
    staffOrDoctorId: staffOrDoctorId.toString(),
  });

  return fetch(`https://eoc-service.app.cloud.cbh.kth.se/observation/add?${queryParams.toString()}`, {
    method: "POST",
  })
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
