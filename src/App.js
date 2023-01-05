import { Provider } from "react-redux";
import List from "./components/List";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <List/>
      <h2> branch01 </h2>
    </Provider>
  );
}

export default App;
