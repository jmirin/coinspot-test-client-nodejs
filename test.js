require('dotenv').config() //imports key and secret here
const coinspot = require('./coinspot.js')
const https = require('https');


//key and secret kept seperate in .env file
const key = process.env.PRIVATE_KEY
const secret = process.env.SECRET

var client = new coinspot(key, secret);

client.status_ro()
client.status_fa()
// client.instant_sell_now('BTC', 'AUD', 5)

//without specified rate
client.instant_buy_now('CRV', 'coin', 0.5)

//with specified rate (must include threshold, and direction)
//client.instant_buy_now('CRV', 'COIN', 1, 5.8, 5, 'UP')
