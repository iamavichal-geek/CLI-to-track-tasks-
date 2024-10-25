#!/usr/bin/env node

import express from "express";
import { Command } from "commander";
import pg from "pg";
import * as env from "dotenv";
// import taskRouter from "./routes/task.js";

const app = express();
const port = 3001;

env.config();

const db = new pg.Client({
    user: process.env.PG_USER,
    host:process.env.PG_HOST,
    database:process.env.PG_DATABASE,
    password:process.env.PG_PASSWORD,
    port:process.env.PG_PORT,
})

db.connect();

const program = new Command();

program
.command("start")
.action(()=>{

    app.get("/", (req,res)=>{
        res.send("Home via CLI...");
    })
    app.listen(port, ()=>{
        // app.use("/tasks", taskRouter);
        console.log(`Server started via CLI on port ${port}`);
    })
})

program
.command("list")
.description("Get all tasks.")
.action(async ()=>{
    const result = await db.query("SELECT * FROM tasks");
console.log("all tasks");
console.log(result.rows);
})

const options = program.opts();

program
.command("add")
.description("Add a new task.")
.option('-a, --newTask <newTask>', 'Add a new task.')
.action(async(options)=>{
    
const getCurrentTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

const currentTime = getCurrentTime();
    await db.query("INSERT INTO tasks(task, time) VALUES($1,$2)", [options.newTask, currentTime]);
console.log(`Added task : ${options.newTask} at ${currentTime}`);

});

program
.command("update")
.option('-u, --updateTask <updateTask>', 'Update a task.')
.option('-id, --taskId <taskId>', 'ID of a task.')
.description("Update a task.")
.action(async(options)=>{
    await db.query("UPDATE tasks SET task = ($1) WHERE id = ($2)", [options.updateTask, options.taskId]);
console.log("Task updated successfully.");
})


program
.command("delete")
.option('-id, --taskId <taskId>', 'ID of a task.')
.description("Delete a task.")
.action(async(options)=>{
await db.query("DELETE FROM tasks WHERE id = ($1)", [options.taskId]);
console.log(`Task with id : ${options.taskId} deleted.`);
})



program.parse(process.argv);