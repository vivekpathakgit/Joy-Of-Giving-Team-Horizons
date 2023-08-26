import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";

// config dotenv
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoute);

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
