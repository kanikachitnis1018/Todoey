import express from "express";
const router = express.Router();

import {Todo} from "../models/Todo.js";

router.post("/add/todo", (req,res) => {
    const {todo} = req.body;
    const newTodo = new Todo({todo});

    newTodo.save()
    .then(() => {
        res.redirect("/");
    })
    .catch((err) => console.log(err));
})
router.get("/delete/todo/:_id", (req, res) => {
    const { _id } = req.params;
    Todo.deleteOne({ _id })
        .then(() => {
            console.log("deleted");
            res.redirect("/");
        })
        .catch((err) => console.log(err));
});


export default router;
