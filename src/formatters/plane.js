import _ from 'lodash';

const stringCheker = (item) => (typeof item === 'string' ? `'${item}'` : `${item}`);

const getStringValue = (item) => (item instanceof Object ? '[complex value]' : stringCheker(item));

const formatter = (ast, pathCall) => {
  const typeActions = {
    children: ({ children }, chain) => formatter(children, chain),
    unchanged: () => '',
    added: ({ valueAfter }, chain) => `Property '${chain}' was added with value: ${getStringValue(valueAfter)}`,
    deleted: (node, chain) => `Property '${chain}' was removed`,
    changed: ({ valueBefore, valueAfter }, chain) => {
      const firstValue = getStringValue(valueBefore);
      const secondValue = getStringValue(valueAfter);
      return `Property '${chain}' was updated. From ${firstValue} to ${secondValue}`;
    },
  };

  const result = ast.map((node) => {
    const callView = pathCall ? `${pathCall}.${node.key}` : node.key;
    return typeActions[node.type](node, callView);
  });
  return _.flatten(result).filter((x) => !(_.isEmpty(x))).join('\n');
};

export default (ast) => formatter(ast);
