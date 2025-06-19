import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

// lat vertical zoom
// long harizoonal zoom

const GoogleMap = () => {
  return (
    // <View>
    //   <Text>index</Text>
    // </View>
    <MapView 
    style={styles.mapView} 
    provider={PROVIDER_GOOGLE} 
    region={{
        latitude:13.098149638099338, //north -south position
        longitude:80.26901089390351,  // east - west  position
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
    </MapView>
  )
}

export default GoogleMap

const styles = StyleSheet.create({
    mapView:{
        flex:1,
    }

})