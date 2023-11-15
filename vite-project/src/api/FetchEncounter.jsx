import axios from "axios";

export async function getAllEncountersForPatient(id) {
  try {
    const options = {
      method: "GET",
      url: `http://localhost:8080/encounter/getAll/${id}`,
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
