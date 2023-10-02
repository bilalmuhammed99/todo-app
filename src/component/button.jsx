import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const Mybutton = ({style,text,handlePress}) => {
  return (
    <TouchableOpacity 
      style={style}
      onPress={handlePress}
    >
     <Text style={{fontWeight:"500", fontSize:24 ,color:"black"}}>{text}</Text> 
    </TouchableOpacity>
  )
}

export default Mybutton ;

