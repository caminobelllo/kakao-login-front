import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../api";

const Auth = () => {
  const navigate = useNavigate();
  const PARAMS = new URL(document.location).searchParams;
  const kAKAO_CODE = PARAMS.get("code");

  console.log("KAKAO_CODE(인가 코드): ", kAKAO_CODE);

  useEffect(() => {
    sendCodeToServer();
  });

  const sendCodeToServer = async () => {
    try {
      const response = await axiosInstance.post("/auth/kakao/login", {
        access_code: kAKAO_CODE,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        console.log(response.data);
        const accessToken = response.data.access_token;
        const refreshToken = response.data.refresh_token;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        navigate("/user");
      }
    } catch (e) {
      console.log("error");
      // 존재하지 않는 사용자
      if (e.response.status === 404) {
        try {
          const response = await axiosInstance.post("/auth/kakao/register", {
            access_code: kAKAO_CODE,
            description: "hello",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (response.status === 200) {
            console.log(response.data);
            const accessToken = response.data.access_token;
            const refreshToken = response.data.refresh_token;
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
            console.log(accessToken);
            navigate("/user");
          }
        } catch (e) {
          console.log("error");
        }
      } else if (e.response.status === 401) {
        alert("사용자 인증이 실패하였습니다.");
      }
    }

    return <div>로딩 중입니다… 잠시만 기다려 주세요.</div>;
  };
};
export default Auth;
