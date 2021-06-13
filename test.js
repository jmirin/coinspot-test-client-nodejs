const coinspot = require('./coinspot.js')
require('dotenv').config()

const key = process.env.PRIVATE_KEY
const secret = process.env.SECRET

var client = new coinspot(key, secret);

// order_list = client.completed_orders()
sendreceives = client.get_sendreceives()