import React, { useEffect } from 'react'
import {styles} from "./styles"
import { ImageBackground } from 'react-native'
import { RootStackParamsList } from '../../navigation/Root';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamsList, "splashScreen">;

const SplashScreen = (props:Props) => {
    const {navigation} = props
    useEffect(()=>{
       const timer =  setTimeout(()=>{
            navigation.navigate("login")
        },2000)

        return ()=>{
            clearTimeout(timer)
        }

    },[])

  return (
    // <View style={styles.container}>
    //   <Text>SplashScreen</Text>
    // </View>
    <ImageBackground source={require('../../assets/icons/back4.jpg')} style={styles.bgImage} resizeMode='cover'></ImageBackground>
  )
}

export default SplashScreen

