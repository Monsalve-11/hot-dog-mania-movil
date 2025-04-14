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

const ProfileScreen = () => {
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

      {/* Título */}
      <Text style={styles.title}>INFORMACIÓN PERSONAL</Text>
      <View style={styles.separator} />

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
};

export default ProfileScreen;

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
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  separator: {
    height: 2,
    backgroundColor: "#000",
    marginVertical: 10,
    width: "80%",
    alignSelf: "center",
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
