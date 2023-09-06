import React, { useEffect, useState } from "react";
import benifModle from "../models/benifModle.js";
import slugify from "slugify";

export const addBenifController = async (req, res) => {
  try {
    const { name, phone, speciality, locality } = req.body; //req.fileds
    if (!name) {
      return res.send({ message: "Name is required!" });
    }
    if (!speciality) {
      return res.send({ message: "Speciality is required!" });
    }
    if (!locality) {
      return res.send({ message: "Locality is required!" });
    }
    if (!phone) {
      return res.send({ message: "Phone is required!" });
    }

    //check user
    const existingUser = await benifModle.findOne({ phone: phone });
    //exisiting user
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "Benificiery Already exists ",
      });
    }

    const ben = await new benifModle({
      name,
      speciality,
      locality,
      phone,
      slug: slugify(name),
    }).save();
    res.status(200).send({
      success: true,
      message: "Benificiery registered successfully",
      ben,
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

//get benificiary
export const getBenifController = async (req, res) => {
  try {
    const benif = await benifModle.find({}).sort({ createdAt: -1 });
    res.status(201).send({
      success: true,
      totalCount: benif.length,
      message: "Benificiers",
      benif,
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

//get single benif
export const getSingleBenifController = async (req, res) => {
  try {
    const benif = await benifModle.findOne({ slug: req.params.slug });

    res.status(201).send({
      success: true,
      totalCount: benif.length,
      message: "Benificiery registered successfully",
      benif,
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
//delete
export const deleteBenifController = async (req, res) => {
  try {
    const benif = await benifModle.findByIdAndDelete(req.params.pid);

    res.status(201).send({
      success: true,
      totalCount: benif.length,
      message: "Benificiery deleted successfully",
      benif,
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
export const updateBenifController = async (req, res) => {
  try {
    const { name, phone, speciality, locality, slug } = req.body; //req.fileds
    if (!name) {
      return res.send({ message: "Name is required!" });
    }
    if (!speciality) {
      return res.send({ message: "Speciality is required!" });
    }
    if (!locality) {
      return res.send({ message: "Locality is required!" });
    }
    if (!phone) {
      return res.send({ message: "Phone is required!" });
    }

    //check user
    const benif = new benifModle.findByIdAndUpdate(
      req.params.pid,
      { ...req.fields, slug: slugify(name) },
      { new: true }
    );
    await benif.save();
    res.status(201).send({
      success: true,
      message: "Benificiery updated successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error in updating benif",
    });
  }
};
