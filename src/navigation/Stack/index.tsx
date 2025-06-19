import React from 'react'
import { RootStackParamsList } from '../Root';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../../screens/splash-screen';
import HomeScreen from '../../screens/home';

const Stack = createNativeStackNavigator<RootStackParamsList>();

const StackNavigation = () => {
  return (
     <Stack.Navigator initialRouteName='splashScreen' screenOptions={{headerShown:false}}>
       <Stack.Screen  name="splashScreen" component={SplashScreen}></Stack.Screen>
       {/* <Stack.Screen  name="signup" component={Signup}></Stack.Screen> */}
       <Stack.Screen  name="home" component={HomeScreen}></Stack.Screen>
       {/* <Stack.Screen  name="dasboard" component={Dasboard}></Stack.Screen> */}
     </Stack.Navigator>
  )
}

export default StackNavigation
