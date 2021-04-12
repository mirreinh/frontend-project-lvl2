import _ from 'lodash';

const getAst = (before, after) => {
  const objectsValid = (before instanceof Object) && (after instanceof Object);
  const uniqKeys = objectsValid ? _.union(Object.keys(before), Object.keys(after)) : [];
  const sortedKeys = _.sortBy(uniqKeys);

  const state = [
    {
      check: (key) => before[key] instanceof Object && after[key] instanceof Object,
      buildNode: (key) => ({ type: 'children', key, children: getAst(before[key], after[key]) }),
    },
    {
      check: (key) => _.has(before, key) && _.has(after, key) && (before[key] === after[key]),
      buildNode: (key) => ({ type: 'unchanged', key, valueAfter: after[key] }),
    },
    {
      check: (key) => _.has(after, key) && !_.has(before, key),
      buildNode: (key) => ({ type: 'added', key, valueAfter: after[key] }),
    },
    {
      check: (key) => _.has(before, key) && !_.has(after, key),
      buildNode: (key) => ({ type: 'deleted', key, valueBefore: before[key] }),
    },
    {
      check: (key) => _.has(before, key) && _.has(after, key) && (before[key] !== after[key]),
      buildNode: (key) => ({
        type: 'changed', key, valueBefore: before[key], valueAfter: after[key],
      }),
    },
  ];
  return sortedKeys.map((key) => state.find(({ check }) => check(key)).buildNode(key));
};

export default getAst;
