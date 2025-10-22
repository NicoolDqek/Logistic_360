import { View, Text } from 'react-native';

export default function HomeScreen() {
  return ( 
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bienvenido al Home</Text>
      <Text>Aquí va el contenido principal de tu app</Text>
    </View>
  );
}