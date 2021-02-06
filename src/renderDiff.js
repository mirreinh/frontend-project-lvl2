import _ from 'lodash';

const renderDiff = (before, after) => {
  const beforeKeys = Object.keys(before);
  const afterKeys = Object.keys(after);
  const concatKeys = _.concat(beforeKeys, afterKeys);
  const uniqKeys = _.uniq(concatKeys).sort();

  const state = [
    {
      check: (value) => (value in before) && (value in after) && (before[value] === after[value]),
      getMessage: (value) => `  ${value}: ${before[value]}\n`,
    },
    {
      check: (value) => (value in before) && (value in after) && (before[value] !== after[value]),
      getMessage: (value) => `- ${value}: ${before[value]}\n + ${value}: ${after[value]}\n`,
    },
    {
      check: (value) => value in after,
      getMessage: (value) => `+ ${value}: ${after[value]}\n`,
    },
    {
      check: (value) => value in before,
      getMessage: (value) => `- ${value}: ${before[value]}\n`,
    },
  ];
  const diffList = uniqKeys.reduce((acc, value) => `${acc} ${state.find(({ check }) => check(value)).getMessage(value)}`, '');
  return `{\n${diffList}}`;
};

export default renderDiff;
