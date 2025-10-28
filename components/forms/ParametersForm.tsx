import React from "react";
import { Formik } from "formik";
import { LoginInput } from "../ui/LoginInput";
import {
  StyledFormArea,
  StyledButton,
  ButtonText,
} from "@/components/ui/stylesLogin";
import { Colors } from "../../constants/theme";



interface LoginFormProps {
  onSubmit: (values: any) => void;
}



export const ParametersForm: React.FC<LoginFormProps> = ({
  onSubmit
}) => (
  <Formik
    initialValues={{ parametros:"" }}
    onSubmit={onSubmit}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <StyledFormArea>
        <LoginInput
          label="Parametro 1"
          icon="meter"
          placeholder="parametro..."
          placeholderTextColor={Colors.darkLinght}
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          keyboardType="email-address"
        />
        <LoginInput
          label="Parametro 1"
          icon="meter"
          placeholder="parametro..."
          placeholderTextColor={Colors.darkLinght}
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          keyboardType="email-address"
        />

        <LoginInput
          label="Parametro 1"
          icon="meter"
          placeholder="parametro..."
          placeholderTextColor={Colors.darkLinght}
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          keyboardType="email-address"
        />
        <LoginInput
          label="Parametro 1"
          icon="meter"
          placeholder="parametro..."
          placeholderTextColor={Colors.darkLinght}
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          keyboardType="email-address"
        />
        <LoginInput
          label="Parametro 1"
          icon="meter"
          placeholder="parametro..."
          placeholderTextColor={Colors.darkLinght}
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          keyboardType="email-address"
        />
         
         <LoginInput
          label="Parametro 1"
          icon="meter"
          placeholder="parametro..."
          placeholderTextColor={Colors.darkLinght}
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          keyboardType="email-address"
        />

        <StyledButton onPress={handleSubmit as any}>
          <ButtonText>Enviar</ButtonText>
        </StyledButton>
      </StyledFormArea>
    )}
  </Formik>
);