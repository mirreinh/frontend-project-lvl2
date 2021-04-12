import fs from 'fs';
import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
const beforePath = getFixturePath('before.json');
const afterPath = getFixturePath('after.json');

test('genDiff json to tree', () => {
  const result = readFile('treeResult');
  expect(genDiff(beforePath, afterPath, 'tree')).toEqual(result);
});

test('genDiff json to plane', () => {
  const result = readFile('planeResult');
  expect(genDiff(beforePath, afterPath, 'plane')).toEqual(result);
});

test('genDiff yaml to tree', () => {
  const result = readFile('treeResult');
  expect(genDiff(beforePath, afterPath, 'tree')).toEqual(result);
});

test('genDiff yaml to plane', () => {
  const result = readFile('planeResult');
  expect(genDiff(beforePath, afterPath, 'plane')).toBe(result);
});
