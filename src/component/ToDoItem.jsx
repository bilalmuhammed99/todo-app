import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Fragment } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { completeTodo, removeTodo } from '../Redux/TodoSlice';
import { LinearGradient ,LinearGradientPoint} from 'expo-linear-gradient';


const ToDoItem = () => {
    const todo = useSelector((state)=> state.todoState.value); 
    const dispatch = useDispatch();
    const handleDelete = (id)=>{
        dispatch(removeTodo({id}))
    }
    const handleStatus = (id)=>{
        dispatch(completeTodo({id}))
    }
    const navigation = useNavigation();
    return (
        <Fragment> 
            {todo.map(item => 
                <Fragment key={item.id} >
            <LinearGradient // Button Linear Gradient 
             colors={ ['#000000', '#434343',]}
             start={{ x: 0, y: 1 }}
             end={{ x: 1, y: 1 }}
             style={styles.container}>
                <View  style={styles.Mycontainer}> 
                    <TouchableOpacity onPress={()=>{handleStatus(item.id); } }>
                    <Ionicons name={item.isDone ? "checkmark-circle" :  "checkmark-circle-outline"}  size={32} color="white" />  
                    </TouchableOpacity> 
                    <TouchableOpacity id={item.id} onPress={()=>{navigation.navigate("ToDo" , item )}}>
                        <Text style={{fontSize:25 ,color:"white"}}>{item.title}</Text> 
                    </TouchableOpacity> 
                    <TouchableOpacity onPress={()=>{handleDelete(item.id)}}>
                    <Ionicons name="trash-bin" size={32} color="white" /> 
                    </TouchableOpacity>
                </View>
                </LinearGradient>
                </Fragment>

            )}
        </Fragment>
    )
}

export default ToDoItem

const styles = StyleSheet.create({
    container : {
        flex:1,
        flexDirection:"row",
        paddingVertical:32,
        paddingHorizontal:16,
        borderRadius:6,
        marginHorizontal:12,
        marginVertical:60,
        width:350,
        alignItems:"center",
        justifyContent:"space-around",
        // backgroundColor:"#99B2DD",
        height:100,
        shadowColor: 'black',
        shadowOpacity: 0.80,
        shadowOffset: { width: 2, height: 6},
        shadowRadius: 10,
        elevation: 0.5,
    },
    Mycontainer : {
        flex:1,
        flexDirection:"row",
        paddingVertical:32,
        paddingHorizontal:16,
        borderRadius:6,
        marginHorizontal:12,
        marginVertical:60,
        width:350,
        alignItems:"center",
        justifyContent:"space-around",
        // backgroundColor:"#99B2DD",
        height:100,
    },
    button : {
        position:'absolute',
        right:0,
        bottom:0,
        paddingVertical:32,
        paddingHorizontal:16,
        borderRadius:6,
        marginVertical:60,
        width:50,
        alignItems:"center",
        backgroundColor:"#9ABCA7",
        height:50,
    }
})
