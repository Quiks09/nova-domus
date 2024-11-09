import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.hero}>
      <View style={styles.bgLanding}>
        <Text style={styles.landingTitle}>¿Qué vas a hacer hoy?</Text>
        
        <TouchableOpacity
          style={styles.customCard}
          onPress={() => navigation.navigate('Inmuebles')}
        >
          <Image source={require('../assets/buscar.png')} style={styles.logo} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Ver Inmuebles</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.customCard}
          onPress={() => navigation.navigate('PublicarInmueble')}
        >
          <Image source={require('../assets/publicar.png')} style={styles.logo} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Publicar Inmueble</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hero: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  bgLanding: {
    alignItems: 'center',
    paddingTop: 20,
  },
  landingTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Poppins',
  },
  customCard: {
    width: 300,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    backgroundColor: 'white',
    marginVertical: 20,
    alignItems: 'center',
    overflow: 'hidden',
  },
  logo: {
    width: 300,
    height: 150,
    resizeMode: 'contain',
  },
  cardContent: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});

export default HomeScreen;
