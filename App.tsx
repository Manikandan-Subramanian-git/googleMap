/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import { NewAppScreen } from '@react-native/new-app-screen';
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import GoogleMap from './src/screens/googlemap.tsx';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigation/Stack/index.tsx';

function App() {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    // <View style={styles.container}>
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //   <NewAppScreen templateFileName="App.tsx" />
    // </View>
    <NavigationContainer>
    {/* <GoogleMap/> */}
    <StackNavigation/>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

export default App;
