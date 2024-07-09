import React from "react";
import styled from "styled-components";
import { ImHome } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const navigate = useNavigate();

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
