import fs from 'fs';
import path from 'path';

export default (filePath) => {
  const currentDirectory = process.cwd();

  const processedPath = path.resolve(currentDirectory, filePath);

  const parsed = JSON.parse(fs.readFileSync(processedPath));

  return parsed;
};
