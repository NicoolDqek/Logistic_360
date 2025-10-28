import React from "react";
import { Formik } from "formik";
import { LoginInput } from "../ui/LoginInput";
import {
  StyledFormArea,
  StyledButton,
  ButtonText,
} from "@/components/ui/stylesLogin";
import { Colors } from "../../constants/theme";

const { darkLinght } = Colors;

interface LoginFormProps {
  hidePassword: boolean;
  setHidePassword: (hide: boolean) => void;
  onSubmit: (values: any) => void;
}



export const LoginForm: React.FC<LoginFormProps> = ({
  hidePassword,
  setHidePassword,
  onSubmit
}) => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={onSubmit}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <StyledFormArea>
        <LoginInput
          label="Email Address"
          icon="mail"
          placeholder="Andy@gmail.com"
          placeholderTextColor={darkLinght}
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          value={values.email}
          keyboardType="email-address"
        />
        <LoginInput
          label="Contraseña"
          icon="lock"
          placeholder="* * * * * * *"
          placeholderTextColor={darkLinght}
          onChangeText={handleChange("password")}
          onBlur={handleBlur("password")}
          value={values.password}
          secureTextEntry={hidePassword}
          isPassword={true}
          hidePassword={hidePassword}
          setHidePassword={setHidePassword}
        />

        <StyledButton onPress={handleSubmit as any}>
          <ButtonText>Ingresar</ButtonText>
        </StyledButton>
      </StyledFormArea>
    )}
  </Formik>
);