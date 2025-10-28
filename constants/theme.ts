import { Platform } from 'react-native';

const tintColorLight = '#1447E6';
const tintColorDark = '#fff';

export const Colors = {
   primary: "#ffffffff",
  secondary: "#e1e0e5ff",
  ternary: "#0d0672ff",
  darkLinght: "#a9a6a6ff",
  brand: "#2d4384ff",
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  }
  
 ,
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

 
export const Fonts = {
 
  regular: 'Montserrat_400Regular',
  medium: 'Montserrat_500Medium', 
  semiBold: 'Montserrat_600SemiBold',
  bold: 'Montserrat_700Bold',
  sans: 'Montserrat_400Regular',
  serif: 'Montserrat_400Regular',
  rounded: 'Montserrat_400Regular',
  mono: 'Montserrat_400Regular',
};



export const ImagenesCards = {
  compras: require("../assets/images/compras.png"),
  devolucion: require("../assets/images/devolucion.png"),
  distribucion: require("../assets/images/distribucion.png"),
  entradaMercancia: require("../assets/images/entradaMercancia.png"),
  gestionar: require("../assets/images/gestionar.png"),
  organizar: require("../assets/images/organizar.png"),
  recepcion: require("../assets/images/Recepcion.png"),
  construccion:require("../assets/images/Build.png")

}


