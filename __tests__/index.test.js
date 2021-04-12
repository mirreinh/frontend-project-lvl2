import fs from 'fs';
import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('genDiff json to tree', () => {
  const beforePath = getFixturePath('before.json');
  const afterPath = getFixturePath('after.json');
  const result = readFile('treeResult');
  expect(genDiff(afterPath, beforePath, 'tree')).toEqual(result);
});

test('genDiff json to plane', () => {
  const beforePath = getFixturePath('before.json');
  const afterPath = getFixturePath('after.json');
  const result = readFile('planeResult');
  expect(genDiff(afterPath, beforePath, 'plane')).toEqual(result);
});

test('genDiff yaml to tree', () => {
  const beforePath = getFixturePath('before.yaml');
  const afterPath = getFixturePath('after.yaml');
  const result = readFile('treeResult');
  expect(genDiff(afterPath, beforePath, 'tree')).toEqual(result);
});

test('genDiff yaml to plane', () => {
  const beforePath = getFixturePath('before.yaml');
  const afterPath = getFixturePath('after.yaml');
  const result = readFile('planeResult');
  expect(genDiff(afterPath, beforePath, 'plane')).toBe(result);
});
