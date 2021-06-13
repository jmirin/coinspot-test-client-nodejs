Please see https://www.coinspot.com.au/api/v2 for documentation on the CoinSpot API v2.


Example usage

```javascript
const coinspot = require('./coinspot.js')
require('dotenv').config()

const key = process.env.PRIVATE_KEY
const secret = process.env.SECRET

var client = new coinspot(key, secret);

// client.quotebuy('DOGE', 1000)
// client.completed_orders()
client.get_sendreceives()
```
