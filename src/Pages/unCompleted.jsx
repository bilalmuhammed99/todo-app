import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { completeTodo, removeTodo } from '../Redux/TodoSlice';
import { LinearGradient } from 'expo-linear-gradient';


const unCompleted = () => {
  const todo = useSelector((state)=> state.todoState.value); 
    const unCompletedTodoList = todo.filter((item)=> item.isDone == false);
   
    const dispatch = useDispatch();
    const handleDelete = (id)=>{
        dispatch(removeTodo({id}))
    }
    const handleStatus = (id)=>{
        dispatch(completeTodo({id}))
    }
  return (
  <> 
  {unCompletedTodoList.map((item)=>
  <View key={item.id} style={styles.container}>
  <LinearGradient 
     // Button Linear Gradient 
     
     colors={ ['#000000', '#434343',]}
     start={{ x: 0, y: 1 }}
     end={{ x: 1, y: 1 }}
     style={styles.container}>

    
 <TouchableOpacity onPress={()=>{handleStatus(item.id); }}>
                 <Ionicons name={item.isDone ? "checkmark-circle" :  "checkmark-circle-outline"}  size={32} color="white" />  
                 </TouchableOpacity> 
 <Text style={{fontSize:24 , fontWeight:"700" , color:"white"}}>{item.title}</Text>
 <Text style={{fontSize:20 ,color:"white"}}>{item.description}</Text>
 <Text style={{fontSize:20 , fontWeight:"700" , color:"#BE93C5"}} >{item.date}</Text>
 <TouchableOpacity onPress={()=>{handleDelete(item.id)}}>
 <Ionicons name="trash-bin" size={32} color="white" /> 
                 </TouchableOpacity>
                 </LinearGradient>
</View>)}

  </>
  )
}

export default unCompleted

const styles = StyleSheet.create({
    container:{
      
      flexDirection:"column",
      paddingVertical:32,
      paddingHorizontal:16,
      borderRadius:6,
      marginHorizontal:12,
      marginVertical:12,
      width:350,
      alignItems:"center",
      justifyContent:"space-around",
      backgroundColor:"#99B2DD",
      height:200,
    }
})