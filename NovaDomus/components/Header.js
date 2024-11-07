import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Header = ({ showMenu, setShowMenu, isAuthenticated }) => {

  return (
    <View style={styles.header}>
      {showMenu}
      Hola Mundo!
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#f8f8f8',
  },
  btnMenu: {
    marginRight: 10,
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  logoM: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginLeft: 5,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  loginHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 16,
    marginLeft: 5,
  },
});

export default Header;
