import { View, ImageBackground } from 'react-native';
import styles from '../lib/styles';
import background from '../assets/background.png';

export default function Background({ children }) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground style={[styles.background, { flex: 1 }]} source={background}>
        {children}
      </ImageBackground>
    </View>
  );
}
