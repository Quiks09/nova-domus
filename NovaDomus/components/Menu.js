import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const Menu = ({ roles, setShowMenu }) => {
  const navigation = useNavigation();
  const { width } = Dimensions.get('window');
  const isSmallScreen = width <= 520; // Detecta pantallas pequeñas

  const items = [
    { key: 'Home', label: 'Inicio', icon: <FontAwesome name="home" size={24} color="white" />, roles: ['admin', 'user', ''] },
    { key: 'UserList', label: 'Usuarios', icon: <MaterialIcons name="people" size={24} color="white" />, roles: ['admin'] },
    { key: 'Inquilinos', label: 'Inquilinos', icon: <MaterialCommunityIcons name="account-group" size={24} color="white" />, roles: ['admin'] },
    { key: 'Inmuebles', label: 'Inmuebles', icon: <MaterialIcons name="apartment" size={24} color="white" />, roles: ['admin', 'user', ''] },
  ];

  const filteredItems = roles.length ? items.filter(item => item.roles.some(role => roles.includes(role))) : items.filter(item => item.roles.includes(''));

  return (
    <View style={[styles.menuContainer, isSmallScreen && styles.menuContainerSmall]}>
      <ScrollView contentContainerStyle={styles.menuOptions} horizontal={isSmallScreen}>
        {filteredItems.map(item => (
          <TouchableOpacity
            key={item.key}
            style={[styles.menuItem, isSmallScreen && styles.menuItemSmall]}
            onPress={() => {
              navigation.navigate(item.key);
              setShowMenu(false);
            }}
          >
            {item.icon}
            <Text style={[styles.menuItemText, isSmallScreen && styles.menuItemTextSmall]}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    position: 'absolute',
    top: 180,
    left: 0,
    width: '50%',
    height: '100%',
    backgroundColor: '#242323',
    paddingTop: 10,
    elevation: 11,
  },
  menuContainerSmall: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 'auto', 
    width: '100%', 
  },
  menuOptions: {
    alignItems: 'center',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderRadius: 6,
  },
  menuItemSmall: {
    flexDirection: 'column', 
    marginBottom: 5, 
    width: 90,
  },
  menuItemText: {
    color: 'white',
    fontSize: 28,
    marginLeft: 10,
  },
  menuItemTextSmall: {
    fontSize: 13, 
    marginLeft: 0, 
    textAlign: 'center',
  },
});

export default Menu;
