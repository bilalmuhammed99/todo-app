import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Pages/Home';
import ToDoDetails from '../Pages/ToDo-Details';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Completed from '../Pages/Completed';
import unCompleted from '../Pages/unCompleted';
import StackRouter from './StackNavigator';
const tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Router() {
    return (
        
        <NavigationContainer >
            
            <tab.Navigator  screenOptions={{ headerStyle: { backgroundColor: "#131722" } }}  >
                <tab.Screen name='Home' component={Home}
                 options={{
                    headerTitle: "Home",
                    headerTitleStyle: { color: "white", fontWeight: 'bold' },
                    headerTitleAlign: "center"
                  }} ></tab.Screen>
                <tab.Screen name='ToDo' component={ToDoDetails} 
                options={{
                    tabBarIcon:"",
                    headerTitle: "ToDo Details",
                     headerBackTitle: "Back To Home",
                     headerTitleStyle: {
                        color: "white   ",
                        
                    }
                    ,
                    headerTitleAlign: "center",
                }}  ></tab.Screen>

                <tab.Screen name='Completed' component={Completed} 
                options={{
                    tabBarIcon:"",
                    headerTitle: "ToDo Details",
                     headerBackTitle: "Back To Home",
                     headerTitleStyle: {
                        color: "white   ",
                    }
                    ,
                    headerTitleAlign: "center",
                }}  ></tab.Screen>
                <tab.Screen name='unCompleted' component={unCompleted} 
                options={{
                    tabBarIcon:"",
                    headerTitle: "ToDo Details",
                     headerBackTitle: "Back To Home",
                     headerTitleStyle: {
                        color: "white   ",
                    }
                    ,
                    headerTitleAlign: "center",
                }}  ></tab.Screen>
            </tab.Navigator>
        </NavigationContainer>
    );
}