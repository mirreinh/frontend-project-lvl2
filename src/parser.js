import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export default (filePath) => {
  const currentDirectory = process.cwd();

  const processedPath = path.resolve(currentDirectory, filePath);
  const pathExt = path.extname(processedPath);
  const pathExtName = pathExt.slice(1);
  const file = fs.readFileSync(processedPath);
  const parsers = {
    json: JSON.parse,
    yaml: yaml.safeLoad,
  };
  return parsers[pathExtName](file);
};
