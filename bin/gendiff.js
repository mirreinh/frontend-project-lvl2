#!/usr/bin/env node
/* eslint-disable no-console, import/extensions */
import commander from 'commander';
import execute from '../index.js';

commander
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format [type]', 'output format', 'tree')
  .arguments('<filepath1> <filepath2>')
  .action((filePath1, filePath2, option) => {
    console.log(execute(filePath1, filePath2, option.format));
  });
commander.parse(process.argv);
