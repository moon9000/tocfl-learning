import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/api", //replace ip by localhost after LAN sharing connexion
  headers: {
    "Content-type": "application/json",
  },
});
