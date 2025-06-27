import { Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import {styles} from "./styles"
import { ThemeContext } from '../../context/theme-context'
import { useSingleton } from '../../hooks/context-hooks'
// import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
// import { decreament, increament } from '../../reducer/counter/counterSlice'

const HomeScreen = () => {
  const theme = useContext(ThemeContext)
  const {refreshToken,token,counter,increamentCounter,decrementCounter} = useSingleton()
  console.log(refreshToken,"refreshtoken")
  // const selector = useAppSelector((state)=>state.counter.value)
  // const dispatch = useAppDispatch()
  // console.log(selector,"selector")

  // const incrementBtn = () =>{
  //  dispatch(increament())
  // }

  // const decreamentBtn = () =>{
  //   dispatch(decreament())
  // }
  
  return (
    <View style={[styles.container,theme === "dark" ? styles.bg : styles.bg1]}>
      <Text>Home</Text>
      {/* <Text>{selector}</Text> */}
      {/* <TouchableOpacity style={styles.button} onPress={incrementBtn} > */}
      <TouchableOpacity style={styles.button}>
        <Text> Click +</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.button} onPress={decreamentBtn}> */}
      <TouchableOpacity style={styles.button}>
        <Text> Click -</Text>
      </TouchableOpacity>
      <Text>{refreshToken}</Text>
      <Text>{token}</Text>
       <TouchableOpacity style={styles.button} onPress={increamentCounter}>
        <Text> incre +</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.button} onPress={decrementCounter}>
        <Text> decre -</Text>
      </TouchableOpacity>
      <Text>{counter}</Text>
    </View>
  )
}

export default HomeScreen

