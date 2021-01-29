import "./App.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import Hoc from "./hoc/Hoc";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Hoc></Hoc>
      </PersistGate>
    </Provider>
  );
}

export default App;
