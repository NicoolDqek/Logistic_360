import { Stack } from "expo-router";
import { Colors,Fonts } from "@/constants/theme";

const { brand, primary } = Colors;

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          headerShown: false   
        }} 
      />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen 
        name="Home" 
        options={{ 
          headerTitle: "Inicio",
          headerStyle: {
            backgroundColor: brand, 
          },
          headerTintColor: primary, 
           headerTitleStyle: {
            fontWeight: 'bold',
             fontSize: 20,
           fontFamily: Fonts.rounded

          }
        }}  
      />
      <Stack.Screen name="Parameters" />
      <Stack.Screen name="Configuration" />
      <Stack.Screen name="Recepcion" />
   
    </Stack>
  );
}