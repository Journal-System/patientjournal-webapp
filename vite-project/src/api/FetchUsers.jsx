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
            throw new Error("Could not find this user")
        } else {
            console.error(error.toJSON ? error.toJSON() : error);
        }
    }
}
