import express from "express";
import { isUser, requireSignIn } from "../middlewares/authMiddlewares.js";
import {
  donateController,
  getDonateController,
} from "../controllers/donateController.js";

const router = express.Router();

// router.get("/donate-user", requireSignIn, isUser, (req, res) => {
//   res.status(200).send({ ok: true });
// });

// //routes
// router.post("/add-donate", requireSignIn, isUser, donateController);

// //get donate
// router.get("/get-donate", requireSignIn, getDonateController);

export default router;
