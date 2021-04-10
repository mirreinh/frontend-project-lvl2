import _ from 'lodash';

const getAst = (before, after) => {
  const beforeKeys = Object.keys(before);
  const afterKeys = Object.keys(after);
  const concatKeys = _.concat(beforeKeys, afterKeys);
  const uniqKeys = _.uniq(concatKeys).sort();

  const state = [
    {
      check: (key) => before[key] instanceof Object && after[key] instanceof Object,
      buildNode: (key) => ({ type: 'children', key, children: getAst(before[key], after[key]) }),
    },
    {
      check: (key) => _.has(before, key)
        && _.has(after, key) && (before[key] === after[key]),
      buildNode: (key) => ({ type: 'unchanged', key, valueAfter: after[key] }),
    },
    {
      check: (key) => _.has(after, key)
        && !_.has(before, key),
      buildNode: (key) => ({ type: 'added', key, valueAfter: after[key] }),
    },
    {
      check: (key) => _.has(before, key)
        && !_.has(after, key),
      buildNode: (key) => ({ type: 'deleted', key, valueBefore: before[key] }),
    },
    {
      check: (key) => _.has(before, key)
        && _.has(after, key) && (before[key] !== after[key]),
      buildNode: (key) => ({
        type: 'changed', key, valueBefore: before[key], valueAfter: after[key],
      }),
    },
  ];
  const ast = uniqKeys.map((key) => state.find(({ check }) => check(key))
    .buildNode(key));
  return ast;
};

export default getAst;
