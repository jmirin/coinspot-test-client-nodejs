Please see https://www.coinspot.com.au/api/v2 for documentation on the CoinSpot API v2.

To run:
Rename ".env.example" => ".env" and insert API key and secret.

install dependancies with npm install

$ npm run test

Example usage

```javascript
const coinspot = require('./coinspot.js')
require('dotenv').config()

//key and secret kept seperate in .env file
const key = process.env.PRIVATE_KEY
const secret = process.env.SECRET

var client = new coinspot(key, secret);

client.quotebuy('DOGE', 1000)
// implemented in ./coinspot.js
// self.quotebuy = function(cointype, amount, callback) {
//     request('/api/v2/quote/buy/now', {cointype:cointype, amount:amount}, callback);
// }

client.open_market_orders('BTC')
// implemented in ./coinspot.js
// self.open_market_orders = function(cointype, callback) {
//     request('api/v2/ro/my/orders/market/open', {cointype:cointype}, callback);
// }

client.get_sendreceives()
// implemented in ./coinspot.js
// self.get_sendreceives = function(callback) {
//     request('api/v2/ro/my/sendreceive', callback)
// }
```
