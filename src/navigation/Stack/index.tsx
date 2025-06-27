import React from 'react'
import { RootStackParamsList } from '../Root';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../../screens/splash-screen';
import HomeScreen from '../../screens/home';
import GoogleMap from '../../screens/googlemap/index.tsx';
import LoginScreen from '../../screens/login-screen/index.tsx';
import CardPage from '../../screens/cards/index.tsx';

const Stack = createNativeStackNavigator<RootStackParamsList>();

const StackNavigation = () => {
  return (
     <Stack.Navigator initialRouteName='card'  screenOptions={{headerShown:false}}>
       <Stack.Screen  name="splashScreen" component={SplashScreen}></Stack.Screen>
       {/* <Stack.Screen  name="signup" component={Signup}></Stack.Screen> */}
       <Stack.Screen  name="home" component={HomeScreen}></Stack.Screen>
       <Stack.Screen  name="googleMap" component={GoogleMap}></Stack.Screen>
       <Stack.Screen  name="login" component={LoginScreen}></Stack.Screen>
       {/* <Stack.Screen  name="dasboard" component={Dasboard}></Stack.Screen> */}
       <Stack.Screen  name="card" component={CardPage}></Stack.Screen>
     </Stack.Navigator>
  )
}

export default StackNavigation
