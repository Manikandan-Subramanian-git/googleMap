import { StyleSheet } from "react-native";

// const screenWidth = Dimensions.get('window').width
// const screenHeight = Dimensions.get('window').height

// const width = (screenWidth - 16 * 2) / 2

export const styles = StyleSheet.create({
    cardImg:{
      position:"relative",
       width:170,
       height:150,
       borderRadius:10,
       
    },
    cardContainer:{
    //   backgroundColor:"yellow",
    //   paddingVertical:20,
    //   paddingHorizontal:30,
      borderTopEndRadius:10,
      marginHorizontal:10,
      marginTop:10
    },
    liveContainer:{
     flexDirection:"row",
     justifyContent:"flex-end",
     marginTop:12,
     marginRight:10
    },
    liveContent:{
     paddingVertical:8,
     paddingHorizontal:12,
     backgroundColor:"red",
     borderRadius:20,
    },
    liveText:{
        color:"white"
    },
    bottomContainer:{
        position:"absolute",
        bottom:20,
        left:10
    },
    bottonContent:{
      flexDirection:"row",
      gap:6,
      marginTop:4
    },
    videoImg:{
       width:20,
       height:20 
    },
    meditationText:{
        color:"red",
        fontSize:20
    }
})