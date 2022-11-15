import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewComp from "./components/NewComp";
import Home from "./components/pages/home/Home";
import store from "./store";

export type AppDispatch = typeof store.dispatch;

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Navigate replace to="/dashboard" />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
