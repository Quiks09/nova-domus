import '@expo/metro-runtime';
import { Text, View } from 'react-native';
import Background from '../components/Background'
import styles from '../lib/styles';

export default function Login() {
  return (
    <Background>
      <View style={styles.container}>
        <Text> Usuario</Text>
        <Text> Contraseña</Text>
      </View>
    </Background>
  );
}


