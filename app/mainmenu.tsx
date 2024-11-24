import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Picker } from '@react-native-picker/picker';

export default function Index() {
  const [selectedUnitFrom, setSelectedUnitFrom] = useState("voltios"); // Unidad de origen
  const [selectedUnitTo, setSelectedUnitTo] = useState("amperios"); // Unidad de destino
  const [inputValue, setInputValue] = useState(""); // Valor de entrada
  const [result, setResult] = useState(0); // Resultado de la conversión

  // Función para manejar la conversión
  const handleConversion = (value) => {
    let conversionResult = 0;

    // Convertir de la unidad seleccionada de origen a la unidad de destino
    if (!value) {
      return; // Evitar conversiones con valores vacíos
    }

    switch (selectedUnitFrom) {
      case "voltios":
        if (selectedUnitTo === "voltios") {
          conversionResult = value;
        } else if (selectedUnitTo === "amperios") {
          conversionResult = value * 0.01; // Ejemplo: 1 V = 0.01 A
        } else if (selectedUnitTo === "vatios") {
          conversionResult = value * 0.1; // Ejemplo: 1 V = 0.1 W
        }
        break;
      case "amperios":
        if (selectedUnitTo === "voltios") {
          conversionResult = value * 100; // Ejemplo: 1 A = 100 V
        } else if (selectedUnitTo === "amperios") {
          conversionResult = value;
        } else if (selectedUnitTo === "vatios") {
          conversionResult = value * 10; // Ejemplo: 1 A = 10 W
        }
        break;
      case "vatios":
        if (selectedUnitTo === "voltios") {
          conversionResult = value * 10; // Ejemplo: 1 W = 10 V
        } else if (selectedUnitTo === "amperios") {
          conversionResult = value * 0.1; // Ejemplo: 1 W = 0.1 A
        } else if (selectedUnitTo === "vatios") {
          conversionResult = value;
        }
        break;
      default:
        conversionResult = 0;
    }

    setResult(conversionResult);
  };

  return (
    <LinearGradient
      colors={["#1A1A1D", "#800000", "#FFDC00"]} // Gradiente de tonos oscuros a amarillo neón
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Image 
          source={require('../assets/images/rayo.png')} 
          style={styles.icon} 
        />
        <Text style={styles.converterTitle}>Conversor de Unidades de Electricidad</Text>

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
          <Picker.Item label="Voltios" value="voltios" />
          <Picker.Item label="Amperios" value="amperios" />
          <Picker.Item label="Vatios" value="vatios" />
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
          <Picker.Item label="Voltios" value="voltios" />
          <Picker.Item label="Amperios" value="amperios" />
          <Picker.Item label="Vatios" value="vatios" />
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
    color: "#FFDC00", // Amarillo neón
    fontFamily: 'poppins',
    textAlign: "center",
    textShadowColor: "rgba(255, 220, 0, 0.8)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: "#FFDC00", // Amarillo neón
    fontFamily: 'poppins',
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: 250,
    backgroundColor: "#333", // Fondo oscuro
    color: "#FFDC00",
    borderRadius: 5,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 250,
    backgroundColor: "#333",
    color: "#FFDC00",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#FFDC00",
    padding: 10,
    marginBottom: 20,
    textAlign: "center",
    shadowColor: "#FFDC00",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  resultText: {
    fontSize: 22,
    color: "#FFDC00",
    fontFamily: 'poppins',
    textAlign: "center",
    marginBottom: 30,
    padding: 10,
    borderWidth: 2,
    borderColor: "#FFDC00",
    borderRadius: 5,
    shadowColor: "#FFDC00",
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  icon: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: "contain",
    tintColor: "#FFDC00",
  },
});
