import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const useAuth = () => {
  const allAuth = useContext(AuthContext);
  return allAuth;
};

export default useAuth;
