// Basic task 
import { createSlice } from '@reduxjs/toolkit'
import { TaskInterface } from '@/models';

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
    }
  }
});

export const {addTask} = tasksSlice.actions;

export default tasksSlice.reducer;
