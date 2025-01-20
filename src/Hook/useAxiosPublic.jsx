import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:5100",
});
const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;
