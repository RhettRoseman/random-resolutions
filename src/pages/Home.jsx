import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const FormWrapper = styled.div`
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  max-width: 80%;
  margin-bottom: 500px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #808080;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
`;

const LoginForm = () => {
  return (
    <Container>
      <FormWrapper>
        <Title>Login</Title>
        <InputField type="text" placeholder="Username" />
        <InputField type="password" placeholder="Password" />
        <LoginButton>Login</LoginButton>
      </FormWrapper>
    </Container>
  );
};

export default LoginForm;
