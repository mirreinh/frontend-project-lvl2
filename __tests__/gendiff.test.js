import fs from 'fs';
import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
const beforePathJson = getFixturePath('before.json');
const afterPathJson = getFixturePath('after.json');

const beforePathYaml = getFixturePath('before.yaml');
const afterPathYaml = getFixturePath('after.yaml');

test('genDiff json to tree', () => {
  const result = readFile('stylishResult');
  expect(genDiff(beforePathJson, afterPathJson, 'stylish')).toEqual(result);
});

test('genDiff json to plane', () => {
  const result = readFile('planeResult');
  expect(genDiff(beforePathJson, afterPathJson, 'plain')).toEqual(result);
});

test('genDiff yaml to tree', () => {
  const result = readFile('stylishResult');
  expect(genDiff(beforePathYaml, afterPathYaml, 'stylish')).toEqual(result);
});

test('genDiff yaml to plane', () => {
  const result = readFile('planeResult');
  expect(genDiff(beforePathYaml, afterPathYaml, 'plain')).toEqual(result);
});
