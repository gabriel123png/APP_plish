import {View,Text,StyleSheet,TouchableOpacity,Image,} from "react-native";

export default function ProductCard({ producto }) {
  return (
    <View style={styles.card}>

      <View style={styles.imagen}></View>

      <Text style={styles.nombre}>
        {producto.nombre}
      </Text>

      <TouchableOpacity style={styles.boton}>
        <Text style={styles.textoBoton}>
          Ver producto
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 10,
    marginLeft: 15,
    elevation: 5,
  },

  imagen: {
    width: "100%",
    height: 120,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    marginBottom: 12,
  },

  nombre: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },

  boton: {
    backgroundColor: "#2E7D32",
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
  },

  textoBoton: {
    color: "#FFF",
    fontWeight: "bold",
  },
});