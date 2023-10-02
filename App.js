import { StatusBar } from 'expo-status-bar';
import { useState ,} from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-web';
import Mybutton from './src/component/button';
import Router from './src/Routers';
import { Provider } from 'react-redux';
import { store } from './src/Redux/store';
import StackRouter from './src/Routers/StackNavigator';



export default function App() {

  return (

   
    <Provider store={store}> 
      
      <Router></Router>
      
    </Provider>
   
    // <SafeAreaView style={styles.container}>
    //   <Text style={styles.titleText}> TO DO LIST </Text>
    //   <Text>Title</Text>
    //   <TextInput
    //     style={styles.input}
    //     onChangeText={(val) => {
    //     setTodo(val);
    //     }}
    //   />
    //   <Text>Description </Text>
    //   <TextInput

    //     style={styles.input}

    //   />
    //   <Mybutton style={styles.button}
    //     handlePress={handleToDo}
    //     text="Add To Do"
    //   />



    // </SafeAreaView>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     justifyContent: "flex-start",
//     alignItems: "center",
//     marginVertical: 60,
//   },

//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     borderColor: "#777",
//     borderRadius: 15,
//     width: 200,
//   },

//   button: {
//     alignItems: 'center',
//     backgroundColor: '#D5D6AA',
//     padding: 10,
//     width: 200,
//     borderRadius: 15,
   
//   },

//   titleText: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginBottom: 50,

//   },


// });


