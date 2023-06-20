// Basic task 
import { createSlice } from '@reduxjs/toolkit'
import { TaskInterface } from '../../models';

const initialState: TaskInterface[] = [
  {
    id: "1",
    title: "Task1",
    description: "Task1 description", 
    completed:false,
  },
  {
    id: "2",
    title: "Task2",
    description: "Task2 description", 
    completed:false,
  }];

export const tasksSlice = createSlice({
  name: 'taskSlice',
  initialState: initialState,
  reducers: {
    addTask: (state, action) =>{
      // I can add data using: state.push(action.payload);
      state.push(action.payload);
      // Another wasy is: [...state, action.payload];
    },
    updateTask: (state, action) =>{
      const {id, title, description} = action.payload;
      const taskFound = state.find( task => task.id === id);
      if(taskFound) {
        taskFound.title = title;
        taskFound.description = description;
      }
    },
    deleteTask: (state, action) =>{
      const taskFound = state.find( task => task.id === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound),1);
      }
    }
  }
});

export const {addTask, deleteTask, updateTask} = tasksSlice.actions;

export default tasksSlice.reducer;
