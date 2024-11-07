import { View , ImageBackground} from 'react-native';
import styles from '../lib/styles';
import background from '../assets/background.png'

console.log(require('../assets/background.png'))

export default function Background({children}) {
  return (
    <View style={styles.container}>
        <ImageBackground
            style={styles.background}
            source={background}
        >
            {children}
        </ImageBackground>
    </View>
  );
}