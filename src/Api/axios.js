import axios from "axios";

// Create an axios instance
const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-23ead/us-central1/api", 
  baseURL:"https://amazon-clone-api-79ds.onrender.com",
  // baseURL:"http://localhost:3000/",
  // Local backend URL
  headers: {
    "Content-Type": "application/json", // Set default headers if needed
  },
});


export { axiosInstance };
