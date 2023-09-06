import mongoose from "mongoose";

const donateSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    locality: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    vehNo: {
      type: String,
      required: true,
    },
    outToPick: {
      type: Boolean,
      default: false,
    },
    pickupDone: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("donateModle", donateSchema);
