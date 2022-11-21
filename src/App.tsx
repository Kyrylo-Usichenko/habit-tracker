import { Provider } from "react-redux";

import Routes from "./components/routes/Routes";
import store from "./store";

export type AppDispatch = typeof store.dispatch;

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
