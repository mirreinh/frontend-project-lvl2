/* eslint-disable import/extensions */
import parse from './src/parser.js';
import renderDiff from './src/renderDiff.js';

export default (pathOne, pathTwo) => renderDiff(parse(pathOne), parse(pathTwo));
