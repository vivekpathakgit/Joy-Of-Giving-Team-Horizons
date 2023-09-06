import React from "react";
// import donateModle from "../models/donateModle";
import donateModle from "../models/donateModle.js";
import fs from "fs";

export const donateController = async (req, res) => {
  try {
    const {
      type,
      address,
      locality,
      phone,
      email,
      vehNo,
      outToPick,
      pickupDone,
    } = req.body;
    if (!type) {
      return res.send({ message: "Type is required!" });
    }
    if (!address) {
      return res.send({ message: "address is required!" });
    }
    if (!locality) {
      return res.send({ message: "Locality is required!" });
    }

    const users = await new donateModle({
      type,
      address,
      locality,
      phone,
      email,
      vehNo,
      outToPick,
      pickupDone,
    }).save();

    res.status(201).send({
      success: true,
      message: "Benificiery registered successfully",
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error in benif",
    });
  }
};

export const getDonateController = async (req, res) => {
  try {
    const don = await donateModle.find({}).sort({ createdAt: -1 });
    res.status(201).send({
      success: true,
      totalCount: don.length,
      message: "Benificiers",
      don,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error in getting benif",
    });
  }
};
