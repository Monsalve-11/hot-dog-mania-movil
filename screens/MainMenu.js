import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const categorias = ["Perros", "Bebidas", "Combos", "Promociones"];

const productosEjemplo = [
  {
    id: 1,
    nombre: "Perro Americano",
    descripcion: "Salchicha americana y salsas.",
    precio: 12000,
    imagen: "../assets/americano.jpeg",
  },
  {
    id: 2,
    nombre: "Perro con maicitos",
    descripcion: "Salchicha, maicitos, queso y tocineta.",
    precio: 15000,
    imagen: "../assets/americano.jpeg",
  },
];

export default function MainMenu() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Perros");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="menu" size={32} color="black" />

        <View style={styles.logo}>
          <View style={styles.logoRow}>
            <Text style={styles.star}>★</Text>

            <View style={styles.logoTextContainer}>
              <Text style={styles.logoText}>HOT DOG</Text>
              <Text style={styles.logoText}>MANIA</Text>
            </View>

            <Text style={styles.star}>★</Text>
          </View>
        </View>

        <Icon name="shopping-cart" size={30} color="black" />
      </View>

      {/* Buscar */}
      <Text style={styles.question}>¿Qué hay para comer hoy?</Text>
      <TextInput placeholder="Buscar..." style={styles.input} />

      {/* Tabs */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tabScroll}
      >
        {categorias.map((cat) => (
          <TouchableOpacity
            key={cat}
            onPress={() => setCategoriaSeleccionada(cat)}
          >
            <Text
              style={[
                styles.tab,
                categoriaSeleccionada === cat && styles.tabSelected,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Productos */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.cardScroll}
      >
        {productosEjemplo.map((prod) => (
          <View key={prod.id} style={styles.card}>
            <Image source={{ uri: prod.imagen }} style={styles.image} />
            <Text style={styles.productName}>{prod.nombre}</Text>
            <Text style={styles.productDesc}>{prod.descripcion}</Text>
            <Text style={styles.productPrice}>
              ${prod.precio.toLocaleString()}
            </Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Comprar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("MainMenu")}>
          <Icon name="home" size={30} color="#ff5e57" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("FavoritesScreen")}
        >
          <Icon name="heart" size={30} color="#ff5e57" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("HistoryScreen")}>
          <Icon name="clock-o" size={30} color="#ff5e57" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
          <Icon name="user" size={30} color="#ff5e57" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    paddingTop: 40,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 20, // Esto evita que quede tan pegado arriba
    paddingBottom: 10,
    alignItems: "center",
  },

  logo: {
    alignItems: "center",
    justifyContent: "center",
  },

  logoRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  logoTextContainer: {
    alignItems: "center",
    marginHorizontal: 8,
  },

  logoText: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  star: {
    fontSize: 28,
    color: "black",
    marginHorizontal: 4,
  },
  question: {
    fontSize: 20,
    paddingHorizontal: 14,
    marginTop: 20,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 15,
    marginTop: 5,
  },
  tabScroll: {
    marginTop: 10,
  },
  tab: {
    marginRight: 16,
    fontSize: 16,
    color: "gray",
  },
  tabSelected: {
    color: "red",
    textDecorationLine: "underline",
  },
  cardScroll: {
    marginTop: 5,
  },
  card: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    marginRight: 16,
    width: 180,
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 12,
  },
  productName: {
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 8,
  },
  productDesc: {
    fontSize: 12,
    color: "gray",
  },
  productPrice: {
    fontSize: 14,
    color: "red",
    fontWeight: "bold",
    marginTop: 4,
  },
  buyButton: {
    backgroundColor: "red",
    paddingVertical: 6,
    borderRadius: 30,
    marginTop: 8,
  },
  buyButtonText: {
    color: "white",
    textAlign: "center",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    height: 70,
    width: "110%",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
