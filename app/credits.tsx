import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Picker } from '@react-native-picker/picker';

export default function HeatConverter() {
  const [selectedUnitFrom, setSelectedUnitFrom] = useState("joules"); // Unidad de origen
  const [selectedUnitTo, setSelectedUnitTo] = useState("calories"); // Unidad de destino
  const [inputValue, setInputValue] = useState(""); // Valor de entrada
  const [result, setResult] = useState(0); // Resultado de la conversión

  // Mapeo de conversiones de unidades de calor
  const conversionRates = {
    joules: {
      calories: 0.239,
      kilocalories: 0.000239,
      joules: 1,
    },
    calories: {
      joules: 4.184,
      kilocalories: 0.001,
      calories: 1,
    },
    kilocalories: {
      joules: 4184,
      calories: 1000,
      kilocalories: 1,
    },
  };

  // Función para manejar la conversión
  const handleConversion = (value) => {
    if (!value) {
      return; // Evitar conversiones con valores vacíos
    }

    const conversionResult = value * conversionRates[selectedUnitFrom][selectedUnitTo];
    setResult(conversionResult);
  };

  return (
    <LinearGradient
      colors={["#1C1C1C", "#2C2C2C", "#FF4500"]} // Gradiente más oscuro, con naranja para resaltar
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Image 
          source={require('../assets/images/fuego.png')} // Asegúrate de tener una imagen representativa de calor
          style={styles.icon} 
        />
        <Text style={styles.converterTitle}>Conversor de Unidades de Calor</Text>

        {/* Unidad de origen */}
        <Text style={styles.label}>Selecciona la unidad de origen</Text>
        <Picker
          selectedValue={selectedUnitFrom}
          style={styles.picker}
          onValueChange={(itemValue) => {
            setSelectedUnitFrom(itemValue);
            handleConversion(inputValue);
          }}
        >
          <Picker.Item label="Joules" value="joules" />
          <Picker.Item label="Calorías" value="calories" />
          <Picker.Item label="Kilocalorías" value="kilocalories" />
        </Picker>

        {/* Unidad de destino */}
        <Text style={styles.label}>Selecciona la unidad de destino</Text>
        <Picker
          selectedValue={selectedUnitTo}
          style={styles.picker}
          onValueChange={(itemValue) => {
            setSelectedUnitTo(itemValue);
            handleConversion(inputValue);
          }}
        >
          <Picker.Item label="Joules" value="joules" />
          <Picker.Item label="Calorías" value="calories" />
          <Picker.Item label="Kilocalorías" value="kilocalories" />
        </Picker>

        {/* Input de cantidad */}
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Introduce la cantidad"
          value={inputValue}
          onChangeText={(text) => {
            setInputValue(text);
            handleConversion(Number(text));
          }}
        />

        {/* Resultado de la conversión */}
        <Text style={styles.resultText}>
          Resultado: {result} {selectedUnitTo}
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    backgroundColor: 'transparent', // Mantiene la transparencia del fondo del LinearGradient
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  converterTitle: {
    fontSize: 28,
    color: "#FF6347", // Naranja neón
    fontFamily: 'poppins',
    textAlign: "center",
    textShadowColor: "rgba(255, 99, 71, 0.8)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: "#FF6347", // Naranja neón
    fontFamily: 'poppins',
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: 250,
    backgroundColor: "#333", // Fondo oscuro para los Picker
    color: "#FF6347", // Texto en naranja neón
    borderRadius: 5,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 250,
    backgroundColor: "#333",
    color: "#FF6347",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#FF6347",
    padding: 10,
    marginBottom: 20,
    textAlign: "center",
    shadowColor: "#FF6347",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  resultText: {
    fontSize: 22,
    color: "#FF6347",
    fontFamily: 'poppins',
    textAlign: "center",
    marginBottom: 30,
    padding: 10,
    borderWidth: 2,
    borderColor: "#FF6347",
    borderRadius: 5,
    shadowColor: "#FF6347",
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  icon: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: "contain",
    tintColor: "#FF6347",
  },
});
