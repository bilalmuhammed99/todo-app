import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";

const todosStorage = AsyncStorage.getItem("todos") ;

export const todoSlice = createSlice({
    name : "todo" ,
    initialState : { value : [
        {
            id : Date.now(),
            date: new Date().toLocaleTimeString(),
            title: "todoTitle",
            description:"details", 
            isDone : false,
            }
           
    ] }, 
    reducers: { 
           addTodo :(state , action)=>{  
            const {todoTitle,details} = action.payload;
            if(todoTitle) {const singleToDo = {
                id : Date.now(),
                date: new Date().toLocaleTimeString(),
                title: todoTitle,
                description:details, 
                isDone : false,
                }
                const allTodos = [...state.value, singleToDo];
                state.value = allTodos; 
                // AsyncStorage.setItem("todos",JSON.stringify(allTodos));
            }    // state.value = [0,1,2,3]; // console.log(state.value);
           } ,
           removeTodo:(state , action)=>{
            const {id} = action.payload;
            state.value = state.value.filter(item => item.id !== id ) ;
           },
           completeTodo:(state,action)=>{
            const { id } = action.payload;
            const todo = state.value.find(res => res.id === id);
            if (todo) {
                todo.isDone = !todo.isDone;
           }
        }       
    }
})
const todoSliceReducer = todoSlice.reducer;
export  const {addTodo,removeTodo,completeTodo} = todoSlice.actions ; 
export default todoSliceReducer ;