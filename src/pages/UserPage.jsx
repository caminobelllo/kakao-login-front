import React from "react";
import styled from "styled-components";

const UserPage = () => {
  return (
    <Wrapper>
      <Header>
        <span>USER PAGE</span>
      </Header>

      <Container>
        <UserInfo>
          <span>안녕하세요 ㅇㅇㅇ님 !</span>
        </UserInfo>
        <Button>로그아웃</Button>
      </Container>
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
  justify-content: center;
  align-items: center;

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
