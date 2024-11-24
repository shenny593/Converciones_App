import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { Link } from "expo-router";

export default function Index() {
  const [loaded, error] = useFonts({
    'poppins': require('../assets/fonts/PoppinsSemiBold.ttf'),
  });

  if (!loaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <LinearGradient
      colors={["#1A1A1D", "#800000", "#1A1A1D"]} // Gradiente con tonos rojos oscuros
      style={styles.container}
    >
      {/* Ícono como imagen */}
      <Image 
        source={require('../assets/images/icono.png')} // Cambia la ruta según tu archivo
        style={styles.icon} 
      />
      <Text style={styles.title}>Conversor de Medidas</Text>
      <Text style={styles.subtitle}>Selecciona una para iniciar!</Text>

      <Link href="/mainmenu" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Conversor de Electricidad</Text>
        </Pressable>
      </Link>

      <Text>    </Text>

      <Link href="/credits" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Conversor de Calor</Text>
        </Pressable>
      </Link>

      <Text>    </Text>

      <Link href="/pruebafoto" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Conversor de Medidas</Text>
        </Pressable>
      </Link>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: 'poppins',
    fontSize: 44,
    color: "#FF073A", // Rojo neón brillante.
    textAlign: "center",
    textShadowColor: "rgba(255, 7, 58, 0.8)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: 'poppins',
    fontSize: 18,
    color: "#FF073A",
    textAlign: "center",
    textShadowColor: "rgba(255, 7, 58, 0.6)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FF073A",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#FF073A",
    shadowColor: "#FF073A",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 15,
  },
  buttonText: {
    fontFamily: 'poppins',
    fontSize: 16,
    color: "#FFF",
    textAlign: "center",
  },
  icon: {
    width: 150,
    height: 150,
    marginBottom: 20,
    tintColor: "#FF073A", // Cambia el color de la imagen al rojo neón.
    resizeMode: "contain", // Asegura que la imagen mantenga su proporción.
  },
});
