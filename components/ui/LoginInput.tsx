import React from "react";
import { View } from "react-native";
import { Octicons, Ionicons } from "@expo/vector-icons";
import {
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
} from "@/components/ui/stylesLogin";
import { Colors } from "../../constants/theme";


const { brand, darkLinght } = Colors;

interface LoginInputProps {
  label: string;
  icon: string;
  isPassword?: boolean;
  hidePassword?: boolean;
  setHidePassword?: (hide: boolean) => void;
  [key: string]: any;
}

export const LoginInput: React.FC<LoginInputProps> = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => (
  <View style={{ marginBottom: 15 }}>
    <LeftIcon>
      <Octicons name={icon as any} size={30} color={brand} />
    </LeftIcon>
    <StyledInputLabel>{label}</StyledInputLabel>
    <StyledTextInput {...props} />
    {isPassword && (
      <RightIcon
        onPress={() => setHidePassword && setHidePassword(!hidePassword)}
      >
        <Ionicons
          name={hidePassword ? "eye-off" : "eye"}
          size={30}
          color={darkLinght}
        />
      </RightIcon>
    )}
  </View>
);