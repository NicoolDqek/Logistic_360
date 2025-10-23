import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Parameters() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Botón para volver */}
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={24} color="#000" />
        <Text style={styles.backText}>Volver al Login</Text>
      </TouchableOpacity>

      <Text style={styles.title}>🎛️ Pantalla de Parameters</Text>
      <Text>¡Funciona! Navegación simple sin tabs complicados</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 30,
  },
  backText: {
    marginLeft: 10,
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});