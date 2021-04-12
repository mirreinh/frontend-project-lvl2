import tree from './stylish.js';
import plane from './plane.js';

const renderers = {
  tree,
  plane,
};

export default (format) => renderers[format];
