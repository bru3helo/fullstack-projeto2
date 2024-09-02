const redis = require("redis")

//Redis
const clientRedis = redis.createClient()
clientRedis.on('error', err => console.log("Error Redis Client") )

await clientRedis.connected()

module.exports = {clientRedis}