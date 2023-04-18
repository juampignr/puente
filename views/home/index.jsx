
import { Text, View, StyleSheet } from 'react-native';
import Mapbox from '@rnmapbox/maps';

Mapbox.setAccessToken('pk.eyJ1IjoianBiZWhsZXIiLCJhIjoiY2xnZ21hZTlkMGQwOTNlbzI3OGFpcGNibSJ9.GFbUH1k2Rw_wVTVGVaJcCw');

export default function Home({ navigation }) {
    return (
        <View style={styles.page}>
        <View style={styles.container}>
          <Mapbox.MapView style={styles.map} />
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