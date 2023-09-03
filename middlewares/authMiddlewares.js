import JWT from "jsonwebtoken";
import userModle from "../models/userModle.js";

//Protected Routes token base
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      //This part encrypts
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode; //This part decrypts
    next();
  } catch (error) {
    console.log(error);
  }
};

//admin access
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModle.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "unautharized access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "error in admin middleware",
    });
  }
};
