import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from 'react-native';
import { Formik } from 'formik';
import { router } from "expo-router"; // ✅ navegación
import { 
    StyledContainer, 
    InnerContainer, 
    Colors,
    PageLogo, 
    SubTitle, 
    StyledFormArea, 
    LeftIcon, 
    StyledInputLabel, 
    StyledTextInput, 
    RightIcon, 
    StyledButton, 
    ButtonText, 
    MsgBox, 
    ExtraView,
    FooterContainer,
    FooterLeft,
    IconImage,
    ExtraText,
    FooterRight,
    ConfigIcon, 
} from "@/components/ui/styles";
import { Octicons, Ionicons } from '@expo/vector-icons';

const LoginImg = require("../assets/images/Login.png");

const { brand, darkLinght } = Colors;

interface MyTextInputProps {
    label: string;
    icon: "mail" | "lock" | "eye" | "eye-closed" | "person";
    isPassword?: boolean;
    hidePassword?: boolean;
    setHidePassword?: (value: boolean) => void;
    [key: string]: any;
}

const MyTextInput: React.FC<MyTextInputProps> = ({ 
    label, 
    icon, 
    isPassword, 
    hidePassword, 
    setHidePassword, 
    ...props 
}) => {
    return (
        <View style={{ marginBottom: 15 }}>
            <LeftIcon>
                <Octicons name={icon as any} size={30} color={brand}/>
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props}/>
            {isPassword && (
                <RightIcon onPress={() => setHidePassword && setHidePassword(!hidePassword)}>
                    <Ionicons 
                        name={hidePassword ? 'eye-off' : 'eye'} 
                        size={30} 
                        color={darkLinght}
                    />
                </RightIcon>
            )}
        </View>
    );
};

export default function Login() {
    const [hidePassword, setHidePassword] = useState(true);

    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo source={LoginImg} />
                <SubTitle>Bienvenido</SubTitle>
            
                <Formik 
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(values) => {
                        console.log(values);
                         
                      
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <StyledFormArea>
                            <MyTextInput
                                label="Email Address"
                                icon="mail"
                                placeholder="Andy@gmail.com"
                                placeholderTextColor={darkLinght}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                            />
                            
                            <MyTextInput
                                label="Contraseña"
                                icon="lock"
                                placeholder="* * * * * * *"
                                placeholderTextColor={darkLinght}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
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

 


<FooterContainer
>
    <FooterLeft>
        <IconImage source={require('../assets/images/icon_J&T.png')} />
        <ExtraText>
            Por J&T Colombia{"\n"}Derechos reservados
        </ExtraText>
    </FooterLeft>
    
    <FooterRight onPress={() => console.log('Abrir configuración')}>
        <ConfigIcon>
            <Ionicons name="settings-sharp" size={24} color={brand} />
        </ConfigIcon>
    </FooterRight>
</FooterContainer>
            </InnerContainer>
        </StyledContainer>
    );
}
