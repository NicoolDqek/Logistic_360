import styled from "styled-components/native";  
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    primary: "#ffffffff",
    secondary: "#e1e0e5ff",
    ternary: "#1447E6",
    darkLinght: "#a9a6a6ff",
    brand: "#2d4384ff"
};

const { primary, secondary, ternary, darkLinght, brand } = Colors;

export const StyledContainer = styled.View`
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
    letterr.spacing: 4px;          
    text-align: left; 
    font-family: Montserrat_600SemiBold;        
`;

export const StyledFormArea = styled.View`
    width: 90%;
    margin-bottom: 20px; /* Espacio para el footer */
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
`;

export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 16px;
     font-family: Montserrat_600SemiBold;
     letter-spacing:4px;

`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
    color: ${ternary};
    margin-vertical: 10px;
`;

// PIE DE PÁGINA CON IMAGEN SOBRE TEXTO
export const ExtraView = styled.View`
    position: absolute;
    bottom: 50px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
`;

export const ExtraText = styled.Text`
    color: ${ternary};
    font-size: 12px;
    text-align: center;
    margin-top: 5px;
    letter-spacing:2px;
`;

export const IconImage = styled.Image`
    width: 60px;
    height: 40px;
    resize-mode: contain;
`;


export const Spacer = styled.View`
    flex: 1;
`;




// Agrega estos nuevos componentes al final de tu styles.tsx

export const FooterContainer = styled.View`
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 15px 25px;
    background-color: ${primary};
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