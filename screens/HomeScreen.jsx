import { ScrollView, StyleSheet, Text } from "react-native";
import CategorySection from "../src/components/CategorySection";
import SearchBar from "../src/components/SearchBar";

const productos = [
  { id: "1", nombre: "Producto" },
  { id: "2", nombre: "Producto" },
  { id: "3", nombre: "Producto" },
  { id: "4", nombre: "Producto" },
  { id: "5", nombre: "Producto" },
  { id: "6", nombre: "Producto" },
  { id: "7", nombre: "Producto" },
  { id: "8", nombre: "Producto" },
  { id: "9", nombre: "Producto" },
  { id: "10", nombre: "Producto" },
  { id: "11", nombre: "Producto" },
  { id: "12", nombre: "Producto" },
  { id: "13", nombre: "Producto" },
  { id: "14", nombre: "Producto" },
  { id: "15", nombre: "Producto" },
  { id: "16", nombre: "Producto" },
  { id: "17", nombre: "Producto" },
  { id: "18", nombre: "Producto" },
  { id: "19", nombre: "Producto" },
  { id: "20", nombre: "Producto" },
  

];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.titulo}>
        Todos Nuestros Productos
      </Text>

      <Text style={styles.subtitulo}>
        saludables
      </Text>

      <CategorySection
        titulo="Frutas"
        productos={productos}
      />

      <CategorySection
        titulo="Snacks"
        productos={productos}
      />

      <CategorySection
        titulo="Vitaminas"
        productos={productos}
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    paddingTop: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2E4E1E",
  },

  subtitulo: {
    textAlign: "center",
    color: "#666",
    marginBottom: 25,
  },
});