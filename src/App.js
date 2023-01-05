import { Provider } from "react-redux";
import Add from "./components/Add";
import List from "./components/List";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <List/>
      <Add/>
    </Provider>
  );
}

export default App;
