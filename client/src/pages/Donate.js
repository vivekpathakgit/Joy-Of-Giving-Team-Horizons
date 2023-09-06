import React, { useEffect, useState } from "react";
import Layout from "../components/layouts/Layout";
import { useAuth } from "../context/auth";
import axios from "axios";
import { routesData } from "../VehRouteData/vehRouteData";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

const Donate = () => {
  // const [donateAddress, setDonateAddress] = useState("");
  // console.log(auth?.user?.address);
  const [type, setType] = useState("");
  const [address, setAddress] = useState("");
  const [locality, setLocality] = useState("");
  const [auth] = useAuth();
  setAddress(auth.address);
  setLocality(auth.locality);
  const handleDonate = async (e) => {
    e.preventDefault();
    const vehNo = routesData.filter((e) => {
      return e.locality == locality;
    });
    try {
      const { data } = await axios.post("/api/v1/donate/add-donate", {
        type,
        address,
        locality,
        phone: auth.phone,
        email: auth.email,
        vehNo: vehNo,
      });
      if (data?.success) {
        setTimeout(() => {
          toast.success(data.message);
        }, 1000);
        Navigate("/profile");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Donate"}>
      <form style={{ width: "80%" }} onSubmit={handleDonate}>
        <div className="container">
          <label className="form-label">What you want to donate? </label>
          <select
            className="form-select form-select-md mb-3"
            aria-label="Large select example"
            onChange={(e) => {
              setType(e.value);
            }}
          >
            <option selected>Open this select menu</option>
            <option value={"food"}>Food</option>
            <option value={"cloth"}>Cloth</option>
          </select>
          <div className="mb-3">
            <label className="form-label">Address : </label>
            <input
              type="text"
              value={address}
              onChange={(e) => {
                setAddress(e.value);
              }}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Locality : </label>
            <input
              type="text"
              value={locality}
              onChange={(e) => {
                setLocality(e.value);
              }}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default Donate;
