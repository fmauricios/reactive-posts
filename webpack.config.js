const server = require('./webpack_files/webpack.server.config.js')
const client = require('./webpack_files/webpack.client.config.js')

module.exports = [
	server,
	client,
]