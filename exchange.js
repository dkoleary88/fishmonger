'use strict';
const request = require('request');
const _ = require('lodash');

module.exports = class {
  constructor (config){
    this.name = config.name;
    this.config = {};
    for (let resource in config) {
      if (resource === 'name') continue;
      this[`get${_.capitalize(resource)}`] = function () {
        return this.getResource(resource);
      };
      this.config[resource] = config[resource];
    }
  }

  getResource (resource) {
    let schema = this.config[resource].schema;
    return new Promise((resolve, reject) => {
      request({
        method: this.config[resource].method,
        uri: this.config[resource].url
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
