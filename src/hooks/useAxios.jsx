import axios from "axios";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

const useAxios = () => {
  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      if (err.response.status === 401 || err.response.status === 403) {
        signOut(auth);
      }
    }
  );
  return axiosSecure;
};

export default useAxios;
