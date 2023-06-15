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
