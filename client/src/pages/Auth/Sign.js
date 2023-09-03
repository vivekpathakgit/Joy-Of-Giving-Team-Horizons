import React, { useState } from "react";
import Layout from "../../components/layouts/Layout";
import { Link } from "react-router-dom";
import "../../style/styleSignin.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Sign = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [locality, setLocality] = useState("");
  const navigate = useNavigate();

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "/api/v1/auth/register",
        // `${process.env.REACT_APP_API}/api/v1/auth/Sign`,
        { name, email, password, phone, address, locality }
      );
      if (res.data.success) {
        // ()=>{navigate("/login")}
        setTimeout(() => {
          toast.success(res.data.message);
        }, 1000);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title="Sign In - Horizons">
      <div className="container my-5">
        <div className="myCard">
          <div className="row">
            <div className="col-lg-6">
              <div className="myLeftCtn">
                <form className="myForm text-center" onSubmit={handleSubmit}>
                  <header>Create new account</header>
                  <div className="form-group">
                    <i className="fas fa-user" />
                    <input
                      className="myInput"
                      type="text"
                      placeholder="Username"
                      id="username"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <i className="fas fa-envelope" />
                    <input
                      className="myInput"
                      placeholder="Email"
                      type="text"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <i className="fas fa-lock" />
                    <input
                      className="myInput"
                      type="password"
                      id="conform-password"
                      placeholder="Conform-Password"
                      required
                      value={conformPassword}
                      onChange={(e) => setConformPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <i className="fas fa-phone" />
                    <input
                      className="myInput"
                      type="text"
                      id="phone"
                      placeholder="Phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <i className="fas fa-address-card" />
                    <input
                      className="myInput"
                      type="text"
                      id="address"
                      placeholder="Address"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <i className="fas fa-map-marker-alt" />
                    <input
                      className="myInput"
                      type="text"
                      id="locality"
                      placeholder="Locality"
                      required
                      value={locality}
                      onChange={(e) => setLocality(e.target.value)}
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
                      already have account <Link to="login.html">login*</Link>
                    </label>
                  </div>
                  <input
                    type="submit"
                    className="butt"
                    defaultValue="CREATE ACCOUNT"
                  />
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="myRightCtn">
                <div className="box">
                  <header>
                    Always give without remembering and always receive without
                    forgetting.
                  </header>
                  <p>by Brian Tracy</p>
                  {/* <input type="button" class="butt_out" value="Learn More"/> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sign;
