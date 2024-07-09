import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { userInfoState } from "./../atoms/index";
import { axiosInstance } from "../api";

const Auth = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const navigate = useNavigate();
  const PARAMS = new URL(document.location).searchParams;
  const kAKAO_CODE = PARAMS.get("code");
  const [accessTokenFetching, setAccessTokenFetching] = useState(false);

  console.log("KAKAO_CODE (인가 코드)", kAKAO_CODE);

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
      console.log("accessToken: ", accessToken);
      setAccessTokenFetching(false);
      navigate("/user");
    } catch (error) {
      console.log("Error: ", error);
      setAccessTokenFetching(false);
    }
  };

  useEffect(() => {
    if (kAKAO_CODE) {
      getAccessToken();
    }
  }, [kAKAO_CODE]);

  return <div>Auth</div>;
};

export default Auth;
