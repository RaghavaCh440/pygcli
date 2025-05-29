#!/usr/bin/env node
const { program } = require('commander');
const chalk = require('chalk');
const { runShellCommand } = require('../lib/linuxUtils');
const { uploadToGCS } = require('../lib/gcpUtils');
const { runPythonScript } = require('../lib/pyBridge');
require('dotenv').config();

program
  .name('pygcli')
  .description('CLI for Linux + GCP + Python automation')
  .version('0.1.0');

program
  .command('shell <cmd>')
  .description('Run a Linux shell command')
  .action(async (cmd) => {
    const output = await runShellCommand(cmd);
    console.log(chalk.green(output));
  });

program
  .command('upload <file> <bucket>')
  .description('Upload a file to GCS')
  .action(async (file, bucket) => {
    await uploadToGCS(file, bucket);
  });

program
  .command('python <scriptPath> [args...]')
  .description('Run a Python script with optional arguments')
  .action((scriptPath, args) => {
    runPythonScript(scriptPath, args);
  });

program.parse();
