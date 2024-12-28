import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useAuthAction from "./client/module/auth/hook/useauthAction";

const useAuth = (code) => {
  const { loginAction, refreshTokenAction } = useAuthAction();
  

  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  // Nếu có code, thực hiện đăng nhập thông qua Redux action
  useEffect(() => {
    if (!code) return;

    const fetchLogin = async () => {
      try {
        const res = await loginAction({ code });
        console.log(res);
        
        setAccessToken(res.payload.accessToken);
        setRefreshToken(res.payload.refreshToken);
        setExpiresIn(res.payload.expiresIn);
        window.history.pushState({}, null, "/"); // Xóa code từ URL
      } catch (error) {
        console.error("Login failed:", error);
        window.location = "/"; // Nếu đăng nhập thất bại, chuyển hướng về trang chủ
      }
    };

    fetchLogin();
  }, [code]);

  // Làm mới token khi gần hết hạn
  useEffect(() => {
    if (!refreshToken || !expiresIn) return;

    const timeout = setTimeout(async () => {
      try {
        const res = await refreshTokenAction({ refreshToken });
        setAccessToken(res.payload.accessToken);
        setExpiresIn(res.payload.expiresIn);
      } catch (error) {
        console.error("Token refresh failed:", error);
        window.location = "/"; // Chuyển hướng nếu làm mới thất bại
      }
    }, (expiresIn - 60) * 1000);

    return () => clearTimeout(timeout); // Dọn dẹp timeout
  }, [refreshToken, expiresIn]);

  return accessToken; // Trả về accessToken cho các component khác sử dụng
};

export { useAuth };
