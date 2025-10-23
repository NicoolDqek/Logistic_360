import styled from "styled-components/native";
import Constants from "expo-constants";
import { SafeAreaView } from "react-native-safe-area-context";

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
  primary: "#ffffffff",
  secondary: "#e1e0e5ff",
  ternary: "#1447E6",
  darkLinght: "#a9a6a6ff",
  brand: "#2d4384ff",
};

const { primary, secondary, ternary, darkLinght, brand } = Colors;

export const StyledContainer = styled(SafeAreaView)`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 10}px;
  background-color: ${primary};
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const PageLogo = styled.Image`
  width: 80%;
  height: 30%;
  resize-mode: contain;
  align-self: center;
`;

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 10px;
`;

export const SubTitle = styled.Text`
  align-self: flex-start;
  font-size: 20px;
  margin-bottom: 30px;
  letter-spacing: 2px;
  font-weight: bold;
  color: ${ternary};
  margin-left: 15px;
  width: 100%;
  text-align: left;
  font-family: Montserrat_600SemiBold;
`;

export const StyledFormArea = styled.View`
  width: 90%;
  margin-bottom: 20px;
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${secondary};
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${ternary};
  font-family: Montserrat_400Regular;
   elevation: 10;
`;

export const StyledInputLabel = styled.Text`
  color: ${ternary};
  font-size: 13px;
  text-align: left;
  font-family: Montserrat_500Medium;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${brand};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;
   elevation: 12;
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;
  font-family: Montserrat_600SemiBold;
  letter-spacing: 4px;
`;

export const ExtraText = styled.Text`
  color: ${ternary};
  font-size: 12px;
  text-align: center;
  margin: 5px;
  letter-spacing: 2px;
`;

export const IconImage = styled.Image`
  width: 70px;
  height: 50px;
  resize-mode: contain;
`;

export const FooterContainer = styled(SafeAreaView)`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 10px 25px;
  background-color: ${primary};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const FooterLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const FooterRight = styled.TouchableOpacity`
  padding: 8px;
`;

export const ConfigIcon = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${secondary};
  justify-content: center;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 3px;
  elevation: 3;
`;
