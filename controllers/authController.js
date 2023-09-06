import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModle from "../models/userModle.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address, locality } = req.body;
    //validation
    if (!name) {
      return res.send({ message: "Name is required!" });
    }
    if (!email) {
      return res.send({ message: "Email is required!" });
    }
    if (!password) {
      return res.send({ message: "Password is required!" });
    }
    if (!phone) {
      return res.send({ message: "Phone is required!" });
    }
    if (!address) {
      return res.send({ message: "Address is required!" });
    }
    if (!locality) {
      return res.send({ message: "Locality is required!" });
    }

    //check user
    const existingUser = await userModle.findOne({ email: email });
    //exisiting user
    if (existingUser) {
      return res.status(200).send({
        success: false,
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
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
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
      return res.status(200).send({
        success: false,
        message: "Invalid email or password!",
      });
    }
    //check user
    const user = await userModle.findOne({ email });
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "Email not registered!",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid password!",
      });
    }
    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login successful!",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        locality: user.locality,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

export const getAuthController = async (req, res) => {
  try {
    const users = await userModle.find({}).sort({ createdAt: -1 });
    res.status(201).send({
      success: true,
      totalCount: users.length,
      message: "Users",
      users,
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
