import React from "react";
import KakaoLogin from "../components/KakaoLogin";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <PageText>Homepage</PageText>
      <LoginBtn>
        <KakaoLogin />
      </LoginBtn>
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
