import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = ({ showMenu, setShowMenu, isAuthenticated }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.header, showMenu && styles.expandedHeader]}>
      <TouchableOpacity onPress={() => setShowMenu(!showMenu)} style={styles.menuButton}>
        <Text style={styles.menuText}>☰</Text>
      </TouchableOpacity>

      <View style={styles.headerTitleContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>

      {!isAuthenticated && (
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 30,
    backgroundColor: 'rgba(255,101,67,1)',
    justifyContent: 'space-between',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 9,
    height: 100, 
  },
  expandedHeader: {
    height: 250,
  },
  menuButton: {
    marginRight: 80,
  },
  menuText: {
    fontSize: 35,
    color: '#ffff',
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginRight: 10,
  },
  loginButton: {
    backgroundColor: '#179BAE',
    top:10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderColor: '#179BAE',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Header;
