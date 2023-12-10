import axios from "axios";

export async function getAllDoctors() {
  try {
    const options = {
      method: "GET",
      url: `https://user-service.app.cloud.cbh.kth.se/doctor/getAllDoctors`,
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