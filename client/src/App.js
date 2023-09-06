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
import DelvRoute from "./components/routes/DelvRoutes";
import DelevProfile from "./pages/Delv/DelevProfile";
import DonateRoute from "./components/routes/DonateRoute";
import Donate from "./pages/Donate";
import AdminRoute from "./components/routes/AdminRoute";
import AdminProfile from "./pages/Admin/AdminProfile";
import Hire from "./pages/Hire";
import UpdateBenif from "./pages/Admin/updateBenif";
import AddBenif from "./pages/addBenif";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="user" element={<Profile />} />
        </Route>
        <Route path="/profile" element={<DelvRoute />}>
          <Route path="delv" element={<DelevProfile />} />
        </Route>
        <Route path="/profile" element={<AdminRoute />}>
          <Route path="admin" element={<AdminProfile />} />
          <Route path="admin/add-Benif" element={<AddBenif />} />
          <Route path="admin/Benif/:slug" element={<UpdateBenif />} />
        </Route>
        <Route path="/donate" element={<DonateRoute />}>
          <Route path="" element={<Donate />} />
        </Route>
        <Route path="/register" element={<Sign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
