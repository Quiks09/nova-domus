import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

export default function InmuebleCardScreen({ inmueble, onExpandClick }) {
  const renderImage = ({ item }) => (
    <Image source={{ uri: item.image_url }} style={styles.image} />
  );

  return (
    <View style={styles.card}>
      <Text style={styles.type}>{inmueble.estate_type}</Text>

      <FlatList
        data={inmueble.photos}
        renderItem={renderImage}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.city}>{inmueble.city}</Text>
          <Text style={styles.price}>{inmueble.price} {inmueble.currency}</Text>
        </View>
        <Text style={styles.description}>{inmueble.description}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={onExpandClick}>
        <Text style={styles.buttonText}>Más Detalles</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  type: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#127281',
    color: 'white',
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderRadius: 5,
    fontSize: 18,
    fontWeight: 'bold',
    zIndex: 5,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  content: {
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  city: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  description: {
    marginTop: 5,
    fontSize: 14,
    color: '#333',
  },
  button: {
    marginTop: 10,
    backgroundColor: 'black',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
