#!/usr/bin/env node

const {Command} = require("commander");

const program = new Command();

program
.name("cli-task-track")
.description("CLI to track tasks")
.version("1.0.0");

program
.command("start")
.description("start the server...")
.option('-p, --port <port>', 'Specify the port', '4000')
.action((options)=>{
    
    console.log(`Server started...on port ${options.port}`);
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



