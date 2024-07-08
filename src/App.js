import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/kakao" element={<Auth />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
