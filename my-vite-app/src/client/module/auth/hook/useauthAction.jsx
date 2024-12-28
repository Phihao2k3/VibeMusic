import React from "react";
import { useDispatch } from "react-redux";
import { login, refreshToken } from "@src/redux/slice/authSlice";

const useAuthAction = () => {
  const dispatch = useDispatch();

  const loginAction = (data) => {
    return dispatch(login(data));
  };

  const refreshTokenAction = (data) => {
    return dispatch(refreshToken(data));
  };

  return { loginAction, refreshTokenAction };
};

export default useAuthAction;
