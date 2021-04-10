/* eslint-disable import/extensions */
import parse from './src/parser.js';
import getAst from './src/renderDiff.js';
import getTree from './src/formatters/stylish.js';

const renderers = {
  stylish: getTree,
};

export default (pathOne, pathTwo, format) => {
  const ast = getAst(parse(pathOne), parse(pathTwo));
  return renderers[format](ast);
};
