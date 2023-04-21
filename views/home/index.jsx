
import { Text,View,StyleSheet,ToastAndroid } from 'react-native';
import { useEffect, useState} from 'react';
import MapView from 'react-native-maps';
import * as Location from "expo-location"

export default function Home({navigation}) {

    const [location, setLocation] = useState({});
    const [errorMsg, setErrorMsg] = useState({});

    useEffect(() => {
        (async () => {
          
          const { background } = await Location.requestBackgroundPermissions();

          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          ToastAndroid.show(JSON.stringify(location),ToastAndroid.LONG)

          setLocation(location);
        })();
    }, []);

    return (
      <View style={styles.container}>
          <MapView style={styles.map} showsUserLocation={true} region={{
            latitude: location.coords ?? -34.6037345,
            longitude: location.coords ?? -58.3841453,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}/>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});