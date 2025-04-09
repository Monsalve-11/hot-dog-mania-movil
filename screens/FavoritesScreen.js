import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="menu" size={28} color="black" />
        <View style={styles.logo}>
          <Text style={styles.star}>★</Text>
          <Text style={styles.logoText}>HOT DOG</Text>
          <Text style={styles.logoText}>MANIA</Text>
          <Text style={styles.star}>★</Text>
        </View>
        <FontAwesome name="shopping-cart" size={24} color="black" />
      </View>

      {/* Título */}
      <Text style={styles.title}>FAVORITOS</Text>
      <View style={styles.separator} />

      {/* Card */}
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://i.imgur.com/5Aqgz7o.png' }}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.name}>Perro Americano</Text>
          <Text style={styles.price}>$ 12.000</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Comprar</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.navBar}>
        <Ionicons name="home" size={26} color="#000" />
        <Ionicons name="heart" size={26} color="red" />
        <Ionicons name="time" size={26} color="#000" />
        <Ionicons name="person" size={26} color="#000" />
      </View>
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    paddingTop: 40,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    alignItems: 'center',
  },
  logoText: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  star: {
    fontSize: 18,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  separator: {
    height: 2,
    backgroundColor: '#000',
    marginVertical: 10,
    width: '60%',
    alignSelf: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 15,
    marginVertical: 20,
    flexDirection: 'column',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  info: {
    alignItems: 'center',
    marginVertical: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  price: {
    color: 'red',
    fontSize: 14,
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 20,
    marginTop: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  navBar: {
    position: 'absolute',
    bottom: 15,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#eee',
    paddingVertical: 10,
    borderRadius: 30,
  },
});
