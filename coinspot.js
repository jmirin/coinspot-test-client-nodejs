require('dotenv').config()
const hmac = require('crypto').createHmac
const https = require('https')

const APIV2 = '/api/v2', APIV2_RO = '/api/v2/ro'

function coinspot(key, secret) {
  	var self = this;
  	self.key = key;
  	self.secret = secret;

	var request = function(path, postdata, callback) {
		var nonce = new Date().getTime();

		var postdata = postdata || {};
		postdata.nonce = nonce;

		var stringmessage = JSON.stringify(postdata);
		var signedMessage = new hmac("sha512", self.secret);

		signedMessage.update(stringmessage);

		var sign = signedMessage.digest('hex');

		const options = {
			rejectUnauthorized: false,
			method: 'POST',
			host: 'www.coinspot.com.au',
			port: '',
			path: path,
			headers: {
				'Content-Type': 'application/json',
				'sign': sign,
				'key': self.key
			}
		};

		const req = https.request(options, res => {
			console.log('statusCode:', + res.statusCode)
			var data = ''
			res.on('data', chunk => {
				process.stdout.write(chunk)
				data += chunk
			})
		})

		req.on('error', err => {
			console.error(err.message)
		})


		req.write(stringmessage);
		console.log(stringmessage)
		req.end();
	}


	// Full access endpoints (Implement relevant FA endpoints below)
	// full access status check
	self.status_fa = function(callback){
		request(APIV2+'/status', callback);
	}

	self.quotebuy = function(cointype, amount, callback) {
		request(APIV2+'/quote/buy/now', {cointype:cointype, amount:amount}, callback);
	}

	self.quotesell = function(cointype, amount, callback) {
		request(APIV2+'/quote/sell/now', {cointype:cointype, amount:amount}, callback);
	}

	self.quoteswap = function(cointypesell, cointypebuy, amount, callback) {
		request(APIV2+'/quote/sell/now', {cointype:cointype, amount:amount}, callback);
	}

	self.market_limit_buy = function(cointype, amount, rate, callback) {
		var data = {cointype:cointype, amount:amount, rate: rate}
		request(APIV2+'/my/buy', data, callback);
	}

	self.market_limit_sell = function(cointype, amount, rate, callback) {
		var data = {cointype:cointype, amount:amount, rate: rate}
		request(APIV2+'/my/sell', data, callback);
	}

	self.instant_buy_now = function(cointype, amounttype, amount, rate, threshold, callback) {
		var data = {cointype:cointype, amounttype:amounttype, amount:amount, rate:rate, threshold: threshold} 
		request(APIV2 + '/my/buy/now', data, callback);
	}
	
	self.instant_sell_now = function(cointype, amounttype, amount, rate, threshold, callback) {
		var data = {cointype:cointype, amounttype:amounttype, amount:amount, rate:rate, threshold: threshold} 
		request(APIV2 + '/my/sell/now', data, callback);
	}

	self.cancel_buy_order = function(id, callback) {
		var data = {id:id}
		request(APIV2 + '/my/buy/cancel', data, callback)
	}
	
	self.cancel_sell_order = function(id, callback) {
		var data = {id:id}
		request(APIV2 + '/my/sell/cancel', data, callback)
	}

	

	// Read Only endpoints (implement relevant RO endpoints below)
	// read only status check
	self.status_ro = function(callback) {
		request(APIV2_RO+'/status', callback)
	}

	self.mybalances = function(callback) {
		request(APIV2_RO+'/my/balances', {}, callback);
	}

	self.open_market_orders = function(cointype, callback) {
		request(APIV2_RO+'/my/orders/market/open', {cointype:cointype}, callback);
	}

	self.completed_orders = function(callback) {
		request(APIV2_RO+'/my/orders/completed', {}, callback);
	}

	self.get_sendreceives = function(callback) {
		request(APIV2_RO+'/my/sendreceive', {}, callback)
	}

	self.v1_sendreceives = function(callback) {
		request('/api/ro/my/sendreceive', {}, callback)
	}
}
module.exports = coinspot;