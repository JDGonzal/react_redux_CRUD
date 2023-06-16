# react redux CRUD
## _Course based on Youtube video with Fazt Code_
[React y Redux Toolkit CRUD (con TailwindCSS)](https://www.youtube.com/watch?v=w2rAP7d6ndg)

## Preconditions
1. Install the NPM and NODEJS in your system [Nodejs Download](https://nodejs.org/en/download/current/)
2. Check in $path or %path% the nodeJS and npm are on it
  ```bash
  C:/Program Files/nodejs
  ```
3. Install also ```pnpm``` [pnpm installation](https://pnpm.io/installation), it is more fast than ```npm```
4. Install Postman
  [Postman Download](https://www.postman.com/downloads/)
5. Install MySQL 5.6.x
  [MySQL Download 5.6.26](https://downloads.mysql.com/archives/community/)
6. Install Visual Studio Code
  [Visual Studio Download](https://code.visualstudio.com/insiders/)

## Starting the proyect
1. I used [Vite](https://vitejs.dev/guide/), the best way to start any front-end project, with Typescrypt and a lot of templates:
```Mathematica
npm init vite@latest react_redux_CRUD --template react-ts
```
2. Following the instruccions, install the applications based on the ```package.json``` file.
```Mathematica
pnpm install
```
This is an example running with ```pnpm```
![pnpm install](images/2023-06-15_162456.png)
3. And run the application.
```Mathematica
pnpm dev
```
4. Some changes in the "vite.config.ts" file, based on [Create react app vs Vite](https://dev.to/keefdrive/create-react-app-vs-vite-2amn):
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // pnpm install -D @types/node

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
```
5. Install the pending elements showing as error in ```path```
```Mathematica
pnpm install -D @types/node
```

## Redux to as store main data 
1. [Install Redux Toolkik an React-Redux](https://redux-toolkit.js.org/tutorials/quick-start)
```Mathematica 
pnpm install @reduxjs/toolkit react-redux
```
![pnpm install Redux](images/2023-06-15_174951.png)
2. Create a "redux" directory, and put there the "store.ts" file.
3. Write in this file this first line:
```javascript
import { configureStore } from "@reduxjs/toolkit";
```
4. the next lines could be:
```javascript
const store = configureStore({});
export default store;
```
or
```javascript
export default configureStore({});
```
I used the second one.
5. In the main file "App.tsx" add a ```Provider``` to include all the others
```javascript
import { Provider } from "react-redux";
```
6. Call the ```store``` from ""store.ts".
```javascript
import store from "./redux/store";
```
7. Finally I change the return by this:
```javascript
    <>
      <Provider store={store}>
        <div className="App">
          <h1>Hola Mundo</h1>
        </div>
      </Provider>
    </>
```
8. Create a directory called "states" into redux, and create a file called "tasksSlides.ts".
9. Create a basic ```Slice``` to store the values and process to do:
```javascript
import { createSlice } from '@reduxjs/toolkit'
export const tasksSlice = createSlice({
  name: 'taskSlice',
  initialState: [], 
  reducers:{
  }
});
export default tasksSlice.reducer;
```
10. This is the "index.ts" file for this "states directory:
```javascript
export * from './tasksSlices';
```
11. This is how I use this ```slice``` into the "store.ts" file:
```javascript
export default configureStore({
  reducer: {
    task: tasksSlice.reducer,
  }
});
```
12. I create a "pages" directory and add a Component called "Home.tsx"
13. The "App.tsx" file to change and show the new page called "Home".
```javascript
    <>
      <Provider store={store}>
        <div className="App">
          <Home/>
        </div>
      </Provider>
    </>
```
