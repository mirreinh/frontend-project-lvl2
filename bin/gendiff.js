#!/usr/bin/env node
/* eslint-disable no-console, import/extensions */

import execute from '../index.js';

const { program } = require('commander');

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format', 'tree')
  .action((filePath1, filePath2, option) => {
    console.log(execute(filePath1, filePath2, option.format));
  });
program.parse();
