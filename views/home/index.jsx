
import { Text,View,StyleSheet,ToastAndroid,TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import { Linking } from 'react-native';
import globalStyles from '../../styles/globalStyles';
import Toast from 'react-native-root-toast';
import useAsyncEffect from 'use-async-effect';
import MapView from 'react-native-maps';
import SearchBar from '../../components/SearchBar';
import * as Location from "expo-location"


export default function Home({navigation}) {

    const [location, setLocation] = useState({latitude:-34.6037345,longitude:-58.3841453});

    useAsyncEffect(async () => {
          
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status == 'granted') {

        let locationObject = await Location.getCurrentPositionAsync({});

        setLocation({...locationObject.coords})

        return

      }else{
        
        if(!status.canAskAgain)
          Linking.openSettings();

        Toast.show('La app no puede funcionar sin permisos de ubicación!', {
          duration: 5000,
          backgroundColor: globalStyles.toast.backgroundColor,
          textColor: globalStyles.toast.color,
          position: Toast.positions.CENTER
        })
      }

    }, []);

    return (
      <View style={styles.container}>
          <MapView style={styles.map} showsUserLocation={true} region={{
            ...location,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          mapPadding={{
            top: 0,
            right: 0,
            bottom: 100,
            left: 0
           }}
          />
          <SearchBar />  
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