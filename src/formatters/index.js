import tree from './stylish.js';
import plane from './toPlane.js';
import json from './toJson.js';

const renderers = {
  tree,
  plane,
  json,
};

export default (format) => renderers[format];
