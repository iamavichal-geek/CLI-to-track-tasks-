#!/usr/bin/env node

import express from "express";
import { Command } from "commander";

const router = express.Router();
const program = new Command();

router.get('/all', (req, res)=>{
    res.send("all tasks");
})

program
.command("tasks")
.action(()=>{
   console.log("lol");
      })


program.parse(process.argv);

export default router;