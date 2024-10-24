#!/usr/bin/env node

import { Command } from "commander";
import express from "express";

const program = new Command();

program
.name("cli-task-track")
.description("CLI to track tasks")
.version("1.0.0");

program
.command("start")
.description("start the server...")
.option('-a, --task <port>', 'Specify the task')
.action((options)=>{
    console.log(`task ${options.task} added.`);
    
});

program
.command("stop")
.description("stop the server...")
.action(()=>{
    console.log("Server stopped.");
});

program.parse(process.argv); //program.parse processes the arguments
//shebang makes it portable, meaning it can run on any system 

const options = program.opts();
if(options.debug) console.log(options);
if(options.port) console.log("4000");



