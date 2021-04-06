#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const project = path.join(__dirname, '../tsconfig.json');
const dev = fs.existsSync(project);

if (dev) {
  require('ts-node').register({ project });
}

try {
  require(`../${dev ? 'src' : 'dist'}`).run();
} catch (error) {
  console.error(error);
}
