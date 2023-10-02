import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Test = ({todos}) => {
  return (
    <View>
     {todos.map(todo =>{
        <Text key={todo.id}>{todo.title}</Text>
     })} 
{/* 
     <Text>{todos[0].title}</Text> */}
    </View>
  )
}

export default Test

const styles = StyleSheet.create({})