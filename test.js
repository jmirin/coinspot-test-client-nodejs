const coinspot = require('./coinspot.js')
require('dotenv').config()

//key and secret kept seperate in .env file
const key = process.env.PRIVATE_KEY
const secret = process.env.SECRET

var client = new coinspot(key, secret);

client.quotebuy('DOGE', 10)
client.open_market_orders('BTC')
client.get_sendreceives()
