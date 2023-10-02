import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity, FlatList, ScrollView, ImageBackground } from 'react-native';
import { Button } from 'react-native-web';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Mybutton from '../component/button';
import Divider from '../component/Divider';
import ToDoItem from '../component/ToDoItem';
import { LinearGradient ,LinearGradientPoint} from 'expo-linear-gradient';
// import Router from './src/Routers';
import Test from '../component/test';
import StackRouter from '../Routers/StackNavigator';
import { useDispatch } from 'react-redux';
import { useSelector, UseSelector } from 'react-redux/es/hooks/useSelector';
import { addTodo, addTodoState } from '../Redux/TodoSlice';



const Home = ({navigation}) => {
    const dispatch = useDispatch();
    const todo = useSelector((state)=> state.todoState.value )
    const allTodos =  AsyncStorage.getItem("todos");
    const [todoList, setTodoList] = useState([]);
    const [todoTitle, setTodoTitle] = useState("");
    const [details, setDetails] = useState("");
        // useEffect(() => {

        //   trackingStoarge();
           
        // }, [])


        // async function removeAllData() {
        //    const itemRemoved = await  AsyncStorage.removeItem("todos",()=>{
        //     console.log(JSON.parse(itemRemoved))
        //    })
        // }
       async function trackingStoarge() {
            const todosStorage = await AsyncStorage.getItem("todos") ;
            if(todosStorage) { 
                console.log(JSON.parse(todosStorage));
                // setTodoList(JSON.parse(todosStorage));
                dispatch(addTodo(todosStorage));
                // dispatch(addTodoState((JSON.parse(todosStorage))))

            }
        }
        // const date = new Date(); 
     const handleToDo = async () => {

        dispatch(addTodo({todoTitle,details}));
        // if(todoTitle) {const singleToDo = {
        //     id : Date.now(),
        //     date: new Date().toLocaleTimeString(),
        //     title: todoTitle,
        //     description:details, 
        //     isDone : false ,
        // }

        // await AsyncStorage.setItem("todos",JSON.stringify([...todoList,singleToDo]))
        // setTodoList([...todoList,singleToDo]); }
        // console.log(allTodos);
          // console.log(todoList);
          //   navigation.navigate("ToDo")
    }

   const handleDetails = (value) => {
    navigation.navigate("ToDo");
    } 

    async function handleDelete(value) {
        const {id} = value.target;
       let newTodoList = todoList.filter( singlItem => singlItem.id != id );
        AsyncStorage.setItem("todos",JSON.stringify(newTodoList));
        // console.log(newTodoList);
        setTodoList(newTodoList);
        console.log(value.target);
        
    }

    async function removeAllStorage() {
      
        await AsyncStorage.setItem("todos","");
        setTodoList([]);
    }
    
  return (
   
     <View style={styles.container}>
      <Text style={styles.titleText}> TO DO LIST </Text>
      <Text>Title</Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => {
            setTodoTitle(val);
            
        }}
      />
      <Text>Description</Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => {
            setDetails(val);
        }}
      />
       <LinearGradient 
        // Button Linear Gradient 
        
        colors={ ['#B993D6', '#8CA6DB',]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={styles.button}>
       <Mybutton 
        handlePress={handleToDo}
        text="Add To Do"
      />
      </LinearGradient>
      
      <Divider />
      <View > 
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
        {todo.length !== 0 && (<ToDoItem  handleDelete={handleDelete} handleOnPressDelete={handleDelete} />  ) }
      </ScrollView>
     
      </View>
        
        <Text> {todo.length} </Text>
        <LinearGradient 
        // Button Linear Gradient 
        
        colors={ ['#B993D6', '#8CA6DB',]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={styles.button}> 
        <Mybutton text={'Rrmove All'} handlePress={removeAllStorage}  />
        </LinearGradient> 
        {/* <Text> {todoTitle} </Text> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: "flex-start",
    alignItems: "center",
    // padding:30,
    paddingVertical:30,
    // 
  },

  input: {
    
    height: 40,
    margin: 12,
    borderWidth: 1.5,
    padding: 10,
    borderColor: "black",
    borderRadius: 10,
    width: 250,
    color:"blavk"
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#D5D6AA',
    padding: 10,
    width: 200,
    marginTop:30,
    borderRadius: 15,
    color:"black",
    shadowColor: 'black',
        shadowOpacity: 0.80,
        shadowOffset: { width: 2, height: 2},
        shadowRadius: 10,
        elevation: 0.5,
  },



  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 50,
    color:"black",},

  scrollView :{
    // marginHorizontal:10,
    // flexDirection:"row", 
  }

});