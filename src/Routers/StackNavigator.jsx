import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Pages/Home';
import ToDoDetails from '../Pages/ToDo-Details';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Completed from '../Pages/Completed';

const Stack = createNativeStackNavigator();

export default function StackRouter() {
    return (
        <NavigationContainer>
            <Stack.Navigator  screenOptions={{ headerStyle: { backgroundColor: "#D5D6AA" }, headerShown:true } }>
                <Stack.Screen name='Home' component={Home}
                 options={{
                    headerTitle: "Home",
                    headerTitleStyle: { color: "black", fontWeight: 'bold' },
                    headerTitleAlign: "center"
                }} ></Stack.Screen>
                <Stack.Screen name='ToDo' component={ToDoDetails} 
                options={{
                    StackBarIcon:"",
                    headerTitle: "ToDo Details",
                     headerBackTitle: "Back To Home",
                     headerTitleStyle: {
                        color: "white   ",
                        
                    }
                    ,
                    headerTitleAlign: "center",
                }}  ></Stack.Screen>

<Stack.Screen name='Completed' component={Completed} 
                options={{
                    StackBarIcon:"",
                    headerTitle: "ToDo Details",
                     headerBackTitle: "Back To Home",
                     headerTitleStyle: {
                        color: "white   ",
                        
                    }
                    ,
                    headerTitleAlign: "center",
                }}  ></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}