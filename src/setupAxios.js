import axios from "axios";

export default axios.create({
  baseURL: "https://basis-b2ce8-default-rtdb.firebaseio.com",
  headers: {
    "Content-type": "application/json",

  }
});