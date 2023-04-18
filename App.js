import 'react-native-gesture-handler';
import { createContext,useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/home/index'

export const Context = createContext();

export default function App() {

  const [status,setStatus] = useState("loading")
  const Stack = createStackNavigator();

  return (

    <Context.Provider value={{status:status,setStatus:setStatus}}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Context.Provider>

  );
}
