require('dotenv').config() //imports key and secret here
const coinspot = require('./coinspot.js')
const https = require('https');


//key and secret kept seperate in .env file
const key = process.env.PRIVATE_KEY
const secret = process.env.SECRET

var client = new coinspot(key, secret);

client.status_ro()
client.status_fa()
    