import axios from "axios";

export const initAxios = ({ method, payload, url }) => {
  if (method === "GET") {
    axios
      .get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
  }
};
