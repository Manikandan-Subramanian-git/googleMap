import { FlatList, Image, ImageBackground, Text, View } from 'react-native'
import React from 'react'
import {styles} from "./styles"
import { CUSTOM_CARD_DATA, ICardData } from '../../utils/data/card'

const CardPage = () => {

    const MedidationCard = ({title,image,date}:ICardData) =>{
        return(
            <View style={styles.cardContainer}>
            <ImageBackground style={styles.cardImg} source={image}>
              <View style={styles.liveContainer}> 
                <View style={styles.liveContent}>
                  <Text style={styles.liveText}>Live</Text>  
                </View>
              </View>
              <View style={styles.bottomContainer}>
                  <Text style={styles.meditationText}>{title}</Text>
                  <View style={styles.bottonContent}>
                    <Image source={require('../../assets/icons/video-camera.png')} style={styles.videoImg}></Image>
                     <Text>{date}</Text>
                  </View>
              </View>
            </ImageBackground>
           </View>
        )
    }

  return (
    // <View style={styles.container}>
    //   <Text>index</Text>
    // </View>
    <View>
    <FlatList data={CUSTOM_CARD_DATA} keyExtractor={item=>item.id} renderItem={({item})=>(<MedidationCard {...item}></MedidationCard>)} showsVerticalScrollIndicator={false} numColumns={2} columnWrapperStyle={{
      marginBottom: 5,
      justifyContent:"space-between"
    }}></FlatList>
   </View>
  )
}

export default CardPage

