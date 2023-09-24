import express from "express";
const router = express.Router();

import {Todo} from "../models/Todo.js";

router.get("/", async(req, res) => {
  const allTodo = await Todo.find();
  res.render("index", {todo: allTodo})
});

export default router;
