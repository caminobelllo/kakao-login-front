import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ImHome } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../api";
import { useRecoilState } from "recoil";
import { userInfoState } from "./../atoms/index";

const UserPage = () => {
  const navigate = useNavigate();
  const [verifyState, setVerifyState] = useState(false);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const verifyJwt = async () => {
    try {
      const verifyResponse = await axiosInstance.get("/auth/verify", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setVerifyState(true);
      console.log(verifyResponse.data);
    } catch {
      alert("로그인이 필요한 페이지입니다!");
      navigate("/");
    }
  };

  const getInfo = async () => {
    try {
      const response = await axiosInstance.get("/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      console.log("user response data: ", response.data);

      setUserInfo(response.data);

      console.log("user info: ", userInfo);
    } catch (error) {
      console.log("user data 받아올 수 없음", error);
    }
  };

  const logout = () => {
    localStorage.clear();
  };

  useEffect(() => {
    verifyJwt();
    getInfo();
  }, []);

  return (
    <Wrapper>
      <Header>
        <ImHome
          size={36}
          style={{
            position: "absolute",
            marginLeft: "48px",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/");
          }}
        />
        <span style={{ position: "absolute", marginLeft: "636px" }}>
          USER PAGE
        </span>
      </Header>

      {verifyState && (
        <Container>
          <UserInfo>
            <span>안녕하세요 {userInfo.nickname}님 !</span>
          </UserInfo>
          <Button onClick={logout}>로그아웃</Button>
        </Container>
      )}
    </Wrapper>
  );
};

export default UserPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
const Header = styled.div`
  width: 100%;
  height: 60px;
  background-color: lightyellow;
  display: flex;
  align-items: center;
  position: relative;

  span {
    font-size: 24px;
    font-weight: 600;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  gap: 60px;

  span {
    font-size: 18px;
  }
`;

const UserInfo = styled.div``;

const Button = styled.button`
  width: 120px;
  height: 48px;
  border: none;
  background-color: #2fff00;
  cursor: pointer;
`;
