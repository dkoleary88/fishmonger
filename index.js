'use strict';

const _ = require('lodash');
const fs = require('fs');
const path = require('path');

const Exchange = require(path.join(__dirname, '/exchange'));

let fishmonger = {};
fishmonger._list = [];

let configs = fs.readdirSync(path.join(__dirname, 'vendors'));
for (let filename of configs) {
  if (!/\.json$/.test(filename) || /^_/.test(filename)) continue;

  let name = filename.split('.')[0];
  let config = require(path.join(__dirname, `/vendors/${filename}`));
  let exchange = new Exchange(config);

  fishmonger[exchange._name] = exchange;
  fishmonger._list.push(exchange._name);
}

module.exports = fishmonger;
