import React, { useEffect, useState } from "react";

import Layout from "../../components/layouts/Layout";
// import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateBenif = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [locality, setLocality] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  //get single benif
  const getSingleBenif = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/benif/get-benif/${params.slug}`
      );
      setName(data.benif.name);
      setPhone(data.benif.phone);
      setSpeciality(data.benif.speciality);
      setLocality(data.benif.locality);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleBenif();
    //eslint-disable-next-line
  }, []);

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `/api/v1/benif/update-benif/${e.slug}`,
        // `${process.env.REACT_APP_API}/api/v1/auth/Sign`,
        { name, phone, speciality, locality }
      );
      if (res?.data.success) {
        // ()=>{navigate("/login")}
        setTimeout(() => {
          toast.success(res?.data.message);
        }, 1000);
        navigate("/hire");
      } else {
        toast.error(res?.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //delete function
  const deleteBenif = async (e)=>{
    try {
      let answer = window.prompt('Are you sure want to delete this product')
      if(!answer) return 
      const {data} = await axios.delete(`/api/v1/benif/delete-benif/${e.slug}`)
      navigate('/hire')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Layout title="Update Benifs- Horizons">
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
                      placeholder="Conform-Password"
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
                  <div className="mb-3">
                    <button className="btn btn-primary" onClick={deleteBenif}>
                      DELETE BENIFICIARY
                    </button>
                  </div>
                  <input
                    type="submit"
                    className="butt"
                    defaultValue="UPDATE BENIFICIARY"
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

export default UpdateBenif;
