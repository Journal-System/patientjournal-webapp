import axios from "axios";

export async function getImageById(id) {
  try {
    const options = {
      method: "GET",
      url: `https://image-servie.app.cloud.cbh.kth.se/download/${id}`,
      responseType: "arraybuffer", // Set response type to arraybuffer, image is stored as BLOB thats why,
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };

    const response = await axios.request(options);

    // Create a Blob from the arraybuffer
    const blob = new Blob([response.data], {
      type: response.headers["content-type"],
    });

    // Create a data URL from the Blob
    const dataUrl = URL.createObjectURL(blob);

    // Use dataUrl as needed in your application
    console.log(dataUrl);

    return dataUrl;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log("Could not find any image with that id");
      throw new Error("Could not find image");
    } else {
      console.error(error.toJSON ? error.toJSON() : error);
    }
  }
}

export async function uploadImage(imageFile) {
  try {
    const formData = new FormData();
    formData.append("image", imageFile);

    const response = await axios.post(
      "https://image-servie.app.cloud.cbh.kth.se/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    console.log("Image uploaded successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error uploading image:",
      error.toJSON ? error.toJSON() : error
    );
    throw new Error("Image upload failed");
  }
}

export async function saveImagewithId(id, imageFile) {
  try {
    const formData = new FormData();
    formData.append("image", imageFile);

    const response = await axios.post(
      `https://image-servie.app.cloud.cbh.kth.se/save/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    console.log("Image saved successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error saving image:", error.toJSON ? error.toJSON() : error);
    throw new Error("Image save failed");
  }
}