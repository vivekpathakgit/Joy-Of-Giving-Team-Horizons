import mongoose from "mongoose";

const benifSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  speciality: {
    type: String,
    required: true,
  },
  locality: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
});

export default mongoose.model("benif", benifSchema);
