import axios from "axios";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const axiosSecure = axios.create({
  baseURL: "https://home-cearr-hub-server-v1.vercel.app/api/v1",
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
