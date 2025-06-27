import { Image,  ScrollView,  Text,  TextInput,  View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
// import { ImageBackground } from 'react-native/types_generated/index'

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/icons/login_back.jpg')} resizeMode='contain' style={styles.bgBack}></Image>
      <View style={styles.loginContainer}>
         <View style={styles.toContainer}>
          <Text style={styles.welcomeText}>WelCome </Text>
            <Text style={styles.toText}>To</Text>
         </View>
         <Text style={styles.loginText}>Login</Text> 
      </View>
      <View style={styles.inputWrapper}>
          <View style={styles.inputContainer}>
            <Image source={require('../../assets/icons/email.png')} style={styles.emailIcon}/>
            <ScrollView keyboardShouldPersistTaps={'always'}>
             <TextInput style={[styles.input,styles.shadowProp]} placeholder='Enter the email'/>
             </ScrollView>
          </View>
      </View>
      <View style={styles.inputWrapper}>
          <View style={styles.inputContainer}>
            <Image source={require('../../assets/icons/hide.png')} style={styles.emailIcon}/>
             <TextInput style={[styles.input,styles.shadowProp]} placeholder='Enter the email'/>
          </View>
      </View>
      <View>
      </View>
      <View style={styles.socialContainer}>
         <Image source={require("../../assets/icons/instagram.jpg")} style={styles.socialIcon}></Image>
         <Image source={require("../../assets/icons/linkedin.jpg")} style={styles.socialIcon}></Image>
         <Image source={require("../../assets/icons/whatsapp.jpg")} style={styles.socialIcon}></Image>
      </View>
         <View style={styles.footerWrapper}>
             <Text>Don't have an aocount?</Text>
             <Text style={styles.signUp}>Signin</Text>
         </View>
    </SafeAreaView>
  )
}

export default Login

