#!/usr/bin/env node
/* eslint-disable no-console, import/extensions */
import commander from 'commander';
import gendiff from '../index.js';

commander
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version')
  .option('-f, --format [type]', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filePath1, filePath2, option) => {
    console.log(gendiff(filePath1, filePath2, option.format));
  });
commander.parse(process.argv);
