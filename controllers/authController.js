import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModle from "../models/userModle.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address, locality } = req.body;
    //validation
    if (!name) {
      return res.send({ error: "Name is required!" });
    }
    if (!email) {
      return res.send({ error: "Email is required!" });
    }
    if (!password) {
      return res.send({ error: "Password is required!" });
    }
    if (!phone) {
      return res.send({ error: "Phone is required!" });
    }
    if (!address) {
      return res.send({ error: "Address is required!" });
    }
    if (!locality) {
      return res.send({ error: "Locality is required!" });
    }

    //check user
    const existingUser = await userModle.findOne({ email: email });
    //exisiting user
    if (existingUser) {
      return res.status(200).send({
        sucess: true,
        message: "Already exists please login",
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new userModle({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      locality,
    }).save();

    res.status(201).send({
      sucess: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "Error in Registration",
      error,
    });
  }
};

//POST LOGIN
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        sucess: false,
        message: "Invalid email or password!",
      });
    }
    //check user
    const user = await userModle.findOne({ email });
    if (!user) {
      return res.status(404).send({
        sucess: false,
        message: "Email not registered!",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        sucess: false,
        message: "Invalid password!",
      });
    }
    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      sucess: true,
      message: "login successful!",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        locality: user.locality,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "Error in login",
      error,
    });
  }
};

//test controller
export const testController = (req, res) => {
  console.log("Protected Route");
};
