import express from "express";
import {
  registerController,
  loginController,
  getAuthController,
} from "../controllers/authController.js";
import {
  isAdmin,
  requireSignIn,
  isMainAdmin,
  isUser,
} from "../middlewares/authMiddlewares.js";
import {
  donateController,
  getDonateController,
} from "../controllers/donateController.js"; //trail
//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//Trial
//routes
router.post("/add-donate", requireSignIn, isUser, donateController);

//get donate
router.get("/get-donate", requireSignIn, getDonateController);

export default router;

//protected route
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

router.get("/delv-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

router.get("/admin-auth", requireSignIn, isMainAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

router.get("/donate-user", requireSignIn, isUser, (req, res) => {
  res.status(200).send({ ok: true });
});
