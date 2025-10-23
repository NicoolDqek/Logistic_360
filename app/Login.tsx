import React from "react";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";  
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  SubTitle,
} from "@/components/ui/stylesLogin";
import KeyboardWrapper from "@/components/KeyboardWrapper";
import { useLogin } from "@/hooks/useLogin";
import { LoginForm } from "@/components/forms/LoginForm";
import { LoginFooter } from "@/components/ui/LoginFooter";

const LoginImg = require("@/assets/images/Login.png");

export default function Login() {
  const {
    hidePassword,
    setHidePassword,
    handleLogin,
    goToParameters
  } = useLogin();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      
      <StyledContainer>
        <StatusBar style="dark" />

        <KeyboardWrapper>
          <InnerContainer>
            <PageLogo source={LoginImg} />
            <SubTitle>Bienvenido</SubTitle>

            <LoginForm
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}
              onSubmit={handleLogin}
            />
          </InnerContainer>
        </KeyboardWrapper>

        <LoginFooter onConfigPress={goToParameters} />
      </StyledContainer>
    </>
  );
}