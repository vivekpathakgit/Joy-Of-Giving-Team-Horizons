import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import benifRoute from "./routes/benifRoute.js";
import donateRoute from "./routes/donateRoute.js";
import cors from "cors";

// config dotenv
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/benif", benifRoute);
app.use("/api/v1/donate", donateRoute);

//rest api
app.get("/", (req, res) => {
  res.send("<h1> Hello world</h1>");
});

//port
const port = process.env.port;
// listen
app.listen(port, () => {
  console.log(`server running on ${port}`.bgCyan.black);
});
