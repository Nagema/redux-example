import axios from "axios";

const APIHeaders = {
  Accept: "application/json",
  "Content-type": "application/json",
  "Access-Control-Allow-Origin": "*",
  Authorization: {
    toString() {
      return `Bearer ${localStorage.getItem("token")}`;
    },
  },
};

export const API = axios.create({
  baseURL: process.env.REACT_APP_BACK_URL,
  timeout: 5000,
  headers: APIHeaders,
});