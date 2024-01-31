import dotenv from "dotenv";
import connectDB from "./db/connectdb.js";
import express from "express";

dotenv.config({
  path: "./env",
});

const app = express();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000),
      () => {
        console.log(`Server is runningat port :- ${process.env.PORT}`);
      };
  })
  .catch((err) => {
    console.log("MongoDB Connection faild :- ", err);
  });
