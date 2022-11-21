import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../pages/auth/Auth";
import LoadingScreen from "../pages/loadingScreen/LoadingScreen";
import SignUp from "../pages/signUp/SignUp";

const routes = [
  { path: "/", element: <LoadingScreen /> },
  { path: "/auth", element: <Auth /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/login", element: <div /> },
];

function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        {/* <Route path="/auth" element={<Auth replace to="/dashboard" />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesComponent;
