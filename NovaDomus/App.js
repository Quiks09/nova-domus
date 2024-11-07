import '@expo/metro-runtime';
import { Text, View } from 'react-native';
import styles from './lib/styles';
import Login from './screens/LoginScreen';
import Header from './components/Header';

export default function App() {
  return (
      <View style={styles.container}>
        <Header />
        <Login />
      </View>
  );
}


