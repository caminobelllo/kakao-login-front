import React, { useEffect } from "react";
import KakaoLogin from "../components/KakaoLogin";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [loginState, setLoginState] = useState(false);
  const navigate = useNavigate();

  const checkLoginState = () => {
    if (localStorage.getItem("accessToken")) {
      setLoginState(true);
    }
  };

  useEffect(() => {
    checkLoginState();
  }, []);

  return (
    <Wrapper>
      <PageText>Homepage</PageText>
      {loginState ? (
        <button
          style={{ marginTop: "60px" }}
          onClick={() => {
            navigate("/user");
          }}
        >
          USER PAGE
        </button>
      ) : (
        <LoginBtn>
          <KakaoLogin />
        </LoginBtn>
      )}
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 240px;
`;

const PageText = styled.span`
  font-size: 32px;
  font-weight: 500;
`;

const LoginBtn = styled.div`
  cursor: pointer;
  padding-top: 120px;
`;
