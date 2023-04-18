
import { Text, View, StyleSheet } from 'react-native';


export default function Home({ navigation }) {
    return (
        <View style={styles.page}>
        <View style={styles.container}>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    page: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      height: 300,
      width: 300,
    },
    map: {
      flex: 1
    }
});