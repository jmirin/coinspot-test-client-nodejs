Please see https://www.coinspot.com.au/v2/api for documentation on the CoinSpot API v2.

To run:
Rename ".env.example" => ".env" and add your API key and secret.

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


client.status_fa()
client.status_ro()

//inputs: cointype, amounttype - aud/coin, amount
client.quotebuy('DOGE', 'AUD', 10)
//optional inputs: rate, threshold 
client.instant_buy_now('DOGE', 'coin', 30)

//inputs: coin
client.open_market_orders('DOGE')

client.get_sendreceives()

```
