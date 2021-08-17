#! /usr/bin/env node
const yargs = require("yargs");

const usage = "\nUsage: tbr kp <port> to kill port";
const options = yargs
  .usage(usage)
  .option("k", {
    alias: "kill-port",
    describe: "Kill the port.",
    type: "boolean",
    demandOption: false,
  })
  .help(true).argv;
