import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Api } from '../lib/api';

const LoginScreen = ({ setRoles, setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    const body = { username, password };

    Api.post(`login`, { body, autoCheck: false })
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          Alert.alert('Error', json.message || "Error desconocido");
        } else if (json.authorizationToken) {
          const auth = 'Bearer ' + json.authorizationToken;
          const roles = json.roles || [];
          Api.defaultHeaders.Authorization = auth;

          setRoles(roles);
          setIsAuthenticated(true);

          navigation.navigate('Home');
        } else {
          Alert.alert('Error', json.message || "Error desconocido");
        }
      })
      .catch(error => {
        Alert.alert('Error', String(error));
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.login}>
        <Text style={styles.loginTitle}>Inicia Sesión</Text>

        <View style={styles.inputBox}>
          <Text style={styles.label}>Usuario</Text>
          <TextInput
            placeholder="Ingrese su usuario"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
          />
          <FontAwesome name="user" style={styles.icon} />
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            placeholder="Ingrese su contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPwd}
            style={styles.input}
          />
          <TouchableOpacity onPress={() => setShowPwd(!showPwd)} style={styles.icon}>
            {showPwd ? (
              <Feather name="eye" style={styles.icon} />
            ) : (
              <Feather name="eye-off" style={styles.icon} />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.rememberContainer}>
          <Text style={styles.rememberText}>Recordarme</Text>
        </View>

        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <View style={styles.newAccount}>
          <Text style={styles.newAccountText}>¿Nuevo Usuario?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerButton}>Registrarme</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// Aquí está la definición de 'styles'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    backgroundColor: 'aliceblue',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 30,
    width: '90%',
    maxWidth: 500,
    alignItems: 'center',
    // Las propiedades 'boxShadow' no funcionan en React Native.
    // Puedes usar 'elevation' en Android o 'shadow*' en iOS.
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5, // Para Android
  },
  loginTitle: {
    fontSize: 28,
    fontWeight: '500',
    color: '#ff8243',
    marginBottom: 20,
  },
  inputBox: {
    width: '100%',
    marginBottom: 15,
    position: 'relative',
  },
  label: {
    backgroundColor: '#ff8243',
    color: 'white',
    paddingHorizontal: 8,
    borderRadius: 5,
    position: 'absolute',
    top: -10,
    left: 15,
    zIndex: 10,
    fontSize: 14,
  },
  input: {
    width: '100%',
    padding: 10,
    paddingLeft: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  icon: {
    position: 'absolute',
    right: 15,
    top: '50%',
    transform: [{ translateY: -10 }],
    fontSize: 20,
    color: '#09616e',
  },
  rememberContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  rememberText: {
    fontSize: 14,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#179BAE',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginVertical: 15,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  newAccount: {
    alignItems: 'center',
    marginTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    width: '100%',
    paddingTop: 15,
  },
  newAccountText: {
    color: '#333',
    fontSize: 14,
  },
  registerButton: {
    color: '#179BAE',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default LoginScreen;
