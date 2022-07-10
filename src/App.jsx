import { useState } from "react";

import styled from "styled-components";
import Thumb from "./assets/head.png";
import PadLock from "./assets/padlock";
import Eye from "./assets/eye";

function App() {
  const [inputType, setInputType] = useState("password");
  const [stayConnected, setStayConnected] = useState(true);
  return (
    <BackgroundLayout>
      <LoginComponent>
        <LoginTitle>Enter your password</LoginTitle>
        <LoginUser>
          <UserThumb src={Thumb} alt="thumbnail" />
          <UserData>
            <UserTitle>Business account</UserTitle>
            <UserName>Amine Benaddi</UserName>
          </UserData>
        </LoginUser>
        <LoginPassword>
          <UserTitle>Password</UserTitle>
          <PasswordContainer>
            <PasswordWrapper>
              <PasswordInput type={inputType} />
              <PassPadLock>
                <PadLock />
              </PassPadLock>
            </PasswordWrapper>
            <PassEye
              onClick={() => {
                if (inputType === "text") {
                  setInputType("password");
                } else {
                  setInputType("text");
                }
              }}
              style={{
                backgroundColor: inputType === "text" ? "lightblue" : "white",
                height: "27px",
                borderRadius: "5px",
              }}
            >
              <Eye />
            </PassEye>
          </PasswordContainer>
        </LoginPassword>
        <ConnectionContainer>
          <StayConnected
            onClick={() => {
              setStayConnected(!stayConnected);
            }}
          >
            <ConnectionMarker stayConnected={stayConnected} />
          </StayConnected>
          <UserTitle>Stay signed in</UserTitle>
          <LoginButton>Continue</LoginButton>
        </ConnectionContainer>
      </LoginComponent>
    </BackgroundLayout>
  );
}

const LoginButton = styled.button`
  padding: 16px;
  width: 103px;
  height: 51px;
  background: #132b50;
  border-radius: 8px;
  border: 0;
  color: white;
  font-size: 16px;
  line-height: 19px;
  margin-left: 30px;
  cursor: pointer;
`;

const ConnectionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const StayConnected = styled.div`
  width: 60px;
  height: 30px;
  border: 1px solid #132b50;
  border-radius: 44px;
  cursor: pointer;
  margin-right: 5px;
`;

const ConnectionMarker = styled.div`
  width: 22px;
  height: 22px;
  background: #132b50;
  border-radius: 40px;
  margin: 4px;
  transition: transform 0.1s linear;
  transform: translateX(0px);
  ${({ stayConnected }) => stayConnected && "transform: translateX(30px);"}
`;

const BackgroundLayout = styled.div`
  background-color: #f6f7f8;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginComponent = styled.div`
  width: 300px;
  height: 300px;
  background: white;
  border-radius: 15px;
  padding: 85px;
`;

const LoginTitle = styled.h1`
  font-size: 28px;
  margin: 0 0 20px 0;
`;

const LoginUser = styled.div`
  display: flex;
`;

const UserThumb = styled.img`
  width: 78px;
  height: 78px;
  border: 1px solid #0e99ff;
  border-radius: 50%;
`;

const UserData = styled.div`
  margin: 0 0 0 20px;
  align-self: center;
`;

const UserTitle = styled.h3`
  margin: 0;
  font-size: 14px;
`;

const UserName = styled.h2`
  margin: 5px 0 0 0;
  font-size: 22px;
`;

const LoginPassword = styled.div`
  margin: 20px 0 0 0;
`;

const PasswordInput = styled.input`
  border: 1px solid #132b50;
  padding: 16px 40px;
  border-radius: 8px;
  margin: 10px 0 0 0;
  position: absolute;
  width: 180px;
  inset: 0;
`;

const PasswordWrapper = styled.div`
  position: relative;
  height: 60px;
  width: 270px;
`;

const PassPadLock = styled.div`
  position: absolute;
  z-index: 1;
  top: 20px;
  left: 10px;
`;

const PasswordContainer = styled.div`
  display: flex;
`;

const PassEye = styled.div`
  margin-top: 22px;
  cursor: pointer;
  user-select: none;
`;

export default App;
