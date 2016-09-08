'use strict';
const request = require('request');
const _ = require('lodash');

module.exports = class {
  constructor (config){
    this._name = config._name;
    this._config = {};

    for (let resource in config) {
      if (/^_/.test(resource)) continue;

      this[`get${_.capitalize(resource)}`] = function () {
        return this.getResource(resource);
      };
      this._config[resource] = config[resource];
    }
  }

  getResource (resource) {
    let exchange = this._config[resource];
    let schema = exchange.schema;

    return new Promise((resolve, reject) => {
      request({
        method: exchange.method,
        uri: exchange.url
      }, (err, _, body) => {
        if (err) reject(err);
        else resolve(body);
      });
    }).then((body) => {
      body = JSON.parse(body);
      let result = {};
      for (let key in schema) {
        result[schema[key]] = _.get(body, key);
      }
      return result;
    }).catch((err) => {
      return err;
    });
  }

};
