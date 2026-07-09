import { View, Text, FlatList, StyleSheet, TouchableOpacity, } from "react-native";
import { useState } from "react";
import ProductCard from "./ProductCard";

export default function CategorySection({ titulo, productos }) {
  const [mostrarTodos, setMostrarTodos] = useState(false);

  const productosMostrados = mostrarTodos
    ? productos
    : productos.slice(0, 3);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>{titulo}</Text>

        <TouchableOpacity
          onPress={() => {
            console.log("Botón presionado");
            setMostrarTodos(!mostrarTodos);
          }}
        >
          <Text style={styles.verMas}>
            {mostrarTodos ? "Ver menos" : "Ver más..."}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={productosMostrados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard producto={item} />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 10,
  },

  titulo: {
    fontSize: 20,
    fontWeight: "bold",
  },

  verMas: {
    color: "#2E7D32",
    fontWeight: "bold",
    
  }
});