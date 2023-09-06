import React from "react";
import Layout from "../../components/layouts/Layout";
import { useAuth } from "../../context/auth";
import { useCart } from "../../context/cart";
const DelevProfile = () => {
  const [auth] = useAuth();
  const [cart, setCart] = useCart();
  return (
    <Layout>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: 150 }}
                  />
                  <h5 className="my-3">John Smith</h5>
                  <p className="text-muted mb-4" />
                  <div style={{ fontSize: "large" }}>
                    <span className="route">Route Number : </span>
                    <span
                      className="routeNo text-primary me-1"
                      style={{ fontWeight: "bold" }}
                    >
                      5
                    </span>
                  </div>{" "}
                  <p />
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fas fa-globe fa-lg text-warning" />
                      <p className="mb-0">https://mdbootstrap.com</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i
                        className="fab fa-github fa-lg"
                        style={{ color: "#333333" }}
                      />
                      <p className="mb-0">mdbootstrap</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i
                        className="fab fa-twitter fa-lg"
                        style={{ color: "#55acee" }}
                      />
                      <p className="mb-0">@mdbootstrap</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i
                        className="fab fa-instagram fa-lg"
                        style={{ color: "#ac2bac" }}
                      />
                      <p className="mb-0">mdbootstrap</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i
                        className="fab fa-facebook-f fa-lg"
                        style={{ color: "#3b5998" }}
                      />
                      <p className="mb-0">mdbootstrap</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{auth?.user?.name}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{auth?.user?.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Mobile</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{auth?.user?.phone}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Locality</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{auth?.user?.locality}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{auth?.user?.address}</p>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="text-center">
                {cart?.length > 1
                  ? `You brought joy to ${cart?.length} families`
                  : ""}
              </h4>
              <div className="pickupData row">
                {cart?.map((p) => (
                  <div className="col-md-6 mb-3">
                    <div className="card mb-4 mb-md-0">
                      <div className="card-body" id="${idd}">
                        <p className=" mb-4">
                          <span className="text-primary font-italic me-1">
                            Pickup ${"{"}type{"}"}
                          </span>{" "}
                          Status
                        </p>
                        <p
                          className="status mb-1"
                          style={{ fontSize: ".77rem" }}
                        >
                          In Progress : 0%
                        </p>
                        <div className="progress rounded" style={{ height: 8 }}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "0%" }}
                            aria-valuenow={0}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <br />
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Locality</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{p.locality}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Address</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{p.address}</p>
                          </div>
                        </div>
                        <br />
                        <div className="mt-4">
                          <div className="row">
                            <div className="col-sm-9">
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "flex-start",
                                }}
                              >
                                <div
                                  className="outToPick"
                                  style={{
                                    backgroundColor: "#3b5998",
                                    animationDuration: "infinite",
                                  }}
                                >
                                  <div className="oTP" />
                                </div>
                                <div> Out For Pickup</div>
                              </div>
                            </div>
                            <div className="col-sm-2">
                              <button
                                type="button"
                                className="outTP btn btn-primary"
                              >
                                Done
                              </button>
                            </div>
                          </div>
                          <br />
                          <div className="row">
                            <div className="col-sm-9">
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "flex-start",
                                }}
                              >
                                <div
                                  className="picked"
                                  style={{
                                    backgroundColor: "#3b5998",
                                    animationDuration: "infinite",
                                  }}
                                >
                                  <div className="pkd" />
                                </div>
                                <div> Pickup Complete</div>
                              </div>
                            </div>
                            <div className="col-sm-2">
                              <button
                                type="button"
                                className="pickComp btn btn-primary"
                              >
                                Done
                              </button>
                            </div>
                          </div>
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DelevProfile;
