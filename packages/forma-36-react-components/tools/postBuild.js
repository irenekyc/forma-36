const path = require('path');
const copyFile = require('fs').copyFileSync;

const distDir = path.join(__dirname, '../dist/');

(() => {
  copyFile(`${distDir}index.js`, `${distDir}alpha/index.js`)
})()
