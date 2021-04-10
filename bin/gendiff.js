#!/usr/bin/env node
/* eslint-disable no-console, import/extensions */

import { Command } from 'commander'; //

import execute from '../index.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((filePath1, filePath2, option) => {
    console.log(execute(filePath1, filePath2, option.format));
  });
program.parse();
