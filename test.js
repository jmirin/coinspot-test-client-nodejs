require('dotenv').config() //imports key and secret here
const coinspot = require('./coinspot.js')

//key and secret kept seperate in .env file
const key = process.env.PRIVATE_KEY
const secret = process.env.SECRET

var client = new coinspot(key, secret);

// client.status_ro()
client.status_fa()
client.quotebuy('BTC', 'AUD', 10)
client.instant_buy_now('BTC', 'AUD', '10')

// skip for now
// client.market_buy_order('BTC', 10, 'AUD')
// client.instant_swap_now('BTC', 'ADA', )
