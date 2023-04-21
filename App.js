import 'react-native-gesture-handler';
import { StyleSheet,ToastAndroid } from "react-native"
import { createContext,useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/home/index'
import BackButton from './components/BackButton';
import ProfileButton from './components/ProfileButton';

library.add(faArrowLeft, faUser)

export const Context = createContext();

export default function App() {

  const [status,setStatus] = useState("loading")

  const Stack = createStackNavigator();

  return (

    <Context.Provider value={{status:status,setStatus:setStatus}}>
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
    </Context.Provider>

  );
}

const styles = StyleSheet.create({
  navigator: {
    backgroundColor: "rgba(255,255,255,.05)",
  }
});