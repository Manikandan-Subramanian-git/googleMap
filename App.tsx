/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import { NewAppScreen } from '@react-native/new-app-screen';
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import GoogleMap from './src/screens/googlemap/index.tsx';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigation/Stack/index.tsx';
import { Provider } from 'react-redux';
import { store } from './src/store/store.ts';
import { useState } from 'react';
import { IThemeProvider, ThemeContext } from './src/context/theme-context/index.tsx';
import { Button, Text, TouchableOpacity } from 'react-native';
import { SingletonProvider } from './src/provider/singleton-provider.tsx';


function App() {
  // const isDarkMode = useColorScheme() === 'dark';

  const [theme,setTheme] = useState<IThemeProvider>('dark')

  const toggleTheme = () =>{
    setTheme((prev)=> (prev === "dark" ? "light" : "dark") )
  }

  return (
    // <View style={styles.container}>
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //   <NewAppScreen templateFileName="App.tsx" />
    // </View>
    <NavigationContainer>
    {/* <GoogleMap/> */}
    {/* <Provider store={store}> */}
    {/* <ThemeContext.Provider value={theme}> */}
    {/* <TouchableOpacity onPress={toggleTheme}><Text>theme</Text></TouchableOpacity> */}
    <SingletonProvider>
     <StackNavigation/>
     </SingletonProvider>
     {/* </ThemeContext.Provider> */}
    {/* </Provider> */}
    </NavigationContainer>  
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

export default App;
