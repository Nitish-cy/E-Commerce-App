const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");

 require("dotenv").config({ path: "backend/config/config.env" });

app.use(express.json());
app.use(cookieParser());
// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
//middleware for errors
app.use(errorMiddleware);

module.exports = app;

