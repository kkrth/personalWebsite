import axios from "axios";

const instance = axios.create({
    baseURL: "http://10.10.71.100:8080/test009",
    headers: {
        "Content-Type":"application/json"
    }
});

export default instance;