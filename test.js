require('dotenv').config() //imports key and secret here
const coinspot = require('./coinspot.js')

//key and secret kept seperate in .env file
const key = process.env.PRIVATE_KEY
const secret = process.env.SECRET

var client = new coinspot(key, secret);

client.status_ro()
client.status_fa()
client.quotebuy('HBAR', 'AUD', 6)
client.quotesell('DOGE', 'coin', 30)
//var rate = client.quotesell('HBAR', 'coin', 10)
//console.log(rate)
// client.instant_sell_now('HBAR', 'coin', 6)