import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MapView, { Circle, Marker, Polygon, Polyline, PROVIDER_GOOGLE } from 'react-native-maps'

// lat vertical zoom
// long harizoonal zoom

interface GoogleMapProps{
   latitude:number, //north -south position
   longitude:number,  // east - west  position,
   title:string,
   description:string
}

const GoogleMap = () => {
  const [mutlipleData,setMultipleData] = useState<GoogleMapProps[]>([
    {
       latitude:11.030289776854358, //north -south position
        longitude:77.28601149381312,  // east - west  position,
        title:"dkjjd",
        description:"kddlkf"
    },
    {
       latitude:10.995108257408727, //north -south position
        longitude:77.28691658340752,  // east - west  position,
        title:"wekw",
        description:"eoriepi"
    },
  ])

  const renderMaps = ({title,description,latitude,longitude}:GoogleMapProps,index:number) =>{
    return(
      <View key={index}>
      <Marker draggable  coordinate={{
        latitude: latitude,
        longitude: longitude,
      }}
      title={title}
      description={description}
       onDragEnd={(e) => console.log({ x: e.nativeEvent.coordinate })}
       />
       <Circle center={{
          latitude: 11.030289776854358,
          longitude: 77.28601149381312
        }} radius={200} strokeColor='blue' fillColor='#EBF5EB'/>
        {/* <Polyline strokeColor='red' strokeWidth={2} coordinates={[{ latitude: 11.030289776854358,
          longitude: 77.28601149381312},{ latitude:10.995108257408727, //north -south position
        longitude:77.28691658340752, }]} /> */}
        <Polygon strokeColor='red' fillColor='#EBF5EB' strokeWidth={2} coordinates={[{ latitude: 10.996352120153958,
          longitude: 77.28338043388986},{ latitude:11.024985748808795, //north -south position
        longitude:77.12483851011653},{latitude:10.996104168030259,longitude: 77.13828184530975},{latitude:10.944905505244456,longitude: 77.16847759733791}]} />
       </View>
    )
  }

  return (
    // <View>
    //   <Text>index</Text>
    // </View>
    <MapView 
    style={styles.mapView} 
    provider={PROVIDER_GOOGLE} 
    region={{
        latitude:11.030289776854358, //north -south position
        longitude:77.28601149381312,  // east - west  position
        latitudeDelta:0.015, // vertical zoom
        longitudeDelta:0.0121 // harizondal zoom
        }}>
      <Marker coordinate={{
        latitude:13.098149638099338, //north -south position
        longitude:80.26901089390351,  // east - west  position,
      }}
      title='My City'
      description='Here I Live'
      />
      <Marker coordinate={{
        latitude:13.077383599164223, //north -south position
        longitude:79.67799954151491,  // east - west  position,
      }}
      title='My City'
      description='Here I Live'
      />
      {mutlipleData.map(renderMaps)}
    </MapView>
  )
}

export default GoogleMap

const styles = StyleSheet.create({
    mapView:{
        flex:1,
    }

})