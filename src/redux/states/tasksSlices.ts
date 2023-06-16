// Basic task 
import { createSlice } from '@reduxjs/toolkit'
import { TaskInterface } from '@/models';

const initialState: TaskInterface[] = [];

export const tasksSlice = createSlice({
  name: 'taskSlice',
  initialState: initialState, 
  reducers:{

  }
});

export default tasksSlice.reducer;
