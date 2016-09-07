'use strict';
const _ = require('lodash');
const fs = require('fs');
const Exchange = require('./exchange');

let configs = fs.readdirSync('./vendors');
for (let filename of configs) {
  if (!/\.json$/.test(filename)) continue;
  let name = filename.split('.')[0];
  let config = require(`./vendors/${filename}`);
  exports[name] = new Exchange(config);
}
