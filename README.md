# fishmonger

## Use
### Ticker data
Makes an HTTP request and returns current ticker data from vendor.
```js
const fishmonger = require('fishmonger');

// Returns a promise
fishmonger.btce.getTicker()
.then( result => console.log(result) );

// Use in co / koa style
let result = yield fishmonger.bitfinex.getTicker();
console.log(result);

// Array of available vendors
fishmonger._list;
```

## Available vendors
[`vendors/`](vendors)
- [bitfinex](vendors/bitfinex.json)
- [bitstamp](vendors/bitstamp.json)
- [btc38](vendors/btc38.json)
- [btce](vendors/btce.json)
- [bter](vendors/bter.json)
- [ccex](vendors/ccex.json)
- [hitbtc](vendors/hitbtc.json)
- [kraken](vendors/kraken.json)
- [okcoin](vendors/okcoin.json)

## Release notes
`v0.1.0` - Basic BTCUSD ticker functionality

## Contributing
Please follow [`.eslintrc.yml`](.eslintrc.yml) file as a guide.
Welcome any additions to vendor list.

## Author
Daniel K O'Leary
