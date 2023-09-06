import React, { useState, useEffect } from "react";

// import { Link } from "react-router-dom";
import "../style/styleSignin.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Layout from "../components/layouts/Layout";
// import { Select } from "antd";
// const { Option } = Select;

const AddBenif = () => {
  const [benif, setBenif] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [locality, setLocality] = useState("");
  const navigate = useNavigate();

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/benif/add-benif", {
        name,
        phone,
        speciality,
        locality,
      });
      if (data?.success) {
        setTimeout(() => {
          toast.success(data.message);
        }, 1000);
        navigate("/hire");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
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
                    <i className="fas fa-lock" />
                    <input
                      className="myInput"
                      type="text"
                      id="conform-password"
                      placeholder="Speciality"
                      required
                      value={speciality}
                      onChange={(e) => setSpeciality(e.target.value)}
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

                  <input
                    type="submit"
                    className="butt"
                    defaultValue="CREATE BENIFICIARY"
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

export default AddBenif;
