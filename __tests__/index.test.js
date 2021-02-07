import fs from 'fs';
import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('genDiff json', () => {
  const beforePath = getFixturePath('before.json');
  const afterPath = getFixturePath('after.json');
  const result = readFile('result');
  expect(genDiff(beforePath, afterPath)).toEqual(result);
});

test('genDiff yaml', () => {
  const beforePath = getFixturePath('before.yaml');
  const afterPath = getFixturePath('after.yaml');
  const result = readFile('result');
  expect(genDiff(beforePath, afterPath)).toEqual(result);
});
