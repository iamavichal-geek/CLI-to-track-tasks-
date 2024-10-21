#!/usr/bin/env node

import express from "express";
import { Command } from "commander";
import taskRouter from "./routes/task.js";

const app = express();
const port = 3001;

const program = new Command();

program
.command("start")
.action(()=>{

    app.get("/", (req,res)=>{
        res.send("Home via CLI...");
    })
    app.listen(port, ()=>{
        app.use("/tasks", taskRouter);
        console.log(`Server started via CLI on port ${port}`);
    })
})



program.parse(process.argv);