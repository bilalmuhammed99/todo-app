import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Mybutton from '../component/button';
import { LinearGradient } from 'expo-linear-gradient';


const ToDoDetails = () => {
  const navigation = useNavigation();
  const prams = useRoute().params;
  const handlePress = ()=>{
    navigation.navigate("Completed",prams);
  }
  return (
    <LinearGradient  colors={ ['#000000', '#434343',]} style={styles.container}> 
    <View>
      <Text style={styles.title}>{prams.title}</Text>
      <Text style={styles.details} >{prams.description}</Text>
      <Text style={styles.details} >{prams.date}</Text>
      <Mybutton text={"Done"} style={styles.button} handlePress={handlePress}/>
    </View>
    </LinearGradient>
  )
}

export default ToDoDetails

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"flex-start",
    alignItems:"center",
    paddingVertical:32,
    paddingHorizontal:16,
    borderRadius:10,
    marginHorizontal:12,
    marginVertical:60,
    width:350,
    // alignItems:"center",
    backgroundColor:"#9ABCA7",
    height:200,
  },
  title:{
    fontSize:70,
    marginBottom:20,
    fontWeight:700,
    // backgroundColor:"white",
    padding:10,
    color:"white",
    // borderRadius: 10 ,
    // overflow:"hidden",
  } , 
  details:{
    fontSize:30,
    color:"white",
    marginBottom:20,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#D5D6AA',
    padding: 10,
    width: 200,
    marginTop:30,
    borderRadius: 15,
   
  },

})