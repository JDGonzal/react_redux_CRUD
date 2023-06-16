import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Home } from "./pages/Home";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={store}>
        <div className="App">
          <Home/>
        </div>
      </Provider>
    </>
  );
}

export default App;
