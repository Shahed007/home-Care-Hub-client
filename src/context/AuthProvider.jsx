import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import useAxios from "../hooks/useAxios";
import { useMutation } from "@tanstack/react-query";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const axios = useAxios();
  const mutation = useMutation({
    mutationFn: (users) => {
      return axios.post("/jwt", users);
    },
  });
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const profileUpdate = (name, photoUrl) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  const googleLogIn = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      // const email = user.email;
      console.log(user);
      setUser(user);
      setLoading(false);
      // mutation.mutate({ email });
    });

    return () => {
      unSubscribe();
    };
  }, [mutation]);

  const allAuth = {
    createUser,
    logIn,
    logOut,
    profileUpdate,
    setUser,
    googleLogIn,
    loading,
    user,
  };
  return (
    <AuthContext.Provider value={allAuth}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
