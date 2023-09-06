import express from "express";
import { isMainAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";
import {
  addBenifController,
  deleteBenifController,
  getBenifController,
  getSingleBenifController,
  updateBenifController,
} from "../controllers/addBenifController.js";

const router = express.Router();

//routes
router.post("/add-benif", requireSignIn, isMainAdmin, addBenifController);
// router.put(
//   "/update-benif/:pid",
//   requireSignIn,
//   isMainAdmin,
//   updateBenifController
// );

//get benif
router.get("/get-benif", getBenifController);

//get single benif
router.get("/get-benif/phone", getSingleBenifController);

//delete benif
router.delete("/delete-benif/:pid", deleteBenifController);

export default router;
