import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Picker } from '@react-native-picker/picker';

export default function LengthConverter() {
  const [selectedUnitFrom, setSelectedUnitFrom] = useState("metros"); // Unidad de origen
  const [selectedUnitTo, setSelectedUnitTo] = useState("kilometros"); // Unidad de destino
  const [inputValue, setInputValue] = useState(""); // Valor de entrada
  const [result, setResult] = useState(0); // Resultado de la conversión

  // Mapeo de conversiones de unidades de longitud
  const conversionRates = {
    metros: {
      kilometros: 0.001,
      centimetros: 100,
      milimetros: 1000,
      pulgadas: 39.3701,
      pies: 3.28084,
      metros: 1,
    },
    kilometros: {
      metros: 1000,
      centimetros: 100000,
      milimetros: 1000000,
      pulgadas: 39370.1,
      pies: 3280.84,
      kilometros: 1,
    },
    centimetros: {
      metros: 0.01,
      kilometros: 0.00001,
      milimetros: 10,
      pulgadas: 0.393701,
      pies: 0.0328084,
      centimetros: 1,
    },
    milimetros: {
      metros: 0.001,
      kilometros: 0.000001,
      centimetros: 0.1,
      pulgadas: 0.0393701,
      pies: 0.00328084,
      milimetros: 1,
    },
    pulgadas: {
      metros: 0.0254,
      kilometros: 0.0000254,
      centimetros: 2.54,
      milimetros: 25.4,
      pies: 0.0833333,
      pulgadas: 1,
    },
    pies: {
      metros: 0.3048,
      kilometros: 0.0003048,
      centimetros: 30.48,
      milimetros: 304.8,
      pulgadas: 12,
      pies: 1,
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
      colors={["#000000", "#003366", "#1E3A5F", "#005C99"]} // Gradiente con más negro
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Image 
          source={require('../assets/images/regla.png')} // Asegúrate de tener una imagen representativa de unidades
          style={styles.icon} 
        />
        <Text style={styles.converterTitle}>Conversor de Unidades de Medida</Text>

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
          <Picker.Item label="Metros" value="metros" />
          <Picker.Item label="Kilómetros" value="kilometros" />
          <Picker.Item label="Centímetros" value="centimetros" />
          <Picker.Item label="Milímetros" value="milimetros" />
          <Picker.Item label="Pulgadas" value="pulgadas" />
          <Picker.Item label="Pies" value="pies" />
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
          <Picker.Item label="Metros" value="metros" />
          <Picker.Item label="Kilómetros" value="kilometros" />
          <Picker.Item label="Centímetros" value="centimetros" />
          <Picker.Item label="Milímetros" value="milimetros" />
          <Picker.Item label="Pulgadas" value="pulgadas" />
          <Picker.Item label="Pies" value="pies" />
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
    color: "#1E90FF", // Azul neón
    fontFamily: 'poppins',
    textAlign: "center",
    textShadowColor: "rgba(30, 144, 255, 0.8)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: "#1E90FF", // Azul neón
    fontFamily: 'poppins',
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: 250,
    backgroundColor: "#333", // Fondo oscuro para los Picker
    color: "#1E90FF", // Texto en azul neón
    borderRadius: 5,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 250,
    backgroundColor: "#333",
    color: "#1E90FF",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#1E90FF",
    padding: 10,
    marginBottom: 20,
    textAlign: "center",
    shadowColor: "#1E90FF",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  resultText: {
    fontSize: 22,
    color: "#1E90FF",
    fontFamily: 'poppins',
    textAlign: "center",
    marginBottom: 30,
    padding: 10,
    borderWidth: 2,
    borderColor: "#1E90FF",
    borderRadius: 5,
    shadowColor: "#1E90FF",
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  icon: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: "contain",
    tintColor: "#1E90FF", // Azul neón
  },
});
