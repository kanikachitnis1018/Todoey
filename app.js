import express from "express";
import mongoose from "mongoose";
import ejs from 'ejs';
import routes from "./routes/index.js"; 
import todo from "./routes/todo.js";

const app = express();

mongoose.connect("mongodb://localhost/ToDoDB", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB");

    //middleware
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static("public"));
    app.set("view engine", "ejs");

    app.use("/", routes); 
    app.use("/", todo);

    app.listen(3000, () => console.log("Connected to port: 3000"));
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
