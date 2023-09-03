import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Sign from "./pages/Auth/Sign";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Auth/Login";
import Profile from "./pages/user/Profile";
import PrivateRoute from "./components/routes/Private";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Sign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<PageNotFound />} f />
      </Routes>
    </>
  );
}

export default App;
