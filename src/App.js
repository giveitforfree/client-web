import { Provider } from "react-redux";
import "./app.css";
import Layout from "./components/Layout/Layout";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
