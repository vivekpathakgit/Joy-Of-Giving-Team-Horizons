import React, { useState } from "react";
import Layout from "../../components/layouts/Layout";
import { Link } from "react-router-dom";
import "../../style/style.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const [auth, setAuth] = useAuth();

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", { email, password });
      if (res.data.success) {
        setTimeout(() => {
          toast.success(res.data.message);
        }, 1000);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };
  return (
    <Layout>
      <div className="container">
        <div className="myCard">
          <div className="row">
            <div className="col-md-6">
              <div className="myLeftCtn">
                <form className="myForm text-center" onSubmit={handleSubmit}>
                  <header>Login</header>
                  <div className="form-group">
                    <i className="fas fa-user" />
                    <input
                      className="myInput"
                      type="text"
                      placeholder="Email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <i className="fas fa-lock" />
                    <input
                      className="myInput"
                      type="password"
                      id="password"
                      placeholder="Password"
                      required
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      <input
                        id="check_1"
                        name="check_1"
                        type="checkbox"
                        required
                      />
                      <small> I read and agree to Terms &amp; Conditions</small>
                      <div className="invalid-feedback">
                        You must check the box.
                      </div>
                    </label>
                  </div>
                  <div className="form-group">
                    <label>
                      <a href="sign.html">create new account</a>
                    </label>
                  </div>
                  <input type="submit" className="butt" defaultValue="Login" />
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="myRightCtn">
                <div className="box">
                  <header>No one has ever become poor from giving.</header>
                  <p>by Anne Frank</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
