     import React from "react";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";  
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  SubTitle,
} from "@/components/ui/stylesLogin";
import { useLogin } from "@/hooks/useLogin";
import { LoginForm } from "@/components/forms/LoginForm";
import { LoginFooter } from "@/components/ui/LoginFooter";

import { useRouter } from "expo-router";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { ParametersForm } from "@/components/forms/ParametersForm";
import { Cabecera } from "@/components/ui/StylesRecepcion";


 
export default function Parameters() {
  const router = useRouter();
  const LoginImg = require("@/assets/images/Login.png");
   

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


 <KeyboardAvoidingView 
  style={{flex: 1}}
  behavior={Platform.OS === "ios" ? "padding" : "height"}
>
  <ScrollView 
    contentContainerStyle={{flexGrow: 1}}
    keyboardShouldPersistTaps="handled"
  >
    <InnerContainer>
      <Cabecera/>
      
      
      <ParametersForm
        onSubmit={handleLogin}
      />
    </InnerContainer>
  </ScrollView>
</KeyboardAvoidingView>

      </StyledContainer>
    </>
  );
}

  

 