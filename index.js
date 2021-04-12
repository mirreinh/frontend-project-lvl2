/* eslint-disable import/extensions */
import parse from './src/parser.js';
import buildAst from './src/renderDiff.js';
import getRender from './src/formatters/index.js';

export default (pathOne, pathTwo, format) => {
  const ast = buildAst(parse(pathOne), parse(pathTwo));
  const render = getRender(format);
  return render(ast);
};
