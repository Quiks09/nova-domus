import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Header from './components/Header';
import Menu from './components/Menu';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import UserListScreen from './screens/UserListScreen';
import InquilinosScreen from './screens/InquilinosScreen';
import InmueblesScreen from './screens/InmueblesScreen';

const Stack = createStackNavigator();

export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [roles, setRoles] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Header showMenu={showMenu} setShowMenu={setShowMenu} isAuthenticated={isAuthenticated} />

        {showMenu && (
          <TouchableWithoutFeedback onPress={() => setShowMenu(false)}>
            <View style={styles.overlay}>
              <Menu roles={roles} setShowMenu={setShowMenu} />
            </View>
          </TouchableWithoutFeedback>
        )}

        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
          >
            {() => (
              <LoginScreen
                setRoles={setRoles}
                setIsAuthenticated={setIsAuthenticated}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="UserList" component={UserListScreen} options={{ title: 'Lista de Usuarios' }} />
          <Stack.Screen name="Inquilinos" component={InquilinosScreen} options={{ title: 'Lista de Inquilinos' }} />
          <Stack.Screen name="Inmuebles" component={InmueblesScreen} options={{ title: 'Lista de Inmuebles' }} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    elevation: 9,
  },
});
