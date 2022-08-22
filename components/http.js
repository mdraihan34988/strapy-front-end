import axios from "axios";

const url = "https://starpy-backend.herokuapp.com";
export default axios.create({
  baseURL: url,
  headers: {
    "Content-type": "application/json",
  },
});
