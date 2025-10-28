import { Stack } from "expo-router";
import { Colors, Fonts } from "@/constants/theme";

const { brand, primary } = Colors;

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
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
    >
      {/* Pantallas sin header */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      
      {/* Pantallas con header personalizado */}
      <Stack.Screen 
        name="Home" 
        options={{
          headerTitle: "Inicio"
        }}  
      />
      <Stack.Screen 
        name="Recepcion" 
        options={{
          title: 'Recepción'
        }} 
      />
      <Stack.Screen 
        name="Organizacion" 
        options={{
          title: 'Organización'
        }} 
      />
      <Stack.Screen 
        name="Gestion" 
        options={{
          title: 'Gestión'
        }} 
      />
      <Stack.Screen 
        name="Distribucion" 
        options={{
          title: 'Distribución'
        }} 
      />
    </Stack>
  );
}