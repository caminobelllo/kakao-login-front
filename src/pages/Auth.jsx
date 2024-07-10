import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../api";

const Auth = () => {
  const navigate = useNavigate();
  const PARAMS = new URL(document.location).searchParams;
  const kAKAO_CODE = PARAMS.get("code");
  const [accessTokenFetching, setAccessTokenFetching] = useState(false);

  console.log("KAKAO_CODE(인가 코드): ", kAKAO_CODE);

  // access token 받아오기
  const getAccessToken = async () => {
    if (accessTokenFetching) return;

    console.log("getAccessToken 호출");

    try {
      setAccessTokenFetching(true);

      const response = await axiosInstance.post("/auth/kakao/login", {
        access_code: kAKAO_CODE,
        headers: {
          "Content-Type": "application/json",
        },
      });

      const accessToken = response.data.access_token;
      const refreshToken = response.data.refresh_token;
      console.log("accessToken: ", accessToken);
      localStorage.setItem("access_token", accessToken);
      localStorage.setItem("refresh_token", refreshToken);
      setAccessTokenFetching(false);

      // 완료 후 유저 페이지로 이동
      navigate("/user");
    } catch (error) {
      console.log("Error: ", error);
      setAccessTokenFetching(false);
    }
  };

  useEffect(() => {
    getAccessToken();
  }, [accessTokenFetching]);

  return (
    <div>{accessTokenFetching === false ? <span>Loading...</span> : null}</div>
  );
};

export default Auth;
