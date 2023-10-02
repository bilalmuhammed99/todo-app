import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Divider = ({color}) => {
  return (
    <View style={styles.divider}>
      
    </View>
  )
}

export default Divider

const styles = StyleSheet.create({
    divider:{
        marginVertical: 10,
        height:"2px",
        width:"85%",
        backgroundColor:"gray",
    }
})