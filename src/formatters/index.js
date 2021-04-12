import stylish from './stylish.js';
import plain from './toPlain.js';
import json from './toJson.js';

const renderers = {
  stylish,
  plain,
  json,
};

export default (format) => renderers[format] ?? stylish;
