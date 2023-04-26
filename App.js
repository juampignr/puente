import 'react-native-gesture-handler';
import { StyleSheet,ToastAndroid } from "react-native"
import { createContext,useState } from 'react';
import useAsyncEffect from 'use-async-effect';
import { NavigationContainer } from '@react-navigation/native';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlassLocation'
import { createStackNavigator } from '@react-navigation/stack';
import { RootSiblingParent } from 'react-native-root-siblings';
import { useFonts, Voltaire_400Regular } from '@expo-google-fonts/voltaire';
import { createRealmContext } from '@realm/react';
import Realm from 'realm';
import Home from './views/home/index'
import BackButton from './components/BackButton';
import ProfileButton from './components/ProfileButton';
import AppLoading from 'expo-app-loading';

library.add(faArrowLeft, faUser, faMagnifyingGlassLocation)

export const Context = createContext();

const reviewType = {
  name: 'reviewType',
  properties: {
    total: "int",
    reviews: "int",
  },
}

const realmConfig = {
  schema: [Profile,User],
};

const {RealmProvider, useRealm, useObject, useQuery} = createRealmContext(realmConfig);

class Parking extends Realm.Object {
  static schema = {
    name: 'parking',
    properties: {
      _id: { type: "string", indexed: true },
      name: 'string',
      totalCarSpaces: 'int',
      totalTruckSpaces: 'int',
      currentSpaces: 'int',
      scanBounds: { type: "list", objectType: "string" },
      stars: 'int?',
      user: "User"
    },
    primaryKey: '_id',
  };
}

class User extends Realm.Object {
  static schema = {
    name: 'user',
    properties: {
      _id: "objectId",
      fullName: 'string',
      securityStars: { type: "object", objectType: "reviewType" },
      qosStars: { type: "object", objectType: "reviewType" },
      profilePicture: 'string?'
    },
    primaryKey: '_id',
  };
}

export default function App() {

  const [status,setStatus] = useState("loading")
  const [fontsLoaded] = useFonts({
    Voltaire_400Regular,
  });

  const Stack = createStackNavigator();

  useAsyncEffect(async () => {

    if (status.includes("error")){
      //Do some awesome async error handlin
    }
  },[status])

  if (!fontsLoaded) {

    return <AppLoading />;
    
  } else {

    return (

      <Context.Provider value={{status:status,setStatus:setStatus}}>
      <RealmProvider>
        <RootSiblingParent>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ 
            title: "",
            headerStyle: {
              height: 150
            },
            headerTransparent:true,
            headerLeft: () => (
              <BackButton/>
            ),
            headerRight: () => (
              <ProfileButton/>
            )
          }}>

            <Stack.Screen
              name="Home"
              component={Home}
            />
          </Stack.Navigator>
        </NavigationContainer>
        </RootSiblingParent>
      </RealmProvider>
      </Context.Provider>

    )
  }
}

const styles = StyleSheet.create({
  navigator: {
    backgroundColor: "rgba(255,255,255,.05)",
  }
});