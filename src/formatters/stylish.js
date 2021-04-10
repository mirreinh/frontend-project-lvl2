const indentation = (v) => '  '.repeat(v);

const getValue = (item, depth) => {
  if (!(item instanceof Object)) {
    return item;
  }
  const keys = Object.keys(item);
  const text = keys
    .reduce((acc, key) => [...acc, `${indentation(depth + 3)}${key}: ${getValue(item[key], depth + 2)}`], [])
    .join('\n');
  return `{\n${text}\n${indentation(depth + 1)}}`;
};

const formatter = (ast, depth = 1) => {
  const typeActions = {
    children: ({ key, children }) => `${indentation(depth + 1)}${key}: ${'{\n'}${formatter(children, depth + 2)}\n${indentation(depth + 1)}}`,
    unchanged: ({ key, valueAfter }) => `${indentation(depth + 1)}${key}: ${getValue(valueAfter, depth)}`,
    added: ({ key, valueAfter }) => `${indentation(depth)}+ ${key}: ${getValue(valueAfter, depth)}`,
    deleted: ({ key, valueBefore }) => `${indentation(depth)}- ${key}: ${getValue(valueBefore, depth)}`,
    changed: ({ key, valueBefore, valueAfter }) => {
      const before = getValue(valueBefore, depth);
      const after = getValue(valueAfter, depth);
      return [`${indentation(depth)}- ${key}: ${before}`, `${indentation(depth)}+ ${key}: ${after}`];
    },
  };
  const lines = ast.flatMap((node) => typeActions[node.type](node));
  return lines.join('\n');
};

export default (ast) => `{\n${formatter(ast)}\n}`;
