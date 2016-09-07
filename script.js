'use strict';

let fs = require('fs');
let data = require('./vendors/temp.json');

for (let name in data) {
  let d = data[name];
  d.name = name;
  d.ticker = {
    url: d.tickerUrl,
    schema: d.jsonSchema
  };
  delete d.tickerUrl;
  delete d.jsonSchema;
  fs.writeFileSync(`./vendors/${name}.json`, JSON.stringify(d));
}
