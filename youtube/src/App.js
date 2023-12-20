import "./App.css";

import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import { store } from "./utils/app/store";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
