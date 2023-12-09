import axios from "axios";

export async function getAllPatients() {
  try {
    const options = {
      method: "GET",
      url: `https://user-service.app.cloud.cbh.kth.se/patient/getAllPatients`,
    };

    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log("Could not find any patient");
      throw new Error("Could not find any patient");
    } else {
      console.error(error.toJSON ? error.toJSON() : error);
    }
  }
}

export async function getOnePatient(id) {
  console.log("This id: " + id);
  try {
    const options = {
      method: "GET",
      url: `https://user-service.app.cloud.cbh.kth.se/patient/get/${id}`,
    };

    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log("Could not find any patient");
      throw new Error("Could not find any patient");
    } else {
      console.error(error.toJSON ? error.toJSON() : error);
    }
  }
}
