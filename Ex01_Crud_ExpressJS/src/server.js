import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import { usersRoutes } from "./route/usersRoute";

const app = express();

// Thêm middleware để phân tích dữ liệu JSON trong body
app.use(express.json());

app.use("/api/users", usersRoutes);

// Kết nối đến cơ sở dữ liệu MongoDB
mongoose
  .connect(
    "mongodb+srv://vohuutai123:Vohuutai123@huutaidb01.mhfvy.mongodb.net/",
    { dbName: "newsoftwaretechnologies" }
  )
  .then(() => {
    console.log("Connected to the database");
    app.listen(6000, () => {
      console.log("Listening on port 6000");
    });
  })
  .catch((error) => {
    console.log("Error connecting to the database: ", error);
  });
