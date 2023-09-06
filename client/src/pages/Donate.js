import React, { useEffect, useState } from "react";
import Layout from "../components/layouts/Layout";
import { useAuth } from "../context/auth";
import axios from "axios";
import { routesData } from "../VehRouteData/vehRouteData";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Donate = () => {
  // const [donateAddress, setDonateAddress] = useState("");
  // console.log(auth?.user?.address);
  const [auth, setAuth] = useAuth();
  const { address, locality, phone, email } = auth.user;
  const [type, setType] = useState("");
  const [add, setAdd] = useState(address);
  const [loc, setLoc] = useState(locality);
  const navigate = useNavigate();
  // console.log(typeof JSON.stringify(add));
  // if (add != address) {
  //   setAdd(address);
  // }
  // if (loc != locality) {
  //   setLoc(locality);
  // }
  // console.log(locality);
  // const vehical = routesData.filter((e) => {
  //   return e.locality === locality;
  // });
  // console.log(vehical);
  const handleDonate = async (e) => {
    e.preventDefault();
    const vehical = routesData.filter((e) => {
      return e.locality === loc;
    });
    const { vehNo } = vehical[0];
    try {
      const { data } = await axios.post("/api/v1/auth/add-donate", {
        type: "food",
        address: JSON.stringify(add),
        locality: JSON.stringify(loc),
        phone: phone,
        email: email,
        vehNo: vehNo,
      });

      if (data?.success) {
        setTimeout(() => {
          toast.success(data.message);
        }, 1000);
        navigate("/");
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
              console.log(e);
              console.log("changed", type);
              setType(e.value);
            }}
          >
            <option value={1}>Food</option>
            <option value={2}>Cloth</option>
          </select>

          <div className="mb-3">
            <label className="form-label">Address : </label>
            <input
              type="text"
              value={add}
              onChange={(e) => {
                setAdd(e.target.value);
              }}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Locality : </label>
            <input
              type="text"
              value={loc}
              onChange={(e) => {
                setLoc(e.target.value);
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
