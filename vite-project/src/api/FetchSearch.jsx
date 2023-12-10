import axios from "axios";

export async function getAllPatientsByName(name) {
  try {
    const options = {
      method: "GET",
      url: `https://search-service.app.cloud.cbh.kth.se/v1/patients/name/${name}`,
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

export async function getAllPatientsByCondition(condition) {
  try {
    const options = {
      method: "GET",
      url: `https://search-service.app.cloud.cbh.kth.se/v1/patients/condition/${condition}`,
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